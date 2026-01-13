'use client'

import { useState } from 'react'
import Link from 'next/link'

// Административная панель (CSR)
export default function AdminPage() {
  const [activeTab, setActiveTab] = useState('content')

  return (
    <div style={{ padding: '2rem', maxWidth: '1400px', margin: '0 auto' }}>
      <nav style={{ marginBottom: '2rem' }}>
        <Link href="/">← На главную</Link>
      </nav>

      <h1>Административная панель</h1>

      <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', borderBottom: '1px solid #ddd' }}>
        <button
          onClick={() => setActiveTab('content')}
          style={{
            padding: '0.5rem 1rem',
            border: 'none',
            background: activeTab === 'content' ? '#0070f3' : 'transparent',
            color: activeTab === 'content' ? 'white' : '#333',
            cursor: 'pointer',
            borderBottom: activeTab === 'content' ? '2px solid #0070f3' : '2px solid transparent'
          }}
        >
          Контент
        </button>
        <button
          onClick={() => setActiveTab('catalog')}
          style={{
            padding: '0.5rem 1rem',
            border: 'none',
            background: activeTab === 'catalog' ? '#0070f3' : 'transparent',
            color: activeTab === 'catalog' ? 'white' : '#333',
            cursor: 'pointer',
            borderBottom: activeTab === 'catalog' ? '2px solid #0070f3' : '2px solid transparent'
          }}
        >
          Каталог
        </button>
        <button
          onClick={() => setActiveTab('settings')}
          style={{
            padding: '0.5rem 1rem',
            border: 'none',
            background: activeTab === 'settings' ? '#0070f3' : 'transparent',
            color: activeTab === 'settings' ? 'white' : '#333',
            cursor: 'pointer',
            borderBottom: activeTab === 'settings' ? '2px solid #0070f3' : '2px solid transparent'
          }}
        >
          Настройки
        </button>
      </div>

      <div style={{ marginTop: '2rem' }}>
        {activeTab === 'content' && (
          <div>
            <h2>Управление контентом</h2>
            <p style={{ marginTop: '1rem', color: '#666' }}>
              Здесь будет управление контентными страницами (SSG страницы).
              После изменения контента нужно будет пересобрать проект для обновления статических страниц.
            </p>
            <div style={{ marginTop: '1rem' }}>
              <button style={{ padding: '0.5rem 1rem', marginRight: '0.5rem', cursor: 'pointer' }}>
                Редактировать "О компании"
              </button>
              <button style={{ padding: '0.5rem 1rem', marginRight: '0.5rem', cursor: 'pointer' }}>
                Редактировать "Контакты"
              </button>
            </div>
          </div>
        )}

        {activeTab === 'catalog' && (
          <div>
            <h2>Управление каталогом</h2>
            <p style={{ marginTop: '1rem', color: '#666' }}>
              Здесь будет управление товарами в каталоге.
              Изменения применяются сразу, так как каталог работает на CSR.
            </p>
            <div style={{ marginTop: '1rem' }}>
              <button style={{ padding: '0.5rem 1rem', cursor: 'pointer' }}>
                + Добавить товар
              </button>
            </div>
          </div>
        )}

        {activeTab === 'settings' && (
          <div>
            <h2>Настройки сайта</h2>
            <p style={{ marginTop: '1rem', color: '#666' }}>
              Общие настройки сайта, SEO метаданные и т.д.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

