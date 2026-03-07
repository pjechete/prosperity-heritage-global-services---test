import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          
          <div>
            <h3 className="text-lg font-semibold text-gray-900">
              Prosperity Heritage Advisory
            </h3>

            <p className="mt-2 text-sm text-gray-600 max-w-xl">
              Helping leadership teams strengthen billing, collections, and financial controls
              so revenue consistently converts into predictable cash.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 text-sm text-gray-600">
            <Link href="/">Home</Link>
            <Link href="/services">Services</Link>
            <Link href="/how-we-work">How We Work</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
          </div>

        </div>
      </div>
    </footer>
  )
}
