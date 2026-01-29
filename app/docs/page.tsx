import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Техническая документация | ENT Engineering',
  description: 'Техническая документация ENT Engineering: руководства, сертификаты, каталоги.',
}

export default function DocsPage() {
  const documents = [
    {
      id: 1,
      title: 'Руководства по эксплуатации',
      image: '/images/docs/manuals.webp',
      href: '/docs/manuals',
    },
    {
      id: 2,
      title: 'Референции',
      image: '/images/docs/references.webp',
      href: '/docs/references',
    },
    {
      id: 3,
      title: 'Программное обеспечение',
      image: '/images/docs/software.webp',
      href: '/docs/software',
    },
    {
      id: 4,
      title: 'Каталоги и брошюры',
      image: '/images/docs/catalogs.webp',
      href: '/docs/catalogs',
    },
    {
      id: 5,
      title: 'Сертификаты',
      image: '/images/docs/certificates.webp',
      href: '/docs/certificates',
    },
    {
      id: 6,
      title: 'Опросные листы',
      image: '/images/docs/questionnaires.webp',
      href: '/docs/questionnaires',
    },
  ]

  return (
    <div className="min-h-screen">
      <section className="py-10 sm:py-14 lg:py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-8 sm:mb-10 text-[#FE924A]">
            ТЕХНИЧЕСКАЯ ДОКУМЕНТАЦИЯ
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {documents.map((doc) => (
              <Link
                key={doc.id}
                href={doc.href}
                className="bg-[#2A2529] border border-[#FE924A] rounded-lg p-6 sm:p-7 flex flex-col items-center text-center hover:opacity-90 transition-opacity"
              >
                <div className="h-20 w-20 flex items-center justify-center mb-5">
                  <Image
                    src={doc.image}
                    alt={doc.title}
                    width={80}
                    height={80}
                    className="h-20 w-20 object-contain"
                    sizes="80px"
                  />
                </div>
                <p className="text-white text-sm sm:text-base leading-relaxed">
                  {doc.title}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
