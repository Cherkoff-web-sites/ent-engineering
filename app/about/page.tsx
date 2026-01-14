import type { Metadata } from 'next'
import Image from 'next/image'
import Button from '@/components/ui/Button'
import CertificateDownloadButton from '@/components/CertificateDownloadButton'
import { getContent } from '@/lib/api/contentApi'

// SSG страница - генерируется статически для SEO
export const metadata: Metadata = {
  title: 'О компании | ENT Engineering',
  description: 'Информация о компании ENT Engineering',
}

export default async function AboutPage() {
  const content = await getContent()
  const aboutContent = content.about || {
    paragraphs: [
      'Наша компания специализируется на разработке и реализации решения для электропривода. Обеспечиваем полный цикл ввода оборудования в эксплуатацию, а также его последующее обслуживание.',
      'Мы ценим время наших клиентов, поэтому наши инженеры готовы оперативно решить любые вопросы и обеспечить бесперебойную работу вашего оборудования. Вся продукция сертифицирована и производится под строгим контролем на наших партнерских заводах. Мы используем только лучшие комплектующие мировых брендов, таких как FAG, SKF, ZWZ, TDK, Vishay и др. Каждый компонент проходит строгий контроль, что гарантирует надежность и долговечность поставляемого оборудования.',
      'Выбирая Ent-Engineering, вы выбираете надежного партнера, готового предложить гибкий и точный сервис, ориентированный на успех вашего бизнеса.',
    ],
  }
  const certificates = [
    {
      id: 1,
      name: 'Сертификат соответствия преобразователей частоты',
      file: '/certificates/frequency-converters.pdf',
    },
    {
      id: 2,
      name: 'Сертификат соответствия электродвигателей',
      file: '/certificates/electric-motors.pdf',
    },
    {
      id: 3,
      name: 'Сертификат соответствия устройств плавного пуска',
      file: '/certificates/soft-starters.pdf',
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Секция "О КОМПАНИИ" */}
      <section className="py-8 sm:py-12 lg:py-16 relative overflow-hidden">
        {/* Фоновый градиент */}
        <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-gradient-to-l from-[#FE924A]/20 to-transparent pointer-events-none"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 sm:mb-12 text-[#FE924A]">
            О КОМПАНИИ
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* Левая часть - Текст и кнопка */}
            <div>
              <div className="space-y-6 text-white/90 text-base sm:text-lg leading-relaxed mb-8">
                {aboutContent.paragraphs.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>

              {/* Кнопка "Скачать презентацию" */}
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                Скачать презентацию
              </Button>
            </div>

            {/* Правая часть - Изображение */}
            <div className="relative">
              <div className="relative w-full aspect-[3/4] rounded-lg overflow-hidden border-2 border-white/20">
                <Image
                  src="/images/about.png"
                  alt="О компании"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Секция "СЕРТИФИКАТЫ" */}
      <section className="py-8 sm:py-12 lg:py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 sm:mb-12 text-[#FE924A]">
            СЕРТИФИКАТЫ
          </h2>

          <div className="space-y-4 sm:space-y-6 max-w-4xl">
            {certificates.map((certificate) => (
              <div
                key={certificate.id}
                className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-4 sm:p-6 bg-[#2A2529] rounded-lg border border-[#3B363C] hover:border-[#FE924A]/50 transition-colors"
              >
                <p className="text-white text-base sm:text-lg flex-1">
                  {certificate.name}
                </p>
                <CertificateDownloadButton file={certificate.file} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

