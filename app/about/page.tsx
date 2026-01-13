import type { Metadata } from 'next'

// SSG страница - генерируется статически для SEO
export const metadata: Metadata = {
  title: 'О компании | ENT Engineering',
  description: 'Информация о компании ENT Engineering',
}

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">О компании</h1>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Наша история</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Это контентная страница, которая генерируется статически (SSG) 
            при сборке проекта. Весь HTML уже готов и отдается сразу браузеру,
            что отлично для SEO и обеспечивает максимальную скорость загрузки.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Наши преимущества</h2>
          <ul className="list-disc list-inside space-y-2 text-lg text-gray-700">
            <li>Высокое качество услуг</li>
            <li>Опытная команда специалистов</li>
            <li>Современные технологии и решения</li>
            <li>Индивидуальный подход к каждому клиенту</li>
            <li>Гарантия на все виды работ</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Наша миссия</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Мы стремимся предоставлять лучшие инженерные решения, 
            которые помогают нашим клиентам достигать своих целей 
            и развивать бизнес эффективно и безопасно.
          </p>
        </section>
      </div>
    </div>
  )
}

