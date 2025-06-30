import { google } from 'googleapis';

// 환경 변수 확인
const SPREADSHEET_ID = process.env.GOOGLE_SHEET_ID;
const GOOGLE_CLIENT_EMAIL = process.env.GOOGLE_CLIENT_EMAIL;
const GOOGLE_PRIVATE_KEY = process.env.GOOGLE_PRIVATE_KEY;

if (!SPREADSHEET_ID || !GOOGLE_CLIENT_EMAIL || !GOOGLE_PRIVATE_KEY) {
  throw new Error('Missing required environment variables for Google Sheets');
}

// Google Auth 설정
const auth = new google.auth.GoogleAuth({
  credentials: {
    client_email: GOOGLE_CLIENT_EMAIL,
    private_key: GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'),
  },
  scopes: ['https://www.googleapis.com/auth/spreadsheets'],
});

// Google Sheets API 초기화
const sheets = google.sheets({ version: 'v4', auth });

// 시트 범위 설정 (A열부터 G열: 타임스탬프, 이름, 이메일, 직업, 카테고리, 제안내용, 첨부파일)
const SHEET_NAME = 'Suggestions';
const RANGE = `${SHEET_NAME}!A:G`;

// 헤더 설정
const HEADERS = [
  '제출일시',
  '이름',
  '이메일',
  '직업',
  '카테고리',
  '제안내용',
  '첨부파일'
];

/**
 * 시트에 새로운 행을 추가합니다.
 * @param values 추가할 데이터 배열
 * @returns 응답 데이터
 */
export async function addRowToSheet(values: string[]) {
  try {
    // 시트가 존재하는지 확인
    const sheets_metadata = await sheets.spreadsheets.get({
      spreadsheetId: SPREADSHEET_ID,
    });

    // 시트가 없으면 생성
    let sheetExists = false;
    for (const sheet of sheets_metadata.data.sheets || []) {
      if (sheet.properties?.title === SHEET_NAME) {
        sheetExists = true;
        break;
      }
    }

    if (!sheetExists) {
      // 새 시트 추가
      await sheets.spreadsheets.batchUpdate({
        spreadsheetId: SPREADSHEET_ID,
        requestBody: {
          requests: [
            {
              addSheet: {
                properties: {
                  title: SHEET_NAME,
                },
              },
            },
          ],
        },
      });

      // 헤더 추가
      await sheets.spreadsheets.values.update({
        spreadsheetId: SPREADSHEET_ID,
        range: `${SHEET_NAME}!A1:G1`,
        valueInputOption: 'USER_ENTERED',
        requestBody: {
          values: [HEADERS],
        },
      });
    }

    // 데이터 추가
    const response = await sheets.spreadsheets.values.append({
      spreadsheetId: SPREADSHEET_ID,
      range: RANGE,
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [values],
      },
    });

    console.log('Data added successfully:', values[0]); // 타임스탬프 로깅
    return response.data;
  } catch (error: any) {
    console.error('Error adding row to Google Sheet:', error);
    throw new Error(`Failed to add row to sheet: ${error?.message || 'Unknown error'}`);
  }
}

/**
 * 시트의 모든 데이터를 가져옵니다.
 * @returns 시트 데이터 배열
 */
export async function getAllRows() {
  try {
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: SPREADSHEET_ID,
      range: RANGE,
    });

    return response.data.values || [];
  } catch (error: any) {
    console.error('Error fetching rows from Google Sheet:', error);
    throw new Error(`Failed to fetch rows: ${error?.message || 'Unknown error'}`);
  }
} 