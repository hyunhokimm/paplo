import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section / 히어로 섹션 */}
      <section className="relative bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="text-center">
            {/* 로고 */}
            <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 mb-8">
              Paplo
            </h1>
            
            {/* 태그라인 */}
            <div className="mb-12 space-y-4">
              <h2 className="text-3xl lg:text-4xl text-gray-800">
                덜어낸 종이, 더해진 가치
              </h2>
              <p className="text-xl lg:text-2xl text-gray-600 font-light">
                Less Paper, More Value.
              </p>
            </div>
            
            {/* 메시지 카드 */}
            <div className="max-w-2xl mx-auto bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-gray-100">
              <p className="text-lg text-gray-800 leading-relaxed mb-6">
                안녕하세요. 한국에 사는 김현호입니다.<br/>
                저의 작은 노력이 이 사회에 도움이 되길 기원합니다.<br/>
                감사합니다.
              </p>
              <div className="w-12 h-px bg-gray-200 mx-auto mb-6"></div>
              <p className="text-gray-600 leading-relaxed">
                Hello, I'm Hyunho Kim from South Korea.<br/>
                I hope this small effort can contribute meaningfully to society.<br/>
                Thank you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Features / 제품 특징 */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* 섹션 헤더 */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              주요 특징
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              혁신적인 구조로 만들어낸 친환경 포장 솔루션
            </p>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto mt-2">
              Eco-friendly Packaging Solution with Innovative Structure
            </p>
          </div>

          {/* 특징 카드들 */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Feature 1 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl blur opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              <div className="relative bg-white/80 backdrop-blur-sm p-8 rounded-3xl border border-white/50 shadow-lg group-hover:shadow-blue-500/20 transition-all duration-500 group-hover:-translate-y-1">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <div className="space-y-2 mb-4">
                  <h3 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">무게 1/3</h3>
                  <p className="text-gray-500">Weight Reduced by 2/3</p>
                  <h3 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">부피 1/3</h3>
                  <p className="text-gray-500">Volume Reduced by 2/3</p>
                </div>
                <p className="text-gray-600 leading-relaxed mb-6">기존 대비 종이 사용량을 획기적으로 줄인 혁신적 구조</p>
                <p className="text-gray-500 leading-relaxed mb-6">Innovative structure that dramatically reduces paper usage</p>
                <div className="pt-4 border-t border-gray-100">
                  <div className="flex items-center text-blue-600 font-semibold">
                    <span className="text-2xl font-bold mr-2">67%</span>
                    <span>절감 효과</span>
                    <span className="text-sm ml-2">(Reduction)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-3xl blur opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              <div className="relative bg-white/80 backdrop-blur-sm p-8 rounded-3xl border border-white/50 shadow-lg group-hover:shadow-purple-500/20 transition-all duration-500 group-hover:-translate-y-1">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">접착제 없음</h3>
                <p className="text-gray-500 mb-2">No Adhesives</p>
                <p className="text-gray-600 leading-relaxed mb-6">화학 접착제 없이도 견고한 구조로 완벽한 재활용 가능</p>
                <p className="text-gray-500 leading-relaxed mb-6">Sturdy structure without chemical adhesives, fully recyclable</p>
                <div className="pt-4 border-t border-gray-100">
                  <div className="flex items-center text-purple-600 font-semibold">
                    <span className="text-2xl font-bold mr-2">100%</span>
                    <span>재활용 가능</span>
                    <span className="text-sm ml-2">(Recyclable)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-3xl blur opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              <div className="relative bg-white/80 backdrop-blur-sm p-8 rounded-3xl border border-white/50 shadow-lg group-hover:shadow-green-500/20 transition-all duration-500 group-hover:-translate-y-1">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-blue-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent mb-4">확장형 구조</h3>
                <p className="text-gray-500 mb-2">Expandable Structure</p>
                <p className="text-gray-600 leading-relaxed mb-6">측면 연결 구조로 최대 4개까지 안전하게 연결 가능</p>
                <p className="text-gray-500 leading-relaxed mb-6">Safely connect up to 4 carriers using side connection</p>
                <div className="pt-4 border-t border-gray-100">
                  <div className="flex items-center text-green-600 font-semibold">
                    <span className="text-2xl font-bold mr-2">4x</span>
                    <span>확장 가능</span>
                    <span className="text-sm ml-2">(Expandable)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* 환경 기여 효과 */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-3xl blur opacity-50"></div>
            <div className="relative bg-white/90 backdrop-blur-sm p-10 rounded-3xl border border-white/50 shadow-xl">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <span className="text-2xl">🌳</span>
              </div>
              <h3 className="text-3xl font-bold text-center bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent mb-8">
                환경 기여 효과
              </h3>
              <div className="grid md:grid-cols-3 gap-8 mb-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">1,000장</div>
                  <div className="text-gray-600">사용 시</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">1그루</div>
                  <div className="text-gray-600">나무 절감</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-2">67%</div>
                  <div className="text-gray-600">탄소 절감</div>
                </div>
              </div>
              <p className="text-lg text-center text-gray-700">
                Paper savings + No glue + Smaller volume = Better sustainability
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section / Paplo 스토리 */}
      <section id="story" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* 섹션 헤더 */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Paplo의 시작
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              친환경 포장재 혁신을 위한 여정
            </p>
          </div>

          {/* 스토리 카드들 */}
          <div className="space-y-12">
            {/* 문제 인식 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-3xl blur opacity-50"></div>
              <div className="relative bg-white/90 backdrop-blur-sm p-10 rounded-3xl border border-white/50 shadow-xl">
                <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
                  문제 인식
                </h3>
                <p className="text-gray-500 mb-4">Problem Recognition</p>
                <div className="space-y-6">
                  <p className="text-lg text-gray-700 leading-relaxed">
                    10년간 테이크아웃 카페를 운영하며 느낀 과도한 포장의 문제.
                  </p>
                  <p className="text-lg text-gray-500 leading-relaxed">
                    The issue of excessive packaging experienced during 10 years of running a takeout café.
                  </p>
                  <blockquote className="pl-6 py-2 border-l-4 border-blue-500/30 italic text-gray-600 text-lg bg-blue-50/50 rounded-r-lg">
                    "이 정도까지 종이를 써야 할까?"<br/>
                    "종이를 덜 쓰는 구조는 없을까?"<br/>
                    <span className="text-sm text-gray-500 mt-2 block">
                      "Do we really need to use this much paper?"<br/>
                      "Is there a way to use less paper?"
                    </span>
                  </blockquote>
                  <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-2xl border border-blue-100/50">
                    <p className="font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-3 text-lg">현실의 수치</p>
                    <p className="text-gray-500 mb-3">Current Statistics</p>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-center space-x-3">
                        <span className="text-2xl">📦</span>
                        <div>
                          <p>우리나라 하루 종이 사용량: 약 6,500톤</p>
                          <p className="text-sm text-gray-500">Daily paper consumption in Korea: About 6,500 tons</p>
                        </div>
                      </li>
                      <li className="flex items-center space-x-3">
                        <span className="text-2xl">🚛</span>
                        <div>
                          <p>서울 일회용품 폐기물: 트럭 수십 대 분량</p>
                          <p className="text-sm text-gray-500">Seoul's disposable waste: Dozens of truckloads</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* 구조적 해답 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-3xl blur opacity-50"></div>
              <div className="relative bg-white/90 backdrop-blur-sm p-10 rounded-3xl border border-white/50 shadow-xl">
                <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-6">
                  구조적 해답
                </h3>
                <div className="space-y-6">
                  <p className="text-lg text-gray-700 leading-relaxed">
                    종이 캐리어의 구조를 바꿔 종이를 확실히 줄일 수 있다는 희망을 발견.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed font-medium">
                    그 작은 발견이 Paplo의 시작이 되었습니다.
                  </p>
                  <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-2xl border border-purple-100/50">
                    <p className="font-semibold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-3 text-lg">혁신의 핵심</p>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-center space-x-3">
                        <span className="text-2xl">💡</span>
                        <span>핵심: 기존 종이컵 홀더에 손잡이만 결합하는 방식</span>
                      </li>
                      <li className="flex items-center space-x-3">
                        <span className="text-2xl">🌱</span>
                        <span>결과: 구조 자체가 기술이 되다</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How to Use / 사용법 */}
      <section id="how-to-use" className="py-20 lg:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* 섹션 헤더 */}
          <div className="text-center mb-16">
            <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center mx-auto mb-6">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              사용법
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              간단한 4단계로 완성하는 친환경 포장재
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* 비디오 섹션 */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
                             <div className="mb-6 text-center">
                 <h3 className="text-2xl font-bold text-gray-900 mb-2">실제 사용 영상</h3>
                 <h4 className="text-xl font-bold text-gray-700 mb-2">How to Use Video</h4>
                 <p className="text-gray-600">YouTube Shorts로 보는 간단한 사용법</p>
                 <p className="text-gray-500">Simple instructions through YouTube Shorts</p>
               </div>
              
              <div className="aspect-[9/16] w-full max-w-[315px] mx-auto">
                <iframe
                  className="w-full h-full rounded-xl shadow-lg border border-gray-200"
                  src="https://www.youtube.com/embed/j1P_ISPAY9E"
                  title="Paplo 사용방법"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              
             
            </div>

            {/* 단계별 사용법 */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">단계별 사용법</h3>
              
              <ol className="space-y-6">
                {/* Step 1 */}
                <li className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                    1
                  </div>
                  <div className="flex-1">
                                         <p className="font-semibold text-gray-900 mb-1">
                       캐리어를 컵과 홀더 사이에 하단부까지 밀어 넣습니다
                     </p>
                     <p className="text-gray-600 text-sm">
                       Insert the carrier fully between cup and sleeve
                     </p>
                   </div>
                 </li>

                 {/* Step 2 */}
                 <li className="flex items-start space-x-4">
                   <div className="w-10 h-10 bg-purple-600 rounded-xl flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                     2
                   </div>
                   <div className="flex-1">
                     <p className="font-semibold text-gray-900 mb-1">
                       하단 후크가 홀더에 '딱' 걸리게 고정합니다
                     </p>
                     <p className="text-gray-600 text-sm">
                       Lock the hook into the holder groove
                     </p>
                   </div>
                 </li>

                 {/* Step 3 */}
                 <li className="flex items-start space-x-4">
                   <div className="w-10 h-10 bg-green-600 rounded-xl flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                     3
                   </div>
                   <div className="flex-1">
                     <p className="font-semibold text-gray-900 mb-1">
                       손잡이를 들어 이동합니다
                     </p>
                     <p className="text-gray-600 text-sm">
                       Lift by the handle and carry
                     </p>
                   </div>
                 </li>

                 {/* Step 4 */}
                 <li className="flex items-start space-x-4">
                   <div className="w-10 h-10 bg-orange-600 rounded-xl flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                     4
                   </div>
                   <div className="flex-1">
                     <p className="font-semibold text-gray-900 mb-1">
                       4개까지 연결 가능 (측면 귀 부분 사용)
                     </p>
                     <p className="text-gray-600 text-sm">
                       For multiple cups, connect carriers using side flaps
                     </p>
                   </div>
                 </li>
               </ol>

               {/* 사용 팁 / Usage Tips */}
               <div className="mt-8 p-6 bg-gray-50 rounded-xl border border-gray-100">
                 <div className="flex items-center mb-4">
                   <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center mr-3">
                     <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                     </svg>
                   </div>
                   <div>
                     <h4 className="font-bold text-gray-900">사용 팁</h4>
                     <p className="text-sm text-gray-600">Usage Tips</p>
                   </div>
                 </div>
                 <ul className="space-y-4 text-gray-700">
                   <li>
                     <div className="flex items-center mb-1">
                       <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                       <p className="text-gray-900">처음 사용 시 종이가 딱딱할 수 있으니 살짝 구부려주세요</p>
                     </div>
                     <p className="text-sm text-gray-600 ml-5">The paper might be stiff at first, gently flex it before use</p>
                   </li>
                   <li>
                     <div className="flex items-center mb-1">
                       <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                       <p className="text-gray-900">연결 시 측면 귀 부분을 확실히 끼워주세요</p>
                     </div>
                     <p className="text-sm text-gray-600 ml-5">Make sure to securely insert the side flaps when connecting</p>
                   </li>
                 </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* License Models / 라이센스 모델 */}
      <section id="license" className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* 섹션 헤더 */}
          <div className="text-center mb-16">
            <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center mx-auto mb-6">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              라이센스 모델
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              다양한 사용 목적에 맞는 유연한 라이센스 옵션
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {/* 무료 버전 */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">무료 버전</h3>
                </div>
                <span className="bg-blue-600 text-white px-3 py-1 rounded-lg text-sm font-semibold">FREE</span>
              </div>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="text-gray-700">오픈 라이센스로 누구나 사용 가능</p>
                    <p className="text-sm text-gray-500">Available to everyone under open license</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="text-gray-700">QR 코드 삽입 필수</p>
                    <p className="text-sm text-gray-500">QR code insertion required</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="text-gray-700">기술 도면 및 목형 파일 제공</p>
                    <p className="text-sm text-gray-500">Technical drawings and template files provided</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="text-gray-700">커피챗 후원 페이지 연결</p>
                    <p className="text-sm text-gray-500">Coffee chat support page connection</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-blue-50 p-6 rounded-xl mb-8 border border-blue-100">
                <p className="text-blue-700 font-semibold mb-3">
                  <strong>QR 코드 기능:</strong>
                  <span className="text-sm ml-2">QR Code Features:</span>
                </p>
                <ul className="text-blue-600 space-y-2 text-sm">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    <div>
                      <p>Paplo 스토리 소개</p>
                      <p className="text-sm text-blue-500">Introduction to Paplo Story</p>
                    </div>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                    <div>
                      <p>환경 기여 효과 안내</p>
                      <p className="text-sm text-blue-500">Environmental Impact Guide</p>
                    </div>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    <div>
                      <p>자발적 커피챗 후원</p>
                      <p className="text-sm text-blue-500">Voluntary Coffee Chat Support</p>
                    </div>
                  </li>
                </ul>
              </div>
              
              <a 
                href="mailto:whoaukim@gmail.com?subject=Paplo 무료 라이센스 문의"
                className="block w-full text-center px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors duration-200 font-semibold"
              >
                <span className="flex items-center justify-center space-x-2">
                  <span>무료 도면 다운로드</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </span>
              </a>
            </div>

            {/* Enhanced 유료 버전 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 rounded-3xl blur opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
              <div className="relative bg-white/90 backdrop-blur-sm p-10 rounded-3xl border border-white/50 shadow-2xl group-hover:shadow-purple-500/20 transition-all duration-500 group-hover:-translate-y-2">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center shadow-lg">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                      </svg>
                    </div>
                    <h3 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">유료 버전</h3>
                  </div>
                  <span className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-4 py-2 rounded-2xl text-sm font-bold shadow-lg animate-pulse">PREMIUM</span>
                </div>
                <div className="space-y-4 mb-8">
                  <div className="flex items-center space-x-3">
                    <svg className="w-5 h-5 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <p className="text-gray-800">연 단위 라이센스 계약</p>
                      <p className="text-sm text-gray-500">Annual license contract</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <svg className="w-5 h-5 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <p className="text-gray-800">QR 코드 제거 가능</p>
                      <p className="text-sm text-gray-500">Optional QR code removal</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <svg className="w-5 h-5 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <p className="text-gray-800">디자인 수정 사용 가능</p>
                      <p className="text-sm text-gray-500">Design modification allowed</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <svg className="w-5 h-5 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <p className="text-gray-800">브랜디드 협업 가능</p>
                      <p className="text-sm text-gray-500">Branded collaboration available</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <svg className="w-5 h-5 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <p className="text-gray-800">국가별 독점/비독점 계약 선택</p>
                      <p className="text-sm text-gray-500">Choose exclusive/non-exclusive contracts by country</p>
                    </div>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-6 rounded-2xl mb-8 border border-purple-200/50">
                  <p className="text-purple-700 font-semibold mb-3">
                    <strong>수익 구조:</strong>
                    <span className="text-sm ml-2">Revenue Structure:</span>
                  </p>
                  <ul className="text-purple-600 space-y-2 text-sm">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                      <div>
                        <p>라이센스 계약금</p>
                        <p className="text-sm text-purple-500">License contract fee</p>
                      </div>
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                      <div>
                        <p>연간 사용권료 (정액제)</p>
                        <p className="text-sm text-purple-500">Annual usage fee (fixed rate)</p>
                      </div>
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                      <div>
                        <p>ESG 캠페인 협업</p>
                        <p className="text-sm text-purple-500">ESG campaign collaboration</p>
                      </div>
                    </li>
                  </ul>
                </div>
                <a 
                  href="mailto:whoaukim@gmail.com?subject=Paplo 유료 라이센스 문의"
                  className="group relative block w-full text-center px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-2xl hover:from-purple-600 hover:to-blue-600 transition-all duration-300 shadow-lg hover:shadow-purple-500/30 font-semibold overflow-hidden"
                >
                  <span className="relative z-10 flex items-center justify-center space-x-2">
                    <span>유료 라이센스 문의</span>
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </a>
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

            <div className="bg-purple-50 p-6 rounded-lg mb-8 border border-purple-200">
              <h4 className="font-semibold text-purple-700 mb-3">후원금 사용처 / Fund Usage:</h4>
              <ul className="space-y-2 text-purple-600">
                <li className="flex items-center space-x-2">
                  <svg className="w-4 h-4 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Paplo 서비스 개선 및 유지보수</span>
                </li>
                <li className="flex items-center space-x-2">
                  <svg className="w-4 h-4 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>글로벌 마케팅 및 콘텐츠 제작</span>
                </li>
                <li className="flex items-center space-x-2">
                  <svg className="w-4 h-4 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>새로운 친환경 포장 솔루션 연구개발</span>
                </li>
              </ul>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* 카카오페이 후원 (국내) */}
              <div className="text-center">
                <h4 className="font-semibold text-gray-800 mb-2">국내 후원 / Domestic</h4>
                <a 
                  href="https://qr.kakaopay.com/Ej8Kc9t8u" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-yellow-400 text-black rounded-lg hover:bg-yellow-500 transition-all shadow-lg hover:shadow-yellow-500/30 text-lg font-semibold transform hover:scale-105"
                >
                  <span className="mr-2">💳</span>
                  카카오페이로 후원하기
                </a>
                <p className="text-gray-500 mt-2 text-sm">* 카카오페이로 간편하게 후원</p>
              </div>

              {/* Buy Me a Coffee 후원 (해외) */}
              <div className="text-center">
                <h4 className="font-semibold text-gray-800 mb-2">해외 후원 / International</h4>
                <div className="space-y-4">
                  <a 
                    href="https://coff.ee/whoaukim" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition-all shadow-lg hover:shadow-yellow-500/30 text-lg font-semibold transform hover:scale-105"
                  >
                    <span className="mr-2">☕</span>
                    Buy Me a Coffee
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
                      <div className="text-xs text-gray-500 mt-2">https://coff.ee/whoaukim</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section / 협력사 */}
      <section id="partners" className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-4xl font-bold mb-12 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent text-center">
            협력사 / Partners
          </h2>
          
          <div className="text-center mb-12">
            <p className="text-xl text-gray-600 mb-4">
              Paplo 라이센스를 통해 함께하는 파트너들
            </p>
            <p className="text-gray-500">
              Companies partnering with us through Paplo licensing
            </p>
          </div>

          {/* 협력사 그리드 - 현재는 준비 중 */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* 준비 중 카드들 */}
           
          </div>

          {/* 파트너십 안내 */}
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-2xl border border-blue-200 text-center">
             <div className="flex items-center justify-center space-x-2 mb-4">
                                <span className="text-2xl">🤝</span>
               <div>
                 <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                   파트너십 문의
                 </h3>
                 <p className="text-gray-600">Partnership Inquiry</p>
               </div>
             </div>
             <p className="text-gray-700 mb-6 leading-relaxed">
               Paplo와 함께 친환경 포장 솔루션을 도입하고 싶으신가요?<br/>
               유료 라이센스를 통해 귀하의 브랜드와 함께 성장하겠습니다.
             </p>
             <div className="flex flex-col sm:flex-row gap-4 justify-center">
               <a 
                 href="mailto:whoaukim@gmail.com?subject=Paplo Partnership Inquiry"
                 className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all shadow-lg hover:shadow-blue-500/30 font-medium"
               >
                 <span className="block">파트너십 문의</span>
                 <span className="text-sm">Partnership Inquiry</span>
               </a>
               <a 
                 href="#license"
                 className="px-6 py-3 border-2 border-blue-500 text-blue-600 rounded-lg hover:bg-blue-50 transition-all font-medium"
               >
                 <span className="block">라이센스 정보 보기</span>
                 <span className="text-sm">View License Info</span>
               </a>
             </div>
           </div>
         </div>
       </section>

      {/* Environmental Impact Section */}
      <section id="impact" className="py-24 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              환경 보호 효과
            </h2>
            <p className="text-xl text-gray-600 mt-4">Environmental Impact</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {/* Impact Cards */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-3xl blur opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              <div className="relative bg-white/80 backdrop-blur-sm p-8 rounded-3xl border border-white/50 shadow-lg group-hover:shadow-green-500/20 transition-all duration-500 group-hover:-translate-y-1">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-blue-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                  <span className="text-2xl">📊</span>
                </div>
                <div className="text-5xl font-bold text-green-600 mb-4">65%</div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">종이 사용량 절감</h3>
                <p className="text-gray-600">Paper Usage Reduction</p>
              </div>
            </div>

            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-3xl blur opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              <div className="relative bg-white/80 backdrop-blur-sm p-8 rounded-3xl border border-white/50 shadow-lg group-hover:shadow-green-500/20 transition-all duration-500 group-hover:-translate-y-1">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-blue-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                  <span className="text-2xl">🌱</span>
                </div>
                <div className="text-5xl font-bold text-green-600 mb-4">25kg</div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">CO2 배출 감소 / 월</h3>
                <p className="text-gray-600">CO2 Reduction / Month</p>
              </div>
            </div>

            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-3xl blur opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              <div className="relative bg-white/80 backdrop-blur-sm p-8 rounded-3xl border border-white/50 shadow-lg group-hover:shadow-green-500/20 transition-all duration-500 group-hover:-translate-y-1">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-blue-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                  <span className="text-2xl">♻️</span>
                </div>
                <div className="text-5xl font-bold text-green-600 mb-4">100%</div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">재활용 가능</h3>
                <p className="text-gray-600">Recyclable</p>
              </div>
            </div>

            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-3xl blur opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              <div className="relative bg-white/80 backdrop-blur-sm p-8 rounded-3xl border border-white/50 shadow-lg group-hover:shadow-green-500/20 transition-all duration-500 group-hover:-translate-y-1">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-blue-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                  <span className="text-2xl">💪</span>
                </div>
                <div className="text-5xl font-bold text-green-600 mb-4">2x</div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">내구성 향상</h3>
                <p className="text-gray-600">Durability Improvement</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section id="community" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              사용자 피드백 & 개선 제안
            </h2>
            <p className="text-xl text-gray-600 mt-4">Community Feedback & Suggestions</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* User Feedback */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                사용자 피드백 / User Feedback
              </h3>
              
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl blur opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                <div className="relative bg-white/80 backdrop-blur-sm p-6 rounded-3xl border border-white/50 shadow-lg group-hover:shadow-blue-500/20 transition-all duration-500">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-semibold">
                      SK
                    </div>
                    <div className="ml-4">
                      <h4 className="font-semibold">서울 카페 A</h4>
                      <p className="text-gray-600 text-sm">Seoul Cafe A</p>
                    </div>
                  </div>
                  <p className="text-gray-700">"종이 캐리어 도입 후 고객 만족도가 크게 향상되었습니다. 특히 환경 보호에 동참한다는 점에서 긍정적인 피드백이 많습니다."</p>
                  <p className="text-gray-500 mt-2">"Customer satisfaction greatly improved after introducing paper carriers. We receive lots of positive feedback about participating in environmental protection."</p>
                </div>
              </div>

              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl blur opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                <div className="relative bg-white/80 backdrop-blur-sm p-6 rounded-3xl border border-white/50 shadow-lg group-hover:shadow-blue-500/20 transition-all duration-500">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-semibold">
                      BK
                    </div>
                    <div className="ml-4">
                      <h4 className="font-semibold">베이커리 B</h4>
                      <p className="text-gray-600 text-sm">Bakery B</p>
                    </div>
                  </div>
                  <p className="text-gray-700">"기존 비닐 손잡이보다 튼튼하고, 브랜드 이미지도 높일 수 있어서 매우 만족스럽습니다."</p>
                  <p className="text-gray-500 mt-2">"Very satisfied as it's stronger than traditional plastic handles and helps enhance our brand image."</p>
                </div>
              </div>
            </div>

            {/* Improvement Suggestions */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                개선 제안 / Improvement Suggestions
              </h3>
              
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-3xl blur opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                <div className="relative bg-white/80 backdrop-blur-sm p-6 rounded-3xl border border-white/50 shadow-lg group-hover:shadow-purple-500/20 transition-all duration-500">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                    <span className="text-2xl">📏</span>
                  </div>
                  <h4 className="font-semibold text-purple-800 mb-3">사이즈 다양화 / Size Variations</h4>
                  <p className="text-gray-700">다양한 크기의 제품을 위한 새로운 사이즈 추가 예정</p>
                  <p className="text-gray-500 mt-2">New sizes for various products coming soon</p>
                  <div className="mt-4 flex items-center">
                    <div className="h-2 flex-1 bg-purple-200 rounded-full">
                      <div className="h-2 w-3/4 bg-purple-600 rounded-full"></div>
                    </div>
                    <span className="ml-4 text-sm text-purple-600 font-semibold">75%</span>
                  </div>
                </div>
              </div>

              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-3xl blur opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                <div className="relative bg-white/80 backdrop-blur-sm p-6 rounded-3xl border border-white/50 shadow-lg group-hover:shadow-purple-500/20 transition-all duration-500">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                    <span className="text-2xl">💧</span>
                  </div>
                  <h4 className="font-semibold text-purple-800 mb-3">방수 코팅 / Water Resistance</h4>
                  <p className="text-gray-700">친환경 방수 코팅 옵션 개발 중</p>
                  <p className="text-gray-500 mt-2">Eco-friendly water-resistant coating in development</p>
                  <div className="mt-4 flex items-center">
                    <div className="h-2 flex-1 bg-purple-200 rounded-full">
                      <div className="h-2 w-1/2 bg-purple-600 rounded-full"></div>
                    </div>
                    <span className="ml-4 text-sm text-purple-600 font-semibold">50%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Updates Section */}
      <section id="updates" className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              최신 구조 업데이트
            </h2>
            <p className="text-xl text-gray-600 mt-4">Latest Structural Updates</p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl blur opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              <div className="relative bg-white/80 backdrop-blur-sm p-6 rounded-3xl border border-white/50 shadow-lg group-hover:shadow-blue-500/20 transition-all duration-500">
                <div className="flex items-center mb-4">
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    New / 신규
                  </div>
                  <div className="ml-4 text-gray-500">2024.03</div>
                </div>
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mr-4 shadow-lg flex-shrink-0">
                    <span className="text-2xl">🔧</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">강화된 모서리 구조 / Enhanced Corner Structure</h3>
                    <p className="text-gray-700">모서리 부분의 내구성을 30% 향상시킨 새로운 접이 구조가 적용되었습니다.</p>
                    <p className="text-gray-500 mt-2">New folding structure applied, improving corner durability by 30%.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl blur opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              <div className="relative bg-white/80 backdrop-blur-sm p-6 rounded-3xl border border-white/50 shadow-lg group-hover:shadow-blue-500/20 transition-all duration-500">
                <div className="flex items-center mb-4">
                  <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Update / 개선
                  </div>
                  <div className="ml-4 text-gray-500">2024.02</div>
                </div>
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-blue-500 rounded-2xl flex items-center justify-center mr-4 shadow-lg flex-shrink-0">
                    <span className="text-2xl">🎯</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">손잡이 구조 최적화 / Handle Structure Optimization</h3>
                    <p className="text-gray-700">손잡이의 하중 분산을 개선하여 최대 25% 더 무거운 물건도 안전하게 운반할 수 있습니다.</p>
                    <p className="text-gray-500 mt-2">Improved weight distribution in handles allows safe carrying of items up to 25% heavier.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl blur opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              <div className="relative bg-white/80 backdrop-blur-sm p-6 rounded-3xl border border-white/50 shadow-lg group-hover:shadow-blue-500/20 transition-all duration-500">
                <div className="flex items-center mb-4">
                  <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Optimization / 최적화
                  </div>
                  <div className="ml-4 text-gray-500">2024.01</div>
                </div>
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mr-4 shadow-lg flex-shrink-0">
                    <span className="text-2xl">⚡</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">재단 최적화 / Cutting Optimization</h3>
                    <p className="text-gray-700">재단 과정의 효율성을 높여 제작 시간을 20% 단축하였습니다.</p>
                    <p className="text-gray-500 mt-2">Improved cutting efficiency, reducing production time by 20%.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex items-center justify-center space-x-3 mb-12">
            <span className="text-3xl">📎</span>
            <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent text-center">
              자주 묻는 질문
            </h2>
          </div>
          <p className="text-center text-xl text-gray-600 mb-12">Frequently Asked Questions</p>

          <div className="space-y-6">
            {/* Question 1 */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">Q</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-gray-900 mb-2">Paplo 구조는 무료인가요?</h3>
                  <p className="text-gray-600 mb-4">Is the Paplo structure free?</p>
                  <div className="pl-8 border-l-2 border-purple-100 space-y-2">
                    <p className="text-gray-700">네, 기본 구조는 무료 라이센스로 제공됩니다. QR 코드 삽입 조건만 지키시면 됩니다.</p>
                    <p className="text-gray-500">Yes, the basic structure is provided under a free license. You just need to include the QR code as specified.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Question 2 */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">Q</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-gray-900 mb-2">QR 코드는 꼭 있어야 하나요?</h3>
                  <p className="text-gray-600 mb-4">Is the QR code mandatory?</p>
                  <div className="pl-8 border-l-2 border-purple-100 space-y-2">
                    <p className="text-gray-700">무료 버전에서는 필수입니다. 유료 라이센스에서는 선택적으로 제거 가능합니다.</p>
                    <p className="text-gray-500">It's mandatory for the free version. In the premium license, you can optionally remove it.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Question 3 */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">Q</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-gray-900 mb-2">디자인을 수정해도 되나요?</h3>
                  <p className="text-gray-600 mb-4">Can I modify the design?</p>
                  <div className="pl-8 border-l-2 border-purple-100 space-y-2">
                    <p className="text-gray-700">무료 버전은 기본 디자인만 사용 가능합니다. 디자인 수정은 유료 라이센스에서 가능합니다.</p>
                    <p className="text-gray-500">The free version only allows the basic design. Design modifications are available with the premium license.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Question 4 */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">Q</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-gray-900 mb-2">상업적 사용이 가능한가요?</h3>
                  <p className="text-gray-600 mb-4">Can I use it commercially?</p>
                  <div className="pl-8 border-l-2 border-purple-100 space-y-2">
                    <p className="text-gray-700">네, 무료 버전도 상업적 사용이 가능합니다.</p>
                    <p className="text-gray-500">Yes, commercial use is allowed with the free version.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Question 5 */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">Q</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-gray-900 mb-2">기술 지원이 제공되나요?</h3>
                  <p className="text-gray-600 mb-4">Is technical support provided?</p>
                  <div className="pl-8 border-l-2 border-purple-100 space-y-2">
                    <p className="text-gray-700">유료 라이센스 사용자에게는 전문적인 기술 지원이 제공됩니다. 무료 버전은 기본 문서와 커뮤니티 지원이 제공됩니다.</p>
                    <p className="text-gray-500">Premium license users receive professional technical support. Free version users have access to basic documentation and community support.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Question 6 */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">Q</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-gray-900 mb-2">해외에서도 사용할 수 있나요?</h3>
                  <p className="text-gray-600 mb-4">Can I use it internationally?</p>
                  <div className="pl-8 border-l-2 border-purple-100 space-y-2">
                    <p className="text-gray-700">네, 전 세계 어디서나 사용 가능합니다. 국가별 독점 계약은 유료 라이센스를 통해 가능합니다.</p>
                    <p className="text-gray-500">Yes, it can be used worldwide. Country-specific exclusive contracts are available through the premium license.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Question 7 - Liability */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">Q</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-gray-900 mb-2">문제 발생 시 책임은 어떻게 되나요?</h3>
                  <p className="text-gray-600 mb-4">What about liability in case of issues?</p>
                  <div className="pl-8 border-l-2 border-purple-100 space-y-2">
                    <p className="text-gray-700">Paplo는 구조 설계의 기본 가이드라인을 제공합니다. 실제 제작 및 사용 과정에서 발생하는 문제에 대한 책임은 제작자/사용자에게 있습니다. 유료 라이센스의 경우 계약서에 명시된 범위 내에서 기술 지원 및 문제 해결을 제공합니다.</p>
                    <p className="text-gray-500">Paplo provides basic structural design guidelines. The manufacturer/user is responsible for any issues arising during production and use. For premium licenses, technical support and problem resolution are provided within the scope specified in the contract.</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Contact Section / 문의하기 */}
      <section id="contact" className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-4xl font-bold mb-12 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent text-center">
            문의하기 / Contact
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* 라이센스 문의 */}
            <div className="bg-white p-8 rounded-2xl border border-blue-200 shadow-xl">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">라이센스 문의</h3>
              <div className="space-y-3 text-gray-600 mb-6">
                <p>• 무료/유료 라이센스 신청</p>
                <p>• 기술 도면 및 목형 파일 요청</p>
                <p>• 글로벌 파트너십 제안</p>
                <p>• OEM 생산 문의</p>
              </div>
              <a 
                href="mailto:whoaukim@gmail.com?subject=Paplo 라이센스 문의"
                className="block w-full text-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all shadow-lg hover:shadow-blue-500/30"
              >
                이메일 문의
              </a>
            </div>

            {/* 기술 지원 */}
            <div className="bg-white p-8 rounded-2xl border border-purple-200 shadow-xl">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">기술 지원</h3>
              <div className="space-y-3 text-gray-600 mb-6">
                <p>• 구조 사용법 안내</p>
                <p>• 제작 공정 가이드</p>
                <p>• 품질 관리 지원</p>
                <p>• 무단 사용 신고</p>
              </div>
              <a 
                href="mailto:whoaukim@gmail.com?subject=Paplo 기술 지원 문의"
                className="block w-full text-center px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-lg hover:from-purple-600 hover:to-blue-600 transition-all shadow-lg hover:shadow-purple-500/30"
              >
                기술 지원 요청
              </a>
            </div>
          </div>

          {/* 연락처 정보 */}
          <div className="mt-12 bg-gray-50 p-8 rounded-2xl border border-gray-200 text-center shadow-xl">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">연락처 정보</h3>
            <div className="space-y-2 text-gray-600">
              <p>
                <strong className="text-gray-800">이메일:</strong> whoaukim@gmail.com
              </p>
              <p>
                <strong className="text-gray-800">회사:</strong> 스토리 솔루션 (Story Solution)
              </p>
              <p>
                <strong className="text-gray-800">대표:</strong> 김현호 (Hyunho Kim)
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
