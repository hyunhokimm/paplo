import { GoogleSpreadsheet, GoogleSpreadsheetRow } from 'google-spreadsheet';
import { JWT } from 'google-auth-library';

const SPREADSHEET_ID = process.env.GOOGLE_SHEET_ID;
const GOOGLE_SERVICE_ACCOUNT_EMAIL = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
const GOOGLE_PRIVATE_KEY = process.env.GOOGLE_PRIVATE_KEY;

if (!SPREADSHEET_ID || !GOOGLE_SERVICE_ACCOUNT_EMAIL || !GOOGLE_PRIVATE_KEY) {
  throw new Error('Missing required environment variables for Google Sheets');
}

export async function addSuggestionToSheet(data: {
  name: string;
  email: string;
  category: string;
  suggestion: string;
}) {
  try {
    const doc = new GoogleSpreadsheet(SPREADSHEET_ID as string, new JWT({
      email: GOOGLE_SERVICE_ACCOUNT_EMAIL as string,
      key: GOOGLE_PRIVATE_KEY as string,
      scopes: [
        'https://www.googleapis.com/auth/spreadsheets',
      ],
    }));

    await doc.loadInfo();
    const sheet = doc.sheetsByIndex[0];
    
    // Set headers first
    const headers = ['제출일시', '이름', '이메일', '카테고리', '제안내용'];
    await sheet.setHeaderRow(headers);
    await sheet.loadHeaderRow();

    const row = {
      '제출일시': new Date().toLocaleString('ko-KR', { timeZone: 'Asia/Seoul' }),
      '이름': data.name,
      '이메일': data.email,
      '카테고리': data.category,
      '제안내용': data.suggestion,
    };

    await sheet.addRow(row);
    return true;
  } catch (error) {
    console.error('Error adding suggestion to sheet:', error);
    throw error;
  }
} 