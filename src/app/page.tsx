'use client';

import Image from "next/image";
import SuggestionForm from './components/SuggestionForm';
import { useState } from 'react';

interface FaqItem {
  question: string;
  answer: string;
  detail: string;
  additionalInfo: string;
}

const faqData: FaqItem[] = [
  {
    question: "Paplo 구조는 무료인가요?",
    answer: "Is the Paplo structure free?",
    detail: "네, 기본 구조는 무료 라이센스로 제공됩니다. QR 코드 삽입 조건만 지키시면 됩니다.",
    additionalInfo: "Yes, the basic structure is provided under a free license. You just need to include the QR code as specified."
  },
  {
    question: "QR 코드는 꼭 있어야 하나요?",
    answer: "Is the QR code mandatory?",
    detail: "무료 버전에서는 필수입니다. 유료 라이센스에서는 선택적으로 제거 가능합니다.",
    additionalInfo: "It's mandatory for the free version. In the premium license, you can optionally remove it."
  },
  {
    question: "디자인을 수정해도 되나요?",
    answer: "Can I modify the design?",
    detail: "무료 버전은 기본 디자인만 사용 가능합니다. 디자인 수정은 유료 라이센스에서 가능합니다.",
    additionalInfo: "The free version only allows the basic design. Design modifications are available with the premium license."
  },
  {
    question: "상업적 사용이 가능한가요?",
    answer: "Can I use it commercially?",
    detail: "네, 무료 버전도 상업적 사용이 가능합니다.",
    additionalInfo: "Yes, commercial use is allowed with the free version."
  },
  {
    question: "기술 지원이 제공되나요?",
    answer: "Is technical support provided?",
    detail: "유료 라이센스 사용자에게는 전문적인 기술 지원이 제공됩니다. 무료 버전은 기본 문서와 커뮤니티 지원이 제공됩니다.",
    additionalInfo: "Premium license users receive professional technical support. Free version users have access to basic documentation and community support."
  },
  {
    question: "해외에서도 사용할 수 있나요?",
    answer: "Can I use it internationally?",
    detail: "네, 전 세계 어디서나 사용 가능합니다. 국가별 독점 계약은 유료 라이센스를 통해 가능합니다.",
    additionalInfo: "Yes, it can be used worldwide. Country-specific exclusive contracts are available through the premium license."
  },
  {
    question: "문제 발생 시 책임은 어떻게 되나요?",
    answer: "What about liability in case of issues?",
    detail: "Paplo는 구조 설계의 기본 가이드라인을 제공합니다. 실제 제작 및 사용 과정에서 발생하는 문제에 대한 책임은 제작자/사용자에게 있습니다. 유료 라이센스의 경우 계약서에 명시된 범위 내에서 기술 지원 및 문제 해결을 제공합니다.",
    additionalInfo: "Paplo provides basic structural design guidelines. The manufacturer/user is responsible for any issues arising during production and use. For premium licenses, technical support and problem resolution are provided within the scope specified in the contract."
  }
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentFaqSlide, setCurrentFaqSlide] = useState(0);
  const [currentFeedbackSlide, setCurrentFeedbackSlide] = useState(0);
  
  const totalSlides = 2;
  const totalFaqSlides = 2;
  const totalFeedbackSlides = 3;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center section ">
        {/* Background Effects - 더 부드럽게 수정 */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-purple-50 opacity-50"></div>
        
        <div className="relative container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            {/* Logo & Tagline - 더 깔끔하게 */}
            <div className="text-center mb-16">
              <h1 className="text-7xl font-bold mb-8 header-gradient">
                Paplo
              </h1>
              <div className="space-y-4">
                <h2 className="text-4xl text-gray-800 font-light">
                  덜어낸 종이, 더해진 가치
                </h2>
                <p className="text-2xl text-gray-600">
                  Less Paper, More Value.
                </p>
              </div>
            </div>

            {/* Message Card - 미니멀하게 수정 */}
            <div className="card p-10 backdrop-blur-sm">
              <div className="space-y-6 text-center">
                <p className="text-lg text-gray-800 ">
                  안녕하세요! 한국에서 만든 친환경 포장 솔루션 Paplo의 김현호입니다.<br/>
                  저희가 만든 작은 혁신을 여러분과 함께 나누고 싶습니다.<br/>
                  현재 이 디자인은 무료로 사용 가능합니다.<br/>
                  자세한 내용은 아래를 참고해주세요.<br/>
                  감사합니다.
                </p>
                <div className="w-32 h-px bg-indigo-100 mx-auto"></div>
                <p className="text-gray-600 leading-relaxed [word-break:keep-all]">
                  Hello! I'm Hyunho Kim from Paplo, an eco-friendly packaging solution made in South Korea.<br/>
                  We'd like to share our small innovation with you.<br/>
                  This design is free to use.<br/>
                  Please refer to the details below.<br/>
                  Thank you.
                </p>
              </div>
            </div>

            {/* Scroll Down Arrow - 여백 추가 */}
            <div className="mt-12 mb-8 flex justify-center">
              <div className="animate-bounce">
                <svg
                  className="w-6 h-6 text-indigo-500"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Features Section */}
      <section id="features" className="section">
        <div className="container mx-auto px-6">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="section-title">주요 특징</h2>
            <p className="section-subtitle">
              혁신적인 구조로 만들어낸 친환경 포장 솔루션<br/>
              <span className="text-gray-500">Eco-friendly Packaging Solution with Innovative Structure</span>
            </p>
          </div>

          {/* 실제 사용 예시 이미지 */}
          <div className="mb-12 flex flex-col items-center">
            <Image
              src="/Screenshot_1.png"
              alt="Paplo 구조 실사용 예시"
              width={400}
              height={500}
              className="rounded-xl shadow-md mb-4"
            />
            <p className="text-gray-700 text-center text-base">
              실제 사용 모습<br/>
              <span className="text-sm text-gray-500">Real-world usage of Paplo structure</span>
            </p>
          </div>

          {/* Feature Cards - 통일성 있게 수정 */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Weight & Volume */}
            <div className="card p-8">
              <div className="w-14 h-14 bg-indigo-600 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-indigo-600 mb-2">무게 1/3</h3>
                  <p className="text-gray-600">Weight Reduced by 2/3</p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-indigo-600 mb-2">부피 1/3</h3>
                  <p className="text-gray-600">Volume Reduced by 2/3</p>
                </div>
                <div className="pt-4 border-t border-gray-100">
                  <p className="text-gray-700">기존 대비 종이 사용량을 획기적으로 줄인 혁신적 구조</p>
                  <p className="text-gray-500 text-sm mt-1">Innovative structure that dramatically reduces paper usage</p>
                </div>
              </div>
            </div>

            {/* Eco-friendly */}
            <div className="card p-8">
              <div className="w-14 h-14 bg-indigo-600 rounded-xl flex items-center justify-center mb-6">
                <span className="text-2xl text-white">🌱</span>
              </div>
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-indigo-600 mb-2">친환경</h3>
                  <p className="text-gray-600">접착제가 필요 없는 구조로 재활용이 용이합니다.</p>
                  <p className="text-gray-500 text-sm mt-1">Easy to recycle with no glue required structure</p>
                </div>
                <div className="pt-4 border-t border-gray-100">
                  <div className="flex items-center text-indigo-600">
                    <span className="text-2xl font-bold mr-2">100%</span>
                    <span className="font-semibold">재활용 가능</span>
                    <span className="text-sm ml-2 text-gray-500">(Recyclable)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Expandable */}
            <div className="card p-8">
              <div className="w-14 h-14 bg-indigo-600 rounded-xl flex items-center justify-center mb-6">
                <span className="text-2xl text-white">📦</span>
              </div>
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-indigo-600 mb-2">확장성</h3>
                  <p className="text-gray-600">측면 연결 구조로 최대 4개까지 안전하게 연결 가능</p>
                  <p className="text-gray-500 text-sm mt-1">Safe connection up to 4 units with side connection structure</p>
                </div>
                <div className="pt-4 border-t border-gray-100">
                  <div className="flex items-center text-indigo-600">
                    <span className="text-2xl font-bold mr-2">4x</span>
                    <span className="font-semibold">확장 가능</span>
                    <span className="text-sm ml-2 text-gray-500">(Expandable)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Comparison Section */}
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold text-gray-800 mb-8">
              혁신적인 구조 비교
              <span className="block text-lg text-gray-600 mt-2">Innovative Structure Comparison</span>
            </h3>
            <div className="relative max-w-2xl mx-auto">
              <Image
                src="/compare.png"
                alt="기존 제품과 Paplo 구조 비교"
                width={800}
                height={400}
                className="rounded-xl shadow-lg"
              />
              <div className="mt-6 grid grid-cols-2 gap-4 text-center max-w-lg mx-auto">
                <div>
                  <h4 className="text-lg font-semibold text-gray-800">기존 구조</h4>
                  <p className="text-gray-600">Conventional Structure</p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-800">Paplo 구조</h4>
                  <p className="text-gray-600">Paplo Structure</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Environmental Impact Section */}
      <section id="impact" className="section bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="section-title">환경 보호 효과</h2>
            <p className="section-subtitle">
              Making a Difference for Our Planet
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Paper Reduction */}
            <div className="card p-8 text-center">
              <div className="w-14 h-14 bg-indigo-600 rounded-xl flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl text-white">📊</span>
              </div>
              <div className="text-5xl font-bold text-indigo-600 mb-4">67%</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">종이 사용량 절감</h3>
              <p className="text-gray-600">Paper Usage Reduction</p>
            </div>

            {/* CO2 Reduction */}
            <div className="card p-8 text-center">
              <div className="w-14 h-14 bg-indigo-600 rounded-xl flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl text-white">🌱</span>
              </div>
              <div className="text-5xl font-bold text-indigo-600 mb-4">25kg</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">CO2 배출 감소 / 월</h3>
              <p className="text-gray-600">CO2 Reduction / Month</p>
            </div>

            {/* Recyclability */}
            <div className="card p-8 text-center">
              <div className="w-14 h-14 bg-indigo-600 rounded-xl flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl text-white">♻️</span>
              </div>
              <div className="text-5xl font-bold text-indigo-600 mb-4">100%</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">재활용 가능</h3>
              <p className="text-gray-600">Recyclable</p>
            </div>
          </div>

          {/* Annual Impact */}
          <div className="max-w-4xl mx-auto">
            <div className="card p-10">
              <div className="w-16 h-16 bg-indigo-600 rounded-xl flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl text-white">🌳</span>
              </div>
              <h3 className="text-3xl font-bold text-center text-indigo-600 mb-8">
                연간 환경 기여 효과
              </h3>
              <div className="grid md:grid-cols-3 gap-8 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-indigo-600 mb-2">1,000장</div>
                  <div className="text-gray-600">사용 시</div>
                  <div className="text-gray-400">Usage</div>

                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-indigo-600 mb-2">1그루</div>
                  <div className="text-gray-600">나무 절감</div>
                  <div className="text-gray-400">Tree Savings</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-indigo-600 mb-2">300kg</div>
                  <div className="text-gray-600">연간 CO2 절감</div>
                  <div className="text-gray-400">Annual CO2 Savings</div>
                </div>
              </div>
              <p className="text-lg text-center text-gray-700 bg-indigo-50 p-4 rounded-xl">
                Paper savings + No glue + Smaller volume = Better sustainability
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section id="story" className="section">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="section-title">Paplo의 시작</h2>
            <p className="section-subtitle">
              친환경 포장재 혁신을 위한 여정<br/>
              <span className="text-gray-500">Journey to Eco-friendly Packaging Innovation</span>
            </p>
          </div>

          <div className="space-y-8 max-w-4xl mx-auto">
            {/* Problem Recognition */}
            <div className="card p-8">
              <div className="w-14 h-14 bg-indigo-600 rounded-xl flex items-center justify-center mb-6">
                <span className="text-2xl text-white">💡</span>
              </div>
              <h3 className="text-2xl font-bold text-indigo-600 mb-6">
                문제 인식
              </h3>
              <div className="space-y-6">
                <p className="text-lg text-gray-700">
                  10년간 테이크아웃 카페를 운영하며 느낀 과도한 포장의 문제.
                </p>
                <p className="text-lg text-gray-600">
                  The issue of excessive packaging experienced during 10 years of running a takeout café.
                </p>

                <div className="bg-indigo-50 p-6 rounded-xl">
                  <p className="italic text-gray-700 mb-2">"이 정도까지 종이를 써야 할까?"</p>
                  <p className="italic text-gray-500 text-sm">"Do we really need to use this much paper?"</p>
                  <p className="italic text-gray-700 mt-4 mb-2">"종이를 덜 쓰는 구조는 없을까?"</p>
                  <p className="italic text-gray-500 text-sm">"Is there a way to use less paper?"</p>
                </div>
              </div>
            </div>

            {/* Solution */}
            <div className="card p-8">
              <div className="w-14 h-14 bg-indigo-600 rounded-xl flex items-center justify-center mb-6">
                <span className="text-2xl text-white">✨</span>
              </div>
              <h3 className="text-2xl font-bold text-indigo-600 mb-6">
                구조적 해답
              </h3>
              <div className="space-y-6">
                <p className="text-lg text-gray-700">
                  종이 캐리어의 구조를 바꿔 종이를 확실히 줄일 수 있다는 희망을 발견.
                  그 작은 발견이 Paplo의 시작이 되었습니다.
                </p>
                <p className="text-lg text-gray-700">
                  The idea of reducing paper usage by changing the structure of the paper carrier.
                  The small discovery became the beginning of Paplo.
                </p>
                <div className="bg-indigo-50 p-6 rounded-xl">
                  <p className="font-semibold text-indigo-600 mb-4 text-lg">혁신의 핵심</p>
                  <ul className="space-y-4">
                    <li className="flex items-center space-x-4">
                      <span className="text-2xl flex-shrink-0">💡</span>
                      <div>
                        <p className="text-gray-700">핵심: 기존 종이컵 홀더에 손잡이만 결합하는 방식</p>
                        <p className="text-sm text-gray-500">Core: Method of combining handles with existing cup holders</p>
                      </div>
                    </li>
                    <li className="flex items-center space-x-4">
                      <span className="text-2xl flex-shrink-0">🌱</span>
                      <div>
                        <p className="text-gray-700">결과: 구조 자체가 기술이 되다</p>
                        <p className="text-sm text-gray-500">Result: Structure itself becomes technology</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How to Use Section */}
      <section id="usage" className="py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-blue-50 to-purple-50"></div>
        
        <div className="relative max-w-7xl mx-auto px-6">
          {/* Section Header */}
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 bg-clip-text text-transparent animate-gradient">
              사용법
            </h2>
            <p className="text-2xl text-gray-600 mb-2">간단한 4단계로 완성하는 친환경 포장재</p>
            <p className="text-xl text-gray-500">Complete in 4 Simple Steps</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* Video Section */}
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl border border-white/50 shadow-xl">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">실제 사용 영상</h3>
              <p className="text-gray-600 mb-6">How to Use Video</p>
              <p className="text-gray-600 mb-4">YouTube Shorts로 보는 간단한 사용법</p>
              <p className="text-gray-500 mb-8">Simple instructions through YouTube Shorts</p>
              <div className="relative pt-[177.77%]">
                <iframe
                  className="absolute inset-0 w-full h-full rounded-xl"
                  src="https://www.youtube.com/embed/j1P_ISPAY9E"
                  title="Paplo 사용법"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>

            {/* Step by Step Instructions */}
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl border border-white/50 shadow-xl">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">단계별 사용법</h3>
              <p className="text-gray-600 mb-8">Step by Step Guide</p>

              <div className="space-y-6">
                {/* Step 1 */}
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">1</span>
                  </div>
                  <div>
                    <p className="text-gray-800">캐리어를 컵과 홀더 사이에 하단부까지 밀어 넣습니다</p>
                    <p className="text-gray-500">Insert the carrier fully between cup and sleeve</p>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">2</span>
                  </div>
                  <div>
                    <p className="text-gray-800">하단 후크가 홈대에 '딱' 걸리게 고정합니다</p>
                    <p className="text-gray-500">Lock the hook into the holder groove</p>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">3</span>
                  </div>
                  <div>
                    <p className="text-gray-800">손잡이를 들어 이동합니다</p>
                    <p className="text-gray-500">Lift by the handle and carry</p>
                  </div>
                </div>

                {/* Step 4 */}
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">4</span>
                  </div>
                  <div>
                    <p className="text-gray-800">4개까지 연결 가능 (측면 귀 부분 사용)</p>
                    <p className="text-gray-500">For multiple cups, connect carriers using side flaps</p>
                  </div>
                </div>

                {/* Usage Tips */}
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold">!</span>
                    </div>
                    <h4 className="text-lg font-semibold text-gray-800">사용 팁</h4>
                    <p className="text-gray-600">Usage Tips</p>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-2"></span>
                      <div>
                        <p className="text-gray-800">사용 시 종이 캐리어 눌림목을 살짝 구부려 사용해주세요.</p>
                        <p className="text-gray-500">Gently flex the middle fold of the carrier to insert it into the holder.</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-2"></span>
                      <div>
                        <p className="text-gray-800">연결 시 측면 귀 부분을 확실히 끼워주세요</p>
                        <p className="text-gray-500">Make sure to securely insert the side flaps when connecting</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Coffee Support / 커피챗 후원 */}
      <section id="coffee-support" className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-4xl font-bold mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent text-center">
            커피챗 후원 / Support the Creator
          </h2>
          
          <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-2xl">
            <div className="flex items-center justify-center mb-6">
              <div className="text-4xl mr-4">☕</div>
              <div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  커피 한 잔으로 응원하기
                </h3>
                <p className="text-gray-600">Support with a Cup of Coffee</p>
              </div>
            </div>
            
            <div className="text-center mb-8">
              <p className="text-gray-800 mb-4 leading-relaxed">
                Paplo 구조가 마음에 드셨나요?<br/>
                무료 라이센스를 사용하시는 분들의 자발적인 후원으로<br/>
                더 나은 친환경 포장 솔루션을 개발하고 있습니다.
              </p>
              <p className="text-gray-600 leading-relaxed">
                If you like the Paplo structure,<br/>
                support us with a cup of coffee to develop<br/>
                better eco-friendly packaging solutions.
              </p>
            </div>

          

            <div className="grid md:grid-cols-2 gap-6">
              {/* 카카오페이 후원 (국내) */}
              <div className="text-center">
                <h4 className="font-semibold text-gray-800 mb-4">국내 후원 / Domestic</h4>
                <div className="space-y-4">
                  <div className="flex flex-col items-center gap-2">
                    <a 
                      href="https://qr.kakaopay.com/FNjGshihw" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center space-x-3 px-6 py-3 bg-[#FFE812] text-black rounded-lg hover:bg-[#FFE000] transition-all shadow-sm hover:shadow-md text-base font-medium"
                    >
                      <Image 
                        src="/KakaoTalk_logo.svg" 
                        alt="카카오페이" 
                        width={24} 
                        height={24}
                        priority
                      />
                      <span>카카오페이로 후원하기 / Support via KakaoPay</span>
                    </a>
                    <div className="text-sm text-gray-600 bg-gray-50 px-4 py-2 rounded-lg">
                      <span className="text-[#FFE812]">●</span>
                      모바일에서만 후원이 가능합니다
                      <br />
                      <span className="text-xs text-gray-500">Mobile device required for KakaoPay donation</span>
                    </div>
                  </div>
                  <div className="flex justify-center mt-4">
                    <div className="bg-white p-4 rounded-xl shadow-sm">
                      <Image 
                        src="/kakaoQR.png" 
                        alt="카카오페이 QR 코드" 
                        width={160} 
                        height={160} 
                        className="mx-auto"
                        priority
                        style={{ width: 'auto', height: 'auto' }}
                      />
                      <a 
                        href="https://qr.kakaopay.com/FNjGshihw"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-gray-500 hover:text-gray-700 transition-colors mt-2 block"
                      >
                        https://qr.kakaopay.com/FNjGshihw
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Buy Me a Coffee 후원 (해외) */}
              <div className="text-center">
                <h4 className="font-semibold text-gray-800 mb-4">해외 후원 / International</h4>
                <div className="space-y-4">
                  <a 
                    href="https://www.buymeacoffee.com/whoaukim" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 px-6 py-3 bg-[#fd0] text-[#0d0c22] rounded-lg hover:bg-[#ffd428] transition-all shadow-sm hover:shadow-md text-base font-medium"
                  >
                    <Image 
                      src="/buyme_logo.svg" 
                      alt="Buy Me a Coffee" 
                      width={24} 
                      height={24}
                      priority
                    />
                    <span>커피 한 잔 사주기 / Buy Me a Coffee</span>
                  </a>
                  <div className="flex justify-center mt-4">
                    <div className="bg-white p-4 rounded-xl shadow-sm">
                      <div className="text-sm text-gray-600 mb-2">Scan QR Code to Support</div>
                      <Image 
                        src="/buyme.png" 
                        alt="Buy Me a Coffee QR Code" 
                        width={180} 
                        height={180} 
                        className="mx-auto"
                        priority
                      />
                      <a 
                        href="https://www.buymeacoffee.com/whoaukim"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-gray-500 hover:text-gray-700 transition-colors mt-2 block"
                      >
                        https://www.buymeacoffee.com/whoaukim
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* License Section */}
      <section id="license" className="py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-blue-50 to-green-50"></div>
        
        <div className="relative max-w-7xl mx-auto px-6">
          {/* Section Header */}
          <div className="text-center mb-20">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 via-blue-500 to-green-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg transform hover:scale-110 transition-transform duration-500">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-blue-600 to-green-600 bg-clip-text text-transparent animate-gradient">
              라이센스 모델
            </h2>
            <p className="text-2xl text-gray-600 mb-2">다양한 사용 목적에 맞는 유연한 라이센스 옵션</p>
            <p className="text-xl text-gray-500">Flexible License Options for Various Uses</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Free Version Card */}
            <div className="relative group transform transition-all duration-500 hover:-translate-y-2">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl blur opacity-20 group-hover:opacity-30 transition-all duration-500"></div>
              <div className="relative bg-white/80 backdrop-blur-sm p-8 rounded-2xl border border-white/50 shadow-xl">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center shadow-lg">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold">무료 버전</h3>
                  </div>
                  <span className="px-4 py-2 bg-blue-100 text-blue-600 rounded-full font-semibold">FREE</span>
                </div>

                                 <ul className="space-y-4 mb-8">
                   <li className="flex items-center space-x-3">
                     <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                     </svg>
                     <div>
                       <p className="text-gray-700">오픈 라이센스로 누구나 사용 가능</p>
                       <p className="text-sm text-gray-500">Available to everyone under open license</p>
                     </div>
                   </li>
                   <li className="flex items-center space-x-3">
                     <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                     </svg>
                     <div>
                       <p className="text-gray-700">QR 코드 삽입 필수</p>
                       <p className="text-sm text-gray-500">QR code insertion required</p>
                     </div>
                   </li>
                   <li className="flex items-center space-x-3">
                     <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                     </svg>
                     <div>
                       <p className="text-gray-700">기술 도면 및 목형 파일 제공</p>
                       <p className="text-sm text-gray-500">Technical drawings and template files provided</p>
                     </div>
                   </li>
                   <li className="flex items-center space-x-3">
                     <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                     </svg>
                     <div>
                       <p className="text-gray-700">커피챗 후원 페이지 연결</p>
                       <p className="text-sm text-gray-500">Coffee chat support page connection</p>
                     </div>
                   </li>
                 </ul>

                <p className="text-sm text-gray-500 mb-8">* QR 코드는 현재 웹사이트로 연결됩니다</p>

                {/* Download Buttons */}
                <div className="space-y-4">
                  <a 
                    href="https://drive.google.com/file/d/1ok3bPDOCLZR318gnHZ9ppSLvxfMz5N_o/view?usp=sharing" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center space-x-3 w-full py-3 px-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:shadow-lg hover:shadow-purple-500/30 transform hover:scale-105 transition-all duration-300"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <span>도면 다운로드 / Download Drawings</span>
                  </a>
                  <a 
                    href="https://docs.google.com/document/d/12eK1s-QMSlnM0DYZNKfzalJiHdcG2MYJvXGT7iLSjLE/edit?usp=sharing" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center space-x-3 w-full py-3 px-6 bg-white border-2 border-purple-600 text-purple-600 rounded-xl hover:shadow-lg hover:shadow-purple-500/30 transform hover:scale-105 transition-all duration-300"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                    <span>사용설명서 다운로드 / Download Manual</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Premium Version */}
            <div className="group relative transform transition-all duration-500 hover:-translate-y-2">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-green-600 rounded-3xl blur opacity-20 group-hover:opacity-30 transition-all duration-500"></div>
              <div className="relative bg-white/80 backdrop-blur-sm p-8 rounded-2xl border border-white/50 shadow-xl">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center space-x-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-green-500 rounded-2xl flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-500">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-green-600 bg-clip-text text-transparent">유료 버전</h3>
                  </div>
                  <span className="bg-gradient-to-r from-purple-600 to-green-600 text-white px-4 py-2 rounded-xl text-sm font-bold shadow-lg animate-pulse">PREMIUM</span>
                </div>

                                 <ul className="space-y-4 mb-8">
                   <li className="flex items-start space-x-3">
                     <svg className="w-6 h-6 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                     </svg>
                     <div>
                       <p className="text-gray-700">연 단위 라이센스 계약</p>
                       <p className="text-sm text-gray-500">Annual license contract</p>
                     </div>
                   </li>
                   <li className="flex items-start space-x-3">
                     <svg className="w-6 h-6 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                     </svg>
                     <div>
                       <p className="text-gray-700">QR 코드 제거 가능</p>
                       <p className="text-sm text-gray-500">Optional QR code removal</p>
                     </div>
                   </li>
                   <li className="flex items-start space-x-3">
                     <svg className="w-6 h-6 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                     </svg>
                     <div>
                       <p className="text-gray-700">디자인 수정 사용 가능</p>
                       <p className="text-sm text-gray-500">Design modification allowed</p>
                     </div>
                   </li>
                   <li className="flex items-start space-x-3">
                     <svg className="w-6 h-6 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                     </svg>
                     <div>
                       <p className="text-gray-700">브랜디드 협업 가능</p>
                       <p className="text-sm text-gray-500">Branded collaboration available</p>
                     </div>
                   </li>
                   <li className="flex items-start space-x-3">
                     <svg className="w-6 h-6 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                     </svg>
                     <div>
                       <p className="text-gray-700">국가별 독점/비독점 계약 선택</p>
                       <p className="text-sm text-gray-500">Choose exclusive/non-exclusive contracts by country</p>
                     </div>
                   </li>
                 </ul>

                                 <div className="bg-gradient-to-r from-purple-50 to-green-50 p-4 rounded-xl mb-6">
                   <p className="text-sm text-gray-600">
                     * 가격 및 상세 조건은 문의 바랍니다
                   </p>
                 </div>

                 <a 
                   href="mailto:whoaukim+paplo@gmail.com?subject=Paplo 유료 라이센스 문의" 
                   className="flex items-center justify-center space-x-3 w-full py-4 px-6 bg-gradient-to-r from-purple-600 via-blue-600 to-green-600 text-white rounded-xl hover:shadow-lg hover:shadow-purple-500/30 transform hover:scale-105 transition-all duration-300"
                 >
                   <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                   </svg>
                   <span className="text-lg font-semibold">이메일로 문의하기 / Contact via Email</span>
                   <span className="text-sm">(whoaukim+paplo@gmail.com)</span>
                 </a>
               </div>
             </div>
           </div>
         </div>
       </section>

      {/* Partners Section / 협력사 */}
      <section id="partners" className="section bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="section-title">협력사</h2>
            <p className="section-subtitle">
              Paplo 라이센스를 통해 함께하는 파트너들<br/>
              <span className="text-gray-500">Companies partnering with us through Paplo licensing</span>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* 협력사 카드들이 추가될 자리 */}
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section id="community" className="section">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="section-title">커뮤니티</h2>
            <p className="section-subtitle">
              사용자 피드백과 함께 발전하는 Paplo<br/>
              <span className="text-gray-500">Paplo Growing with User Feedback</span>
            </p>
          </div>

          {/* User Feedback Section */}
          <div className="max-w-4xl mx-auto">
            {/* Slider container */}
            <div className="relative overflow-hidden mb-16">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentFeedbackSlide * 100}%)` }}
              >
                {/* First Feedback Group */}
                <div className="w-full flex-shrink-0">
                  <div className="space-y-6">
                    <div className="card p-8">
                      <div className="flex items-start space-x-4">
                        <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center flex-shrink-0">
                          <span className="text-white font-bold">F</span>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <h3 className="font-bold text-gray-900">김지수</h3>
                            <span className="text-gray-500">카페 운영자</span>
                          </div>
                          <div className="pl-4 border-l-2 border-indigo-100 space-y-2">
                            <p className="text-gray-700">"처음에는 반신반의했는데, 실제로 사용해보니 정말 효과가 있더라구요. 손님들의 반응도 좋고, 쓰레기도 확실히 줄었어요."</p>
                            <p className="text-gray-500 text-sm">"I was skeptical at first, but it really works! Customers love it, and we've definitely reduced our waste."</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="card p-8">
                      <div className="flex items-start space-x-4">
                        <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center flex-shrink-0">
                          <span className="text-white font-bold">F</span>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <h3 className="font-bold text-gray-900">John Smith</h3>
                            <span className="text-gray-500">Environmental Activist</span>
                          </div>
                          <div className="pl-4 border-l-2 border-indigo-100 space-y-2">
                            <p className="text-gray-700">"혁신적인 디자인과 환경 보호를 동시에 실현한 훌륭한 제품입니다."</p>
                            <p className="text-gray-500 text-sm">"An excellent product that achieves both innovative design and environmental protection."</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Second Feedback Group */}
                <div className="w-full flex-shrink-0">
                  <div className="space-y-6">
                    <div className="card p-8">
                      <div className="flex items-start space-x-4">
                        <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center flex-shrink-0">
                          <span className="text-white font-bold">F</span>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <h3 className="font-bold text-gray-900">Sarah Johnson</h3>
                            <span className="text-gray-500">Cafe Chain Owner</span>
                          </div>
                          <div className="pl-4 border-l-2 border-indigo-100 space-y-2">
                            <p className="text-gray-700">"여러 매장에 도입한 후, 운영 비용이 눈에 띄게 감소했습니다. 직원들의 만족도도 높아요."</p>
                            <p className="text-gray-500 text-sm">"After implementing it in multiple stores, we've seen a noticeable decrease in operating costs. Staff satisfaction has improved too."</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="card p-8">
                      <div className="flex items-start space-x-4">
                        <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center flex-shrink-0">
                          <span className="text-white font-bold">F</span>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <h3 className="font-bold text-gray-900">박민준</h3>
                            <span className="text-gray-500">디자이너</span>
                          </div>
                          <div className="pl-4 border-l-2 border-indigo-100 space-y-2">
                            <p className="text-gray-700">"심플하면서도 효과적인 디자인이 정말 마음에 듭니다. 실용성과 미적인 부분을 잘 살린 것 같아요."</p>
                            <p className="text-gray-500 text-sm">"I love the simple yet effective design. It balances practicality and aesthetics really well."</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Slider Controls */}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex space-x-2 mt-6">
                {[...Array(totalFeedbackSlides)].map((_, index) => (
                  <button
                    key={index}
                    className={`w-2 h-2 rounded-full transition-all ${
                      currentFeedbackSlide === index ? 'bg-indigo-600 w-4' : 'bg-gray-300'
                    }`}
                    onClick={() => setCurrentFeedbackSlide(index)}
                  ></button>
                ))}
              </div>
            </div>

            {/* Suggestion Form */}
            <div className="card p-8">
              <h3 className="text-2xl font-bold text-indigo-600 mb-6">개선 제안</h3>
              <p className="text-gray-600 mb-8">
                Paplo를 더 좋게 만들어주세요<br/>
                <span className="text-gray-500">Help us improve Paplo</span>
              </p>
              <SuggestionForm />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="section bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="section-title">자주 묻는 질문</h2>
            <p className="section-subtitle">
              Frequently Asked Questions
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {/* Slider container */}
            <div className="relative overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentFaqSlide * 100}%)` }}
              >
                {/* First FAQ Group */}
                <div className="w-full flex-shrink-0">
                  <div className="space-y-6">
                    {faqData.slice(0, 5).map((faq, index) => (
                      <div key={index} className="card p-8">
                        <div className="flex items-start space-x-4">
                          <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center flex-shrink-0">
                            <span className="text-white font-bold">Q</span>
                          </div>
                          <div className="flex-1">
                            <h3 className="font-bold text-gray-900 mb-2">{faq.question}</h3>
                            <p className="text-gray-600 mb-4">{faq.answer}</p>
                            <div className="pl-4 border-l-2 border-indigo-100 space-y-2">
                              <p className="text-gray-700">{faq.detail}</p>
                              <p className="text-gray-500 text-sm">{faq.additionalInfo}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Second FAQ Group */}
                <div className="w-full flex-shrink-0">
                  <div className="space-y-6">
                    {faqData.slice(5).map((faq, index) => (
                      <div key={index} className="card p-8">
                        <div className="flex items-start space-x-4">
                          <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center flex-shrink-0">
                            <span className="text-white font-bold">Q</span>
                          </div>
                          <div className="flex-1">
                            <h3 className="font-bold text-gray-900 mb-2">{faq.question}</h3>
                            <p className="text-gray-600 mb-4">{faq.answer}</p>
                            <div className="pl-4 border-l-2 border-indigo-100 space-y-2">
                              <p className="text-gray-700">{faq.detail}</p>
                              <p className="text-gray-500 text-sm">{faq.additionalInfo}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Slider Controls */}
              <div className="flex justify-center mt-8 space-x-2">
                {[...Array(totalFaqSlides)].map((_, index) => (
                  <button
                    key={index}
                    className={`w-2 h-2 rounded-full transition-all ${
                      currentFaqSlide === index ? 'bg-indigo-600 w-4' : 'bg-gray-300'
                    }`}
                    onClick={() => setCurrentFaqSlide(index)}
                  ></button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-green-50"></div>
        
        <div className="relative max-w-7xl mx-auto px-6">
          {/* Section Header */}
          <div className="text-center mb-20">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 via-purple-500 to-green-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg transform hover:scale-110 transition-transform duration-500">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 bg-clip-text text-transparent animate-gradient">
              문의하기
            </h2>
            <p className="text-2xl text-gray-600 mb-2">더 나은 환경을 위한 여정에 함께해주세요</p>
            <p className="text-xl text-gray-500">Join Us in Making a Better Environment</p>
          </div>

          {/* Contact Card */}
          <div className="max-w-3xl mx-auto">
            <div className="group relative transform transition-all duration-500 hover:-translate-y-2">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 rounded-3xl blur opacity-20 group-hover:opacity-30 transition-all duration-500"></div>
              <div className="relative bg-white/80 backdrop-blur-sm p-10 rounded-2xl border border-white/50 shadow-xl">
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Contact Info */}
                  <div className="space-y-6">
                    <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
                      연락처
                    </h3>
                    <div className="space-y-4">
                      <a 
                        href="mailto:whoaukim+paplo@gmail.com" 
                        className="flex items-center space-x-3 text-gray-700 hover:text-blue-600 transition-colors"
                      >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        <span>이메일 / Email: whoaukim+paplo@gmail.com</span>
                      </a>

                      {/* Report Button */}
                      <a 
                        href="mailto:whoaukim+paplo@gmail.com?subject=[신고] Paplo 디자인 무단 도용 신고"
                        className="flex items-center space-x-3 text-red-600 hover:text-red-700 transition-colors group"
                      >
                        <svg className="w-6 h-6 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                        </svg>
                        <span className="font-medium">디자인 도용 신고 / Report Design Infringement</span>
                      </a>
                    </div>

                  
                  </div>

                  {/* Support Links */}
                  <div className="space-y-6">
                    <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-green-600 bg-clip-text text-transparent mb-4">
                      후원하기
                    </h3>
                    <div className="space-y-4">
                      <a 
                        href="https://qr.kakaopay.com/FNjGshihw" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center space-x-3 px-6 py-3 bg-[#FFE812] text-black rounded-lg hover:bg-[#FFE000] transition-all shadow-sm hover:shadow-md text-base font-medium"
                      >
                        <Image 
                          src="/KakaoTalk_logo.svg" 
                          alt="카카오페이" 
                          width={24} 
                          height={24}
                          priority
                        />
                        <span>카카오페이로 후원하기 / Support via KakaoPay</span>
                      </a>

                      <a 
                        href="https://www.buymeacoffee.com/whoaukim" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center space-x-3 px-6 py-3 bg-[#fd0] text-[#0d0c22] rounded-lg hover:bg-[#ffd428] transition-all shadow-sm hover:shadow-md text-base font-medium"
                      >
                        <Image 
                          src="/buyme_logo.svg" 
                          alt="Buy Me a Coffee" 
                          width={24} 
                          height={24}
                          priority
                        />
                        <span>커피 한 잔 사주기 / Buy Me a Coffee</span>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Message */}
                <div className="mt-10 pt-8 border-t border-gray-100">
                  <p className="text-center text-gray-600 italic">
                    "여러분의 작은 후원이 더 나은 환경을 만드는 큰 힘이 됩니다"
                  </p>
                  <p className="text-center text-gray-500 text-sm mt-2">
                    Your small support becomes a great force in creating a better environment
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
