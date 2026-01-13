import Link from 'next/link'
import { NAVIGATION_ITEMS } from '@/lib/constants'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-white text-lg font-bold mb-4">ENT Engineering</h3>
            <p className="text-sm">
              Профессиональные инженерные решения для вашего бизнеса.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Навигация</h4>
            <ul className="space-y-2">
              {NAVIGATION_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Контакты</h4>
            <ul className="space-y-2 text-sm">
              <li>Email: info@ent-engineering.ru</li>
              <li>Телефон: +7 (XXX) XXX-XX-XX</li>
              <li>Адрес: г. Москва</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} ENT Engineering. Все права защищены.</p>
        </div>
      </div>
    </footer>
  )
}

