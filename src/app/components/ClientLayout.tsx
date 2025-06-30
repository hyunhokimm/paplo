'use client';

import SmoothScroll from './SmoothScroll';

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <SmoothScroll>
      <header className="fixed top-0 left-0 right-0 bg-white/70 backdrop-blur-md z-40 border-b border-gray-100/50">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            <a 
              href="/" 
              className="text-2xl font-bold relative group"
              aria-label="Paplo 홈페이지로 이동"
            >
              <span className="bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
                Paplo
              </span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <nav className="hidden md:flex items-center space-x-8" aria-label="메인 네비게이션">
              <a href="#features" className="text-gray-600 hover:text-gray-900 transition-colors">Features</a>
              <a href="#impact" className="text-gray-600 hover:text-gray-900 transition-colors">Impact</a>
              <a href="#story" className="text-gray-600 hover:text-gray-900 transition-colors">Story</a>
              <a href="#contact" className="text-gray-600 hover:text-gray-900 transition-colors">Contact</a>
            </nav>
          </div>
        </div>
      </header>
      <main className="pt-20">
        {children}
      </main>
    </SmoothScroll>
  );
} 