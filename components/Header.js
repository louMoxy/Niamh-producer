import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white border-b-[4px] border-[#2e2e2e]">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-4 flex items-center justify-between">
        <div className="text-xl md:text-2xl font-bold" style={{ fontFamily: 'Syncopate, sans-serif' }}>
          Riley <span className="text-[#2e2e2e]">Shaw</span>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8" style={{fontFamily: 'Syncopate, sans-serif'}}>
          <Link href="/" className="font-semibold hover:underline text-sm xl:text-base">HOME</Link>
          <Link href="/about" className="font-semibold hover:underline text-sm xl:text-base">ABOUT</Link>
          <Link href="/portfolio" className="font-semibold hover:underline text-sm xl:text-base">PORTFOLIO</Link>
          <Link href="/services" className="font-semibold hover:underline text-sm xl:text-base">SERVICES</Link>
          <Link href="/contact" className="font-semibold hover:underline text-sm xl:text-base">CONTACT</Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden border-[4px] border-[#2e2e2e] p-2 bg-white"
          aria-label="Toggle menu"
        >
          <div className="w-6 h-6 flex flex-col justify-center gap-1.5">
            <span className={`block h-0.5 bg-[#2e2e2e] transition-all ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`block h-0.5 bg-[#2e2e2e] transition-all ${isMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block h-0.5 bg-[#2e2e2e] transition-all ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </div>
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <nav className="lg:hidden border-t-[4px] border-[#2e2e2e] bg-white" style={{fontFamily: 'Syncopate, sans-serif'}}>
          <div className="flex flex-col">
            <Link 
              href="/" 
              className="border-b-[2px] border-[#2e2e2e] px-6 py-4 font-semibold hover:bg-[#E0F2FE] transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              HOME
            </Link>
            <Link 
              href="/about" 
              className="border-b-[2px] border-[#2e2e2e] px-6 py-4 font-semibold hover:bg-[#E0F2FE] transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              ABOUT
            </Link>
            <Link 
              href="/portfolio" 
              className="border-b-[2px] border-[#2e2e2e] px-6 py-4 font-semibold hover:bg-[#E0F2FE] transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              PORTFOLIO
            </Link>
            <Link 
              href="/services" 
              className="border-b-[2px] border-[#2e2e2e] px-6 py-4 font-semibold hover:bg-[#E0F2FE] transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              SERVICES
            </Link>
            <Link 
              href="/contact" 
              className="border-b-[2px] border-[#2e2e2e] px-6 py-4 font-semibold hover:bg-[#E0F2FE] transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              CONTACT
            </Link>
          </div>
        </nav>
      )}
    </header>
  )
}
