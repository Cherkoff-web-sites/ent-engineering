'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Navigation from './Navigation'
import MobileMenu from './MobileMenu'
import { useCart } from '@/contexts/CartContext'

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { getTotalItems } = useCart()
  const totalItems = getTotalItems()

  return (
    <>
      <header className="bg-[#2A2529] border-b border-[#3B363C]">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Логотип */}
            <Link href="/" className="flex items-center flex-shrink-0">
              <Image
                src="/images/logo.svg"
                alt="ENT Engineering"
                width={180}
                height={48}
                className="h-10 w-auto sm:h-12"
                priority
              />
            </Link>

            {/* Десктопная навигация */}
            <Navigation />

            {/* Правая часть - Корзина и Бургер */}
            <div className="flex items-center gap-2">
              {/* Корзина */}
              <Link
                href="/cart"
                className="relative flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 flex-shrink-0"
                aria-label="Корзина"
              >
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 bg-white text-[#FE924A] text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                    {totalItems > 9 ? '9+' : totalItems}
                  </span>
                )}
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-full"
                >
                  <circle cx="24" cy="24" r="24" fill="#FE924A" />
                  <path
                    d="M19 28L29.0617 27.2007C32.2099 26.9505 32.9167 26.295 33.2655 23.3018L34 17"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                  <path
                    d="M17 17H35"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                  <circle cx="16.5" cy="32.5" r="2.5" stroke="white" strokeWidth="1.5" />
                  <circle cx="29.5" cy="32.5" r="2.5" stroke="white" strokeWidth="1.5" />
                  <path
                    d="M19 33L27 33"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                  <path
                    d="M12 12H13.127C14.2291 12 15.1898 12.7027 15.4571 13.7043L18.9283 26.711C19.1037 27.3684 18.9536 28.0647 18.5196 28.6067L17.4042 30"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </Link>

              {/* Бургер меню (только на мобильных) */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden flex items-center justify-center w-10 h-10 text-white hover:text-[#FE924A] transition-colors"
                aria-label="Открыть меню"
              >
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                >
                  <path
                    d="M12 16L36 16"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 24L36 24"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 32L36 32"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Мобильное меню */}
      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
    </>
  )
}

