import type { Metadata } from 'next'
import ContactForm from '@/components/ContactForm/ContactForm'

// SSG страница - генерируется статически для SEO
export const metadata: Metadata = {
  title: 'Услуги | ENT Engineering',
  description: 'Услуги компании ENT Engineering: шефмонтаж, пусконаладка, обучение персонала',
}

export default function ServicesPage() {
  const services = [
    {
      id: 1,
      name: 'Шефмонтаж',
      icon: (
        <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FE924A" />
              <stop offset="100%" stopColor="#FF6B35" />
            </linearGradient>
          </defs>
          {/* Документ */}
          <rect x="15" y="10" width="30" height="35" rx="2" stroke="url(#gradient1)" strokeWidth="2" fill="none" />
          <line x1="20" y1="20" x2="40" y2="20" stroke="url(#gradient1)" strokeWidth="2" strokeLinecap="round" />
          <line x1="20" y1="28" x2="40" y2="28" stroke="url(#gradient1)" strokeWidth="2" strokeLinecap="round" />
          <line x1="20" y1="36" x2="35" y2="36" stroke="url(#gradient1)" strokeWidth="2" strokeLinecap="round" />
          {/* Галочки */}
          <path d="M22 20L25 23L30 18" stroke="url(#gradient1)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          <path d="M22 28L25 31L30 26" stroke="url(#gradient1)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          {/* Шестеренка */}
          <circle cx="55" cy="20" r="8" stroke="url(#gradient1)" strokeWidth="2" fill="none" />
          <circle cx="55" cy="20" r="4" fill="url(#gradient1)" />
          <path d="M55 12L55 14L60 14" stroke="url(#gradient1)" strokeWidth="2" strokeLinecap="round" />
          <path d="M55 28L55 26L60 26" stroke="url(#gradient1)" strokeWidth="2" strokeLinecap="round" />
          {/* Человек в каске */}
          <circle cx="55" cy="50" r="6" stroke="url(#gradient1)" strokeWidth="2" fill="none" />
          <path d="M50 60L60 60" stroke="url(#gradient1)" strokeWidth="2" strokeLinecap="round" />
          <path d="M55 50L55 44" stroke="url(#gradient1)" strokeWidth="2" strokeLinecap="round" />
          {/* Каска */}
          <path d="M52 44L58 44L56 38Z" fill="url(#gradient1)" />
        </svg>
      ),
    },
    {
      id: 2,
      name: 'Пусконаладка',
      icon: (
        <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FE924A" />
              <stop offset="100%" stopColor="#FF6B35" />
            </linearGradient>
          </defs>
          {/* Гаечный ключ */}
          <path d="M20 15L25 20L15 30L10 25L20 15Z" stroke="url(#gradient2)" strokeWidth="2" fill="none" strokeLinejoin="round" />
          <path d="M13 27L17 31" stroke="url(#gradient2)" strokeWidth="2" strokeLinecap="round" />
          {/* Отвертка */}
          <line x1="35" y1="12" x2="35" y2="28" stroke="url(#gradient2)" strokeWidth="2" strokeLinecap="round" />
          <line x1="30" y1="12" x2="40" y2="12" stroke="url(#gradient2)" strokeWidth="2" strokeLinecap="round" />
          {/* Шестеренка */}
          <circle cx="50" cy="22" r="8" stroke="url(#gradient2)" strokeWidth="2" fill="none" />
          <circle cx="50" cy="22" r="4" fill="url(#gradient2)" />
          <path d="M50 14L50 16L55 16" stroke="url(#gradient2)" strokeWidth="2" strokeLinecap="round" />
          <path d="M50 30L50 28L55 28" stroke="url(#gradient2)" strokeWidth="2" strokeLinecap="round" />
          {/* Часы */}
          <circle cx="50" cy="55" r="12" stroke="url(#gradient2)" strokeWidth="2" fill="none" />
          <circle cx="50" cy="55" r="2" fill="url(#gradient2)" />
          <line x1="50" y1="55" x2="50" y2="48" stroke="url(#gradient2)" strokeWidth="2" strokeLinecap="round" />
          <line x1="50" y1="55" x2="55" y2="55" stroke="url(#gradient2)" strokeWidth="2" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      id: 3,
      name: 'Обучение персонала',
      icon: (
        <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FE924A" />
              <stop offset="100%" stopColor="#FF6B35" />
            </linearGradient>
          </defs>
          {/* Человек */}
          <circle cx="40" cy="30" r="8" stroke="url(#gradient3)" strokeWidth="2" fill="none" />
          <path d="M30 50L50 50" stroke="url(#gradient3)" strokeWidth="2" strokeLinecap="round" />
          <path d="M40 38L40 50" stroke="url(#gradient3)" strokeWidth="2" strokeLinecap="round" />
          {/* Шапочка выпускника */}
          <path d="M35 25L45 25L43 20L37 20L35 25Z" fill="url(#gradient3)" />
          <path d="M40 20L40 15" stroke="url(#gradient3)" strokeWidth="2" strokeLinecap="round" />
          <circle cx="40" cy="15" r="3" fill="url(#gradient3)" />
        </svg>
      ),
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Секция "УСЛУГИ" */}
      <section className="py-8 sm:py-12 lg:py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 sm:mb-12">
            <span className="bg-gradient-to-r from-[#FE924A] to-[#FF6B35] bg-clip-text text-transparent">
              УСЛУГИ
            </span>
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
            {services.map((service) => (
              <div
                key={service.id}
                className="relative bg-[#2A2529] rounded-lg p-6 sm:p-8 flex flex-col items-center hover:opacity-90 transition-all"
                style={{
                  border: '2px solid transparent',
                  backgroundImage: 'linear-gradient(#2A2529, #2A2529), linear-gradient(to right, #FE924A, #FF6B35)',
                  backgroundOrigin: 'border-box',
                  backgroundClip: 'padding-box, border-box',
                }}
              >
                {/* Иконка */}
                <div className="mb-6 flex items-center justify-center">
                  {service.icon}
                </div>

                {/* Название услуги */}
                <h3 className="text-white text-lg sm:text-xl font-medium text-center">
                  {service.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Форма обратной связи */}
      <ContactForm />
    </div>
  )
}
