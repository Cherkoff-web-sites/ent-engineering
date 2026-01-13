import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Button from '@/components/ui/Button'
import ContactForm from '@/components/ContactForm/ContactForm'

// SSG - статическая генерация для SEO
export const metadata: Metadata = {
  title: 'Главная | ENT Engineering',
  description: 'Современные инженерные системы. Производство и сервис силовой преобразовательной техники.',
}

// Эта страница будет сгенерирована статически при сборке
export default function HomePage() {
  const categories = [
    {
      id: 1,
      name: 'Частотные преобразователи',
      href: '/catalog/converter',
      image: '/images/categories/converter.png',
    },
    {
      id: 2,
      name: 'Электродвигатели',
      href: '/catalog/motor',
      image: '/images/categories/motor.png',
    },
    {
      id: 3,
      name: 'Допоборудование к ПЧ и УПП',
      href: '/catalog?category=equipment',
      image: '/images/categories/equipment.png',
    },
    {
      id: 4,
      name: 'Устройства плавного пуска',
      href: '/catalog/soft-starter',
      image: '/images/categories/soft-starter.png',
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Первый блок - Hero секция */}
      <section className="relative min-h-[500px] sm:min-h-[600px] flex items-center overflow-hidden">
        <div className="container mx-auto px-4 py-8 sm:py-16 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            {/* Левая часть - Текст */}
            <div className="z-10">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
                <span className="text-[#FE924A]">СОВРЕМЕННЫЕ</span>
                <br />
                <span className="text-white">инженерные системы</span>
              </h1>
              <p className="text-base sm:text-lg text-white/90 mb-6 sm:mb-8 leading-relaxed max-w-xl">
                Производство и сервис силовой преобразовательной техники. Комплексные поставки 
                электротехнического оборудования и проектных решений для электропривода.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#contact-form">
                  <Button size="lg" className="w-full sm:w-auto">
                    Оставить заявку
                  </Button>
                </a>
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  Скачать каталог
                </Button>
              </div>
            </div>

            {/* Правая часть - Категории товаров */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4 z-10">
              {categories.map((category) => (
                <Link
                  key={category.id}
                  href={category.href}
                  className="group relative bg-[#2A2529] border-2 border-[#FE924A] rounded-xl p-3 sm:p-4 lg:p-6 hover:border-[#FE924A]/80 transition-all"
                >
                  <div className="aspect-square bg-[#3B363C] rounded-lg mb-4 flex items-center justify-center overflow-hidden relative">
                    {category.image ? (
                      <div className="relative w-full h-full flex items-center justify-center">
                        <Image
                          src={category.image}
                          alt={category.name}
                          width={193}
                          height={193}
                          className="object-contain rounded-lg max-w-[193px]"
                          sizes="193px"
                        />
                      </div>
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-[#3B363C] to-[#2A2529] flex items-center justify-center">
                        <span className="text-white/30 text-sm">Изображение</span>
                      </div>
                    )}
                  </div>
                  <h3 className="text-white text-sm font-medium text-center group-hover:text-[#FE924A] transition-colors">
                    {category.name}
                  </h3>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Блок "Новые модели" */}
      <section className="py-8 sm:py-12 lg:py-16 overflow-hidden">
        <div className="container mx-auto px-4 w-full">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-6 sm:mb-8 text-[#FE924A]">
            НОВЫЕ МОДЕЛИ
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                id: 1,
                type: 'Частотный преобразователь',
                model: 'ENT-100-2S-2.2G',
                image: '/images/categories/converter.png',
                specs: [
                  { label: 'Серия:', value: 'ENT-100' },
                  { label: 'Напряжение:', value: '220В' },
                  { label: 'Мощность (кВт):', value: '2.2' },
                  { label: 'Ток Іном. (А):', value: '9.6' },
                ],
                price: 32000,
                priceDisplay: '32 000',
                href: '/catalog/converter',
              },
              {
                id: 2,
                type: 'Электродвигатель',
                model: 'ДА304-DIN 400-2',
                image: '/images/categories/motor.png',
                specs: [
                  { label: 'Серия:', value: 'DAZO4' },
                  { label: 'Напряжение:', value: '6000В' },
                  { label: 'Мощность (кВт):', value: '250' },
                  { label: 'Ток Іном. (А):', value: '30,2' },
                ],
                price: 0,
                priceDisplay: 'По запросу',
                href: '/catalog/motor',
              },
              {
                id: 3,
                type: 'Устройство плавного пуска',
                model: 'ENT-100-4T-7.5G',
                image: '/images/categories/soft-starter.png',
                specs: [
                  { label: 'Серия:', value: 'SS100' },
                  { label: 'Напряжение:', value: '380В' },
                  { label: 'Мощность (кВт):', value: '7.5' },
                  { label: 'Ток Іном. (А):', value: '17' },
                ],
                price: 0,
                priceDisplay: 'По запросу',
                href: '/catalog/soft-starter',
              },
              {
                id: 4,
                type: 'Частотный преобразователь',
                model: 'ENT-100-4T-5.5G/7.5P',
                image: '/images/categories/converter.png',
                specs: [
                  { label: 'Серия:', value: 'ENT-100' },
                  { label: 'Напряжение:', value: '380В' },
                  { label: 'Мощность (кВт):', value: '5.5/7.5' },
                  { label: 'Ток Іном. (А):', value: '13.0/17.0' },
                ],
                price: 45000,
                priceDisplay: '45 000',
                href: '/catalog/converter',
              },
            ].map((product) => (
              <div
                key={product.id}
                className="relative bg-[#2A2529] border-2 border-[#FE924A] rounded-lg p-4 sm:p-6 flex flex-col hover:border-[#FE924A]/80 transition-all"
              >
                {/* Бейдж "Новинка" */}
                <div className="absolute top-2 right-2 sm:top-4 sm:right-4 bg-[#FE924A] text-white text-[10px] sm:text-xs font-semibold px-2 sm:px-3 py-1 rounded">
                  Новинка
                </div>

                {/* Изображение товара */}
                <Link href={product.href} className="flex-1 flex items-center justify-center mb-4 mt-2">
                  <div className="relative w-full h-48 flex items-center justify-center">
                    <Image
                      src={product.image}
                      alt={product.type}
                      width={200}
                      height={200}
                      className="object-contain max-w-full max-h-full"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    />
                  </div>
                </Link>

                {/* Название и модель */}
                <Link href={product.href} className="mb-4">
                  <h3 className="text-white font-semibold mb-1 hover:text-[#FE924A] transition-colors">
                    {product.type}
                  </h3>
                  <p className="text-[#FE924A] text-sm font-medium">
                    {product.model}
                  </p>
                </Link>

                {/* Характеристики */}
                <div className="space-y-2 mb-4 text-sm">
                  {product.specs.map((spec, index) => (
                    <div key={index} className="flex justify-between text-white/80">
                      <span>{spec.label}</span>
                      <span className="text-white font-medium">{spec.value}</span>
                    </div>
                  ))}
                </div>

                {/* Цена */}
                <div className="mb-4">
                  <p className="text-white/80 text-sm mb-1">Цена:</p>
                  <p className="text-white text-xl font-bold">
                    {product.price === 0 ? (
                      <span className="text-base">По запросу</span>
                    ) : (
                      `${product.priceDisplay} руб.`
                    )}
                  </p>
                </div>

                {/* Кнопка "Купить" */}
                <Link href={product.href} className="w-full">
                  <Button className="w-full">
                    Купить
                  </Button>
                </Link>
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

