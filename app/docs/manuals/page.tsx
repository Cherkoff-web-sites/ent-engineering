import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Руководства по эксплуатации | ENT Engineering',
  description: 'Руководства по эксплуатации оборудования ENT Engineering.',
}

const downloadIcon = (
  <svg width="26" height="22" viewBox="0 0 26 22" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M12.75 15.75L12.75 0.75M12.75 15.75C11.6296 15.75 9.53645 12.7585 8.75 12M12.75 15.75C13.8704 15.75 15.9636 12.7585 16.75 12"
      stroke="white"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M24.75 15.75C24.75 19.8867 23.973 20.75 20.25 20.75H5.25C1.527 20.75 0.75 19.8867 0.75 15.75"
      stroke="white"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

const expandIcon = (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="24" cy="24" r="24" fill="#FE924A" />
    <path d="M24 34L24 13" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path
      d="M31 28L24.7071 34.2929C24.3738 34.6262 24.2071 34.7929 24 34.7929C23.7929 34.7929 23.6262 34.6262 23.2929 34.2929L17 28"
      stroke="white"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export default function ManualsPage() {
  const sections = [
    {
      id: 1,
      title: 'Руководства по эксплуатации преобразователей частоты',
      items: [
        { id: 1, name: 'Руководства по эксплуатации Модели 1/000', file: '/docs/manuals/ent100.pdf' },
        { id: 2, name: 'Руководства по эксплуатации Модели 2/001', file: '/docs/manuals/ent100.pdf' },
        { id: 3, name: 'Руководства по эксплуатации Модели 3/002', file: '/docs/manuals/ent100.pdf' },
        { id: 4, name: 'Руководства по эксплуатации Модели 4/003', file: '/docs/manuals/ent100.pdf' },
        { id: 5, name: 'Руководства по эксплуатации Модели 5/004', file: '/docs/manuals/ent100.pdf' },
      ],
    },
    {
      id: 2,
      title: 'Руководства по эксплуатации электродвигателей',
      items: [
        { id: 1, name: 'Руководства по эксплуатации Модели 1/010', file: '/docs/manuals/ent100.pdf' },
        { id: 2, name: 'Руководства по эксплуатации Модели 2/011', file: '/docs/manuals/ent100.pdf' },
        { id: 3, name: 'Руководства по эксплуатации Модели 3/012', file: '/docs/manuals/ent100.pdf' },
      ],
    },
    {
      id: 3,
      title: 'Руководства по эксплуатации устройств плавного пуска',
      items: [
        { id: 1, name: 'Руководства по эксплуатации Модели 1/020', file: '/docs/manuals/ent100.pdf' },
        { id: 2, name: 'Руководства по эксплуатации Модели 2/021', file: '/docs/manuals/ent100.pdf' },
      ],
    },
  ]

  return (
    <div className="min-h-screen">
      <section className="py-10 sm:py-14 lg:py-16">
        <div className="container mx-auto px-4">
          <nav className="text-sm text-white/70 mb-6">
            <Link href="/" className="hover:text-white">
              Главная
            </Link>
            <span className="mx-2">{'>'}</span>
            <Link href="/docs" className="hover:text-white">
              Техническая документация
            </Link>
            <span className="mx-2 text-[#FE924A]">{'>'}</span>
            <span className="text-[#FE924A]">Руководства по эксплуатации</span>
          </nav>

          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-8 text-[#FE924A]">
            РУКОВОДСТВА ПО ЭКСПЛУАТАЦИИ
          </h1>

          <div className="space-y-4">
            {sections.map((section, index) => (
              <details key={section.id} className="bg-[#2A2529] border border-[#3B363C] rounded-lg">
                <summary className="list-none cursor-pointer select-none flex items-center justify-between gap-4 px-5 sm:px-6 py-4">
                  <span className="text-white font-semibold">{section.title}</span>
                  <span className="shrink-0">{expandIcon}</span>
                </summary>

                <div className="px-5 sm:px-6 pb-4">
                  <div className="space-y-3">
                    {section.items.map((item) => (
                      <div
                        key={item.id}
                        className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-white/90"
                      >
                        <span>{item.name}</span>
                        <a
                          href={item.file}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-3 px-4 py-2 border border-white/40 rounded-md hover:border-white transition-colors"
                        >
                          <span>Скачать</span>
                          {downloadIcon}
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
