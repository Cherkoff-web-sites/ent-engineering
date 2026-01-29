'use client'

import { useState } from 'react'
import Button from '@/components/ui/Button'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    agreement: true,
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked
      setFormData(prev => ({ ...prev, [name]: checked }))
    } else {
      setFormData(prev => ({ ...prev, [name]: value }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Здесь будет логика отправки формы
    console.log('Form data:', formData)
    
    // Имитация отправки
    setTimeout(() => {
      setIsSubmitting(false)
      alert('Заявка отправлена! Мы свяжемся с вами в течение рабочего дня.')
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
        agreement: true,
      })
    }, 1000)
  }

  return (
    <section
      id="contact-form"
      className="relative min-h-[600px] flex items-center overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: 'url(/images/bg_callback.webp)',
      }}
    >
      
      {/* Форма слева */}
      <div className="container mx-auto px-4 py-8 sm:py-16 relative z-10 w-full">
        <div className="max-w-2xl">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-3 sm:mb-4 text-[#FE924A]">
            ОСТАВИТЬ ЗАЯВКУ
          </h2>
          <p className="text-white/90 mb-6 sm:mb-8 text-sm sm:text-base lg:text-lg">
            Заполните простую форму и мы свяжемся с вами в течении рабочего дня
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* ФИО */}
            <div>
              <label htmlFor="name" className="block text-white mb-2 text-sm">
                ФИО<span className="text-[#FE924A]">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-[#2A2529] border border-[#FE924A] rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#FE924A]"
                placeholder="Введите ваше ФИО"
              />
            </div>

            {/* E-mail */}
            <div>
              <label htmlFor="email" className="block text-white mb-2 text-sm">
                E-mail<span className="text-[#FE924A]">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-[#2A2529] border border-[#FE924A] rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#FE924A]"
                placeholder="example@mail.com"
              />
            </div>

            {/* Телефон */}
            <div>
              <label htmlFor="phone" className="block text-white mb-2 text-sm">
                Телефон<span className="text-[#FE924A]">*</span>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-[#2A2529] border border-[#FE924A] rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#FE924A]"
                placeholder="+7(999)000-0000"
              />
            </div>

            {/* Сообщение */}
            <div>
              <label htmlFor="message" className="block text-white mb-2 text-sm">
                Сообщение
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-3 bg-[#2A2529] border border-[#FE924A] rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#FE924A] resize-none"
                placeholder="Ваше сообщение..."
              />
            </div>

            {/* Чекбокс согласия */}
            <div className="flex items-start gap-3">
              <input
                type="checkbox"
                id="agreement"
                name="agreement"
                checked={formData.agreement}
                onChange={handleChange}
                required
                className="mt-1 w-5 h-5 rounded border-[#FE924A] bg-[#2A2529] text-[#FE924A] focus:ring-[#FE924A] focus:ring-2"
              />
              <label htmlFor="agreement" className="text-white text-sm">
                Я согласен(на) на обработку моих персональных данных в соответствии с{' '}
                <a href="/privacy" className="text-[#FE924A] hover:underline">
                  политикой конфиденциальности
                </a>
              </label>
            </div>

            {/* Кнопка отправки */}
            <Button
              type="submit"
              size="lg"
              disabled={isSubmitting}
              className="w-full sm:w-auto"
            >
              {isSubmitting ? 'Отправка...' : 'Отправить заявку'}
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}
