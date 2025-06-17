'use client';

import { useEffect, useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import axios from 'axios';

const KAKAO_PAY_HOST = 'https://kapi.kakao.com/v1/payment';
const KAKAO_ADMIN_KEY = process.env.NEXT_PUBLIC_KAKAO_ADMIN_KEY || '';

function PaymentSuccess() {
  const searchParams = useSearchParams();
  const [paymentInfo, setPaymentInfo] = useState({
    orderId: '',
    amount: '',
    itemName: ''
  });

  useEffect(() => {
    const pg_token = searchParams.get('pg_token');
    const tid = sessionStorage.getItem('tid');
    
    if (pg_token && tid) {
      // 결제 승인 요청
      const approvePayment = async () => {
        try {
          const response = await axios.post(
            `${KAKAO_PAY_HOST}/approve`,
            {
              cid: 'TC0ONETIME',
              tid: tid,
              partner_order_id: sessionStorage.getItem('orderId'),
              partner_user_id: 'ANONYMOUS',
              pg_token: pg_token
            },
            {
              headers: {
                'Authorization': `KakaoAK ${KAKAO_ADMIN_KEY}`,
                'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
              }
            }
          );

          const { amount, item_name, partner_order_id } = response.data;
          
          setPaymentInfo({
            orderId: partner_order_id,
            amount: amount.total.toString(),
            itemName: item_name
          });

          // 세션 스토리지 정리
          sessionStorage.removeItem('tid');
          sessionStorage.removeItem('orderId');
        } catch (error) {
          console.error('결제 승인 실패:', error);
          window.location.href = '/fail';
        }
      };

      approvePayment();
    }
  }, [searchParams]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">감사합니다!</h1>
        <p className="text-xl mb-8">후원이 성공적으로 완료되었습니다.</p>
        
        <div className="mb-8 text-left bg-gray-50 p-6 rounded-lg">
          <h2 className="text-lg font-semibold mb-4">결제 정보</h2>
          <p className="mb-2">주문번호: {paymentInfo.orderId}</p>
          <p className="mb-2">상품명: {paymentInfo.itemName}</p>
          <p className="mb-2">결제금액: {Number(paymentInfo.amount).toLocaleString()}원</p>
        </div>

        <a href="/" className="text-blue-500 hover:underline">
          메인으로 돌아가기
        </a>
      </div>
    </div>
  );
}

export default function SuccessPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <PaymentSuccess />
    </Suspense>
  );
} 