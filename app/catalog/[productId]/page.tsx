import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { mockProducts } from '@/lib/api/mockData'
import { formatPrice } from '@/lib/utils'
import Button from '@/components/ui/Button'

// Генерируем статичные пути для всех товаров
export async function generateStaticParams() {
  return mockProducts.map(product => ({
    productId: product.id.toString(),
  }))
}

// Генерируем метаданные для SEO
export async function generateMetadata({ 
  params 
}: { 
  params: { productId: string } 
}): Promise<Metadata> {
  const product = mockProducts.find(p => p.id.toString() === params.productId)
  
  if (!product) {
    return {
      title: 'Товар не найден | ENT Engineering',
    }
  }
  
  return {
    title: `${product.name} | Каталог - ENT Engineering`,
    description: product.description,
  }
}

export default async function ProductPage({ 
  params 
}: { 
  params: { productId: string } 
}) {
  const product = mockProducts.find(p => p.id.toString() === params.productId)
  
  if (!product) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-4">
        <Link 
          href="/catalog" 
          className="text-blue-600 hover:text-blue-700 text-sm"
        >
          ← Вернуться в каталог
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        <div>
          <div className="bg-gray-100 h-96 rounded-lg flex items-center justify-center mb-4">
            {product.image ? (
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover rounded-lg"
              />
            ) : (
              <span className="text-gray-400 text-lg">Изображение товара</span>
            )}
          </div>
        </div>
        
        <div>
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <p className="text-gray-600 mb-4 text-lg leading-relaxed">
            {product.description}
          </p>
          
          <div className="mb-4">
            <span className="text-sm text-gray-500">Категория:</span>
            <span className="ml-2 text-blue-600 font-medium">{product.category}</span>
          </div>
          
          <div className="text-3xl font-bold text-blue-600 mb-6">
            {formatPrice(product.price)}
          </div>
          
          {/* Кнопка добавления в корзину (можно сделать клиентским компонентом) */}
          <Button size="lg" className="w-full mb-4">
            Добавить в корзину
          </Button>
          
          <div className="bg-blue-50 p-4 rounded-lg">
            <p className="text-sm text-gray-700">
              <strong>Гарантия:</strong> На все товары предоставляется гарантия производителя
            </p>
          </div>
        </div>
      </div>
      
      {/* Дополнительная информация */}
      {product.specifications && product.specifications.length > 0 && (
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4">Характеристики</h2>
          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
            <table className="w-full">
              <tbody>
                {product.specifications.map((spec, index) => (
                  <tr 
                    key={index} 
                    className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}
                  >
                    <td className="px-6 py-4 font-medium text-gray-900 border-b border-gray-200">
                      {spec.name}
                    </td>
                    <td className="px-6 py-4 text-gray-700 border-b border-gray-200">
                      {spec.value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  )
}

