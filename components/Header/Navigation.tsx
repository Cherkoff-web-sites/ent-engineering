'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const NAVIGATION_ITEMS = [
  { href: '/about', label: 'О компании' },
  { href: '/services', label: 'Услуги' },
  { href: '/catalog', label: 'Каталог' },
  { href: '/docs', label: 'Техническая документация' },
  { href: '/contact', label: 'Контакты' },
]

export default function Navigation() {
  const pathname = usePathname()
  
  return (
    <nav className="hidden md:flex items-center space-x-8">
      {NAVIGATION_ITEMS.map((item) => {
        const isActive = pathname === item.href
        return (
          <Link
            key={item.href}
            href={item.href}
            className={`text-sm font-medium transition-colors ${
              isActive
                ? 'text-[#FE924A]'
                : 'text-white hover:text-[#FE924A]'
            }`}
          >
            {item.label}
          </Link>
        )
      })}
    </nav>
  )
}

