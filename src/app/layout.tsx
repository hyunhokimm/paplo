import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Paplo - 덜어낸 종이, 더해진 가치',
  description: '친환경 컵홀더의 새로운 패러다임',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body className="bg-white">
        <header className="fixed top-0 left-0 right-0 bg-white/70 backdrop-blur-md z-50 border-b border-gray-100/50">
          <div className="container mx-auto px-6">
            <div className="flex items-center justify-between h-20">
              <a 
                href="/" 
                className="text-2xl font-bold relative group"
              >
                <span className="bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Paplo
                </span>
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <nav className="hidden md:flex items-center space-x-8">
                <a href="#features" className="text-gray-600 hover:text-gray-900 transition-colors">Features</a>
                <a href="#impact" className="text-gray-600 hover:text-gray-900 transition-colors">Impact</a>
                <a href="#story" className="text-gray-600 hover:text-gray-900 transition-colors">Story</a>
                <a href="#contact" className="px-4 py-2 bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-lg hover:shadow-lg hover:shadow-blue-500/20 transition-all">
                  Contact
                </a>
              </nav>
            </div>
          </div>
        </header>
        <main className="pt-20">
          {children}
        </main>
      </body>
    </html>
  )
}
