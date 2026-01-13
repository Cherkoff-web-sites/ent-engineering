import type { Metadata } from 'next'
import Link from 'next/link'
import Button from '@/components/ui/Button'

// SSG - статическая генерация для SEO
export const metadata: Metadata = {
  title: 'Главная | ENT Engineering',
  description: 'Демонстрация гибридного сайта на Next.js',
}

// Эта страница будет сгенерирована статически при сборке
export default function HomePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Главная страница</h1>
        <p className="text-lg mb-4">
          Эта страница сгенерирована как статичный HTML через SSG.
          Идеально для SEO.
        </p>
        <p className="text-lg mb-6 text-gray-600">
          HTML генерируется на этапе сборки и отдается сразу браузеру,
          что обеспечивает максимальную скорость загрузки и отличную индексацию поисковыми системами.
        </p>
        
        <div className="flex gap-4 flex-wrap">
          <Link href="/catalog">
            <Button>Перейти в каталог (React-приложение)</Button>
          </Link>
          <Link href="/about">
            <Button variant="outline">О компании</Button>
          </Link>
        </div>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">SSG Страницы</h3>
            <p className="text-gray-600">
              Статичные страницы генерируются при сборке для максимального SEO.
            </p>
          </div>
          <div className="bg-green-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">React Каталог</h3>
            <p className="text-gray-600">
              Интерактивный каталог с фильтрами и поиском на React.
            </p>
          </div>
          <div className="bg-purple-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Гибридный подход</h3>
            <p className="text-gray-600">
              Комбинация SSG и CSR для оптимального баланса SEO и UX.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

