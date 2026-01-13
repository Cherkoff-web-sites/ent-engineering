import type { Metadata } from 'next'
import Link from 'next/link'

// SSG страница для контактов
export const metadata: Metadata = {
  title: 'Контакты - ENT Engineering',
  description: 'Контактная информация ENT Engineering',
}

export default function ContactsPage() {
  return (
    <div style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
      <nav style={{ marginBottom: '2rem' }}>
        <Link href="/">← Назад</Link>
      </nav>
      
      <h1>Контакты</h1>
      
      <section style={{ marginTop: '2rem' }}>
        <h2>Свяжитесь с нами</h2>
        <div style={{ marginTop: '1rem' }}>
          <p><strong>Телефон:</strong> +7 (XXX) XXX-XX-XX</p>
          <p><strong>Email:</strong> info@ent-engineering.ru</p>
          <p><strong>Адрес:</strong> г. Москва, ул. Примерная, д. 1</p>
        </div>
      </section>

      <section style={{ marginTop: '2rem' }}>
        <h2>Режим работы</h2>
        <p>Пн-Пт: 9:00 - 18:00</p>
        <p>Сб-Вс: Выходной</p>
      </section>
    </div>
  )
}

