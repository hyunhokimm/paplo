import { NextResponse } from 'next/server';
import { addSuggestionToSheet } from '@/lib/googleSheets';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, suggestion, category } = body;

    // Google Sheets에 데이터 추가
    await addSuggestionToSheet({ name, email, suggestion, category });

    return NextResponse.json({ 
      message: '제안이 성공적으로 제출되었습니다.',
      success: true 
    });
  } catch (error) {
    console.error('Error processing suggestion:', error);
    return NextResponse.json(
      { 
        message: '제안 제출 중 오류가 발생했습니다.',
        success: false 
      },
      { status: 500 }
    );
  }
} 