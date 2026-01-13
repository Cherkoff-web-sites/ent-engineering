'use client'

import { useCart } from '@/contexts/CartContext'
import Button from '@/components/ui/Button'
import { useRouter } from 'next/navigation'

interface AddToCartButtonProps {
  product: {
    id: string
    name: string
    model?: string
    price: number
    image: string
    href: string
  }
}

export default function AddToCartButton({ product }: AddToCartButtonProps) {
  const { addItem } = useCart()
  const router = useRouter()

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name: product.name,
      model: product.model || '',
      price: product.price,
      image: product.image,
      href: product.href,
    })
    // Можно добавить уведомление или редирект
    // router.push('/cart')
  }

  if (product.price === 0) {
    return (
      <Button variant="outline" size="lg" className="w-full sm:w-auto flex-1">
        Получить прайс-лист
      </Button>
    )
  }

  return (
    <Button
      variant="outline"
      size="lg"
      className="w-full sm:w-auto flex-1"
      onClick={handleAddToCart}
    >
      Добавить в корзину
    </Button>
  )
}
