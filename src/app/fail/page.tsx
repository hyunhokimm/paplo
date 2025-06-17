export default function FailPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">결제 실패</h1>
        <p className="text-xl mb-8">결제 처리 중 문제가 발생했습니다.</p>
        <a href="/" className="text-blue-500 hover:underline">
          메인으로 돌아가기
        </a>
      </div>
    </div>
  );
} 