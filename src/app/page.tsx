import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Paplo</h1>
        <p className="text-xl mb-8">덜어내 줄이고, 더해서 가치</p>
        <p className="text-gray-600">Less Paplo, More Value</p>
        <p className="mt-8 text-sm text-gray-500">환경을 생각하는 우리의 작은 실천이<br />지구를 위한 큰 변화가 됩니다 🌱</p>
        <p className="mt-4 text-sm">Thank you...</p>
      </div>
    </main>
  )
}
