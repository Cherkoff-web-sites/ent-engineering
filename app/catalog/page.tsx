'use client'

import { useState, useEffect, useMemo } from 'react'
import ProductList from '@/app/catalog/components/ProductList'
import Filters from '@/app/catalog/components/Filters'
import { mockProducts } from '@/lib/api/mockData'
import { Product, ProductFilters } from '@/types/product'

// CSR страница - клиентский рендеринг для каталога
// 'use client' указывает, что это клиентский компонент
export default function CatalogPage() {
  const [products, setProducts] = useState<Product[]>([])
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)
  const [filters, setFilters] = useState<ProductFilters>({})

  // Имитация загрузки данных (в реальном проекте - API запрос)
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setProducts(mockProducts)
      setFilteredProducts(mockProducts)
      setLoading(false)
    }, 500)
  }, [])

  // Получаем уникальные категории
  const categories = useMemo(() => {
    const uniqueCategories = new Set(products.map(p => p.category))
    return Array.from(uniqueCategories)
  }, [products])

  // Обработка фильтрации
  const handleFilter = (newFilters: ProductFilters) => {
    setFilters(newFilters)
    
    let filtered = [...products]

    if (newFilters.search) {
      const searchLower = newFilters.search.toLowerCase()
      filtered = filtered.filter(p =>
        p.name.toLowerCase().includes(searchLower) ||
        p.description.toLowerCase().includes(searchLower)
      )
    }

    if (newFilters.category) {
      filtered = filtered.filter(p => p.category === newFilters.category)
    }

    if (newFilters.minPrice !== undefined) {
      filtered = filtered.filter(p => p.price >= newFilters.minPrice!)
    }

    if (newFilters.maxPrice !== undefined) {
      filtered = filtered.filter(p => p.price <= newFilters.maxPrice!)
    }

    setFilteredProducts(filtered)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Каталог товаров</h1>
      <p className="text-lg mb-6 text-gray-600">
        Это React-приложение (CSR) внутри Next.js. Фильтры, поиск, интерактивные компоненты.
      </p>
      
      <div className="flex flex-col lg:flex-row gap-8">
        <aside className="lg:w-1/4">
          <Filters onFilter={handleFilter} categories={categories} />
        </aside>
        
        <main className="lg:w-3/4">
          {loading ? (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">Загрузка...</p>
            </div>
          ) : (
            <>
              <div className="mb-4 text-sm text-gray-600">
                Найдено товаров: {filteredProducts.length}
              </div>
              <ProductList products={filteredProducts} />
            </>
          )}
        </main>
      </div>
    </div>
  )
}

