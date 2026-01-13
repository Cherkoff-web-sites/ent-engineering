import Link from 'next/link'

const navigationItems = [
  { href: '/about', label: 'О компании' },
  { href: '/services', label: 'Услуги' },
  { href: '/catalog', label: 'Каталог' },
  { href: '/docs', label: 'Техническая документация' },
  { href: '/contact', label: 'Контакты' },
]

export default function Footer() {
  return (
    <footer className="bg-[#2A2529] text-white mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Логотип слева */}
          <div className="flex items-start gap-3">
            <div className="flex-shrink-0">
              {/* Графика здания - можно заменить на реальное изображение */}
              <div className="w-12 h-12 bg-white/10 rounded flex items-center justify-center">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="8" y="20" width="4" height="8" fill="white" opacity="0.7"/>
                  <rect x="14" y="16" width="4" height="12" fill="white" opacity="0.7"/>
                  <rect x="20" y="18" width="4" height="10" fill="white" opacity="0.7"/>
                  <rect x="6" y="28" width="20" height="2" fill="white" opacity="0.7"/>
                </svg>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="text-2xl font-bold text-white leading-none mb-1">ENT</div>
              <div className="text-xs text-white/80 leading-none">ENERGY AND TECHNOLOGY</div>
            </div>
          </div>

          {/* Контакты в центре */}
          <div>
            <div className="space-y-3 text-sm">
              <div>
                <span className="text-white/80">E-mail:</span>{' '}
                <a href="mailto:info@ent-engineering.ru" className="text-white hover:text-[#FE924A] transition-colors">
                  info@ent-engineering.ru
                </a>
              </div>
              <div>
                <span className="text-white/80">Адрес:</span>{' '}
                <span className="text-white text-xs sm:text-sm break-words">
                  Россия, Москва, ЗАО, Минская ул., д.2 "г", корп.1 БЦ КУТУЗОВ ХОЛЛ
                </span>
              </div>
              <div className="flex items-center gap-3 mt-4">
                <a
                  href="https://t.me/ent_engineering"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-12 h-12"
                  aria-label="Telegram"
                >
                  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="24" cy="24" r="24" fill="#FE924A"/>
                    <path d="M22.4832 28.4764L26.2108 32.7758C27.5919 34.3688 28.2824 35.1652 29.0052 34.9713C29.728 34.7774 29.9759 33.7292 30.4716 31.6328L33.2213 20.0036C33.9848 16.7747 34.3665 15.1603 33.518 14.364C32.6694 13.5677 31.1986 14.1601 28.257 15.345L14.6096 20.8419C12.2569 21.7895 11.0805 22.2633 11.0058 23.0776C10.9982 23.1609 10.9981 23.2448 11.0054 23.3281C11.0777 24.1427 12.2526 24.6205 14.6024 25.576C15.6671 26.009 16.1995 26.2255 16.5812 26.6401C16.6241 26.6867 16.6654 26.735 16.7049 26.7848C17.0566 27.2281 17.2066 27.8099 17.5068 28.9735L18.0685 31.1511C18.3606 32.2834 18.5066 32.8496 18.8891 32.9268C19.2716 33.004 19.6046 32.5345 20.2706 31.5956L22.4832 28.4764ZM22.4832 28.4764L22.1178 28.0899C21.7018 27.6502 21.4939 27.4303 21.4939 27.157C21.4939 26.8838 21.7018 26.6639 22.1178 26.2241L26.2267 21.8798" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
                <a
                  href="https://wa.me/79999999999"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-12 h-12"
                  aria-label="WhatsApp"
                >
                  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="24" cy="24" r="24" fill="#FE924A"/>
                    <path d="M24.5 36C30.8513 36 36 30.8513 36 24.5C36 18.1487 30.8513 13 24.5 13C18.1487 13 13 18.1487 13 24.5C13 26.0857 13.3209 27.5964 13.9014 28.9708C14.2222 29.7304 14.3826 30.1102 14.4025 30.3972C14.4223 30.6842 14.3378 30.9999 14.1689 31.6314L13 36L17.3686 34.8311C18.0001 34.6622 18.3158 34.5777 18.6028 34.5975C18.8898 34.6174 19.2696 34.7778 20.0292 35.0986C21.4036 35.6791 22.9143 36 24.5 36Z" stroke="white" strokeWidth="1.5" strokeLinejoin="round"/>
                    <path d="M20.9058 25.4528L21.9509 24.1548C22.3914 23.6077 22.9359 23.0983 22.9786 22.3699C22.9893 22.1859 22.8599 21.3599 22.601 19.7078C22.4992 19.0586 21.893 19 21.368 19C20.6838 19 20.3417 19 20.0019 19.1552C19.5726 19.3513 19.1317 19.9028 19.035 20.3648C18.9585 20.7304 19.0153 20.9822 19.1291 21.486C19.6123 23.6258 20.7458 25.739 22.5034 27.4966C24.261 29.2542 26.3742 30.3877 28.514 30.8709C29.0178 30.9847 29.2696 31.0415 29.6352 30.965C30.0972 30.8683 30.6487 30.4274 30.8448 29.9981C31 29.6583 31 29.3162 31 28.632C31 28.107 30.9414 27.5008 30.2922 27.399C28.6401 27.1401 27.8141 27.0107 27.6301 27.0214C26.9017 27.0641 26.3923 27.6086 25.8452 28.0491L24.5472 29.0942" stroke="white" strokeWidth="1.5"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Навигация справа */}
          <div>
            <ul className="space-y-2">
              {navigationItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-white hover:text-[#FE924A] transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Нижняя часть */}
        <div className="border-t border-white/10 pt-6 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
            <div className="text-white/80">
              © 2020-2025 «ENT-Engineering» — Поставка оборудования. Все права защищены.
            </div>
            <Link
              href="/privacy"
              className="text-white/80 hover:text-[#FE924A] transition-colors"
            >
              Политика конфиденциальности
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

