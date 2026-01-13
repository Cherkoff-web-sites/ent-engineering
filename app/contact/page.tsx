import type { Metadata } from 'next'

// SSG страница для контактов
export const metadata: Metadata = {
  title: 'Контакты | ENT Engineering',
  description: 'Контактная информация ENT Engineering',
}

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Контакты</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">Свяжитесь с нами</h2>
            <div className="space-y-3 text-lg">
              <p>
                <strong className="text-gray-900">Телефон:</strong>{' '}
                <a href="tel:+7XXXXXXXXXX" className="text-blue-600 hover:underline">
                  +7 (XXX) XXX-XX-XX
                </a>
              </p>
              <p>
                <strong className="text-gray-900">Email:</strong>{' '}
                <a href="mailto:info@ent-engineering.ru" className="text-blue-600 hover:underline">
                  info@ent-engineering.ru
                </a>
              </p>
              <p>
                <strong className="text-gray-900">Адрес:</strong>{' '}
                <span className="text-gray-700">г. Москва, ул. Примерная, д. 1</span>
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Режим работы</h2>
            <div className="space-y-2 text-lg text-gray-700">
              <p><strong>Пн-Пт:</strong> 9:00 - 18:00</p>
              <p><strong>Сб-Вс:</strong> Выходной</p>
            </div>
          </section>
        </div>

        <section className="bg-gray-50 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Как нас найти</h2>
          <p className="text-gray-700">
            Мы находимся в центре Москвы. Ближайшая станция метро - примерная.
            Парковка доступна рядом с офисом.
          </p>
        </section>
      </div>
    </div>
  )
}

