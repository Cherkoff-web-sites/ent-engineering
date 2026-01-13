import Link from 'next/link'
import Navigation from './Navigation'

export default function Header() {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-2xl font-bold text-blue-600 hover:text-blue-700">
            ENT Engineering
          </Link>
          <Navigation />
        </div>
      </div>
    </header>
  )
}

