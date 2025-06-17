import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Paplo - 덜어낸 종이, 더해진 가치",
  description: "친환경 종이 캐리어 구조 자체가 기술입니다. 기존 구조 대비 종이 사용량 1/3, 무게 1/6, 접착제 미사용으로 재활용이 쉽습니다.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body className={`${inter.className} scroll-smooth bg-gray-50`} suppressHydrationWarning>
        {/* 모던 네비게이션 바 */}
        <nav className="fixed w-full bg-white/95 backdrop-blur-xl z-50 border-b border-gray-100 shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              {/* 로고 섹션 */}
              <div className="flex items-center space-x-4">
                <Link href="/" className="flex items-center space-x-3 group">
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center shadow-sm group-hover:shadow-md transition-all duration-200">
                    <span className="text-white font-bold text-sm">P</span>
                  </div>
                  <span className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                    Paplo
                  </span>
                </Link>
              </div>
              
              {/* 중앙 네비게이션 메뉴 */}
              <div className="hidden md:flex items-center space-x-1">
                <Link 
                  href="/" 
                  className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-all duration-200"
                >
                   Home
                </Link>
                <Link 
                  href="#story" 
                  className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-all duration-200"
                >
                   Story
                </Link>
                <Link 
                  href="#how-to-use" 
                  className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-all duration-200"
                >
                     How to Use
                </Link>
                <Link 
                  href="#license" 
                  className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-all duration-200"
                >
                   License
                </Link>
                <Link 
                  href="#coffee-support" 
                  className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-all duration-200"
                >
                   Support
                </Link>
                <Link 
                  href="#partners" 
                  className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-all duration-200"
                >
                   Partners
                </Link>
                <Link 
                  href="#faq" 
                  className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-all duration-200"
                >
                  FAQ
                </Link>
              </div>
              
              {/* 우측 액션 버튼들 */}
              <div className="flex items-center space-x-3">
                <Link 
                  href="#contact" 
                  className="hidden sm:inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-sm hover:shadow-md transition-all duration-200"
                >
                   Contact
                </Link>
                
                {/* 모바일 메뉴 버튼 */}
                <button className="md:hidden p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-all duration-200">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </nav>

        {/* 메인 컨텐츠 */}
        <div className="pt-16">
          {children}
        </div>

        {/* 모던 푸터 */}
        <footer className="bg-white border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="text-center">
              {/* 로고 */}
              <div className="flex items-center justify-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center shadow-sm">
                  <span className="text-white font-bold text-lg">P</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  Paplo
                </h3>
              </div>
              
              {/* 태그라인 */}
              <div className="mb-8 space-y-2">
                <p className="text-lg text-gray-700 font-medium">
                  덜어낸 종이, 더해진 가치
                </p>
                <p className="text-gray-500">
                  Less Paper, More Value
                </p>
              </div>
              
              {/* 구분선 */}
              <div className="w-16 h-px bg-gray-200 mx-auto mb-8"></div>
              
              {/* 설명 */}
              <div className="mb-8 max-w-2xl mx-auto">
                <p className="text-gray-600 leading-relaxed">
                  친환경 포장재 혁신을 통해 더 나은 미래를 만들어갑니다
                </p>
                <p className="text-sm text-gray-500 mt-2">
                  Creating a better future through eco-friendly packaging innovation
                </p>
              </div>
              
              {/* 저작권 */}
              <div className="pt-8 border-t border-gray-100">
                <p className="text-sm text-gray-500">
                  © 2024 Story Solution. All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
