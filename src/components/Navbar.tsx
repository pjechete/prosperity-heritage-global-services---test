import Link from 'next/link'

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-inner">
        <Link href="/" className="brand-wrap">
          <span className="brand">Prosperity Heritage Advisory</span>
          <span className="brand-sub">Revenue Control & Cash Stabilization</span>
        </Link>

        <nav className="nav-links">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>

        <Link href="/contact" className="btn-primary">
          Book Consultation
        </Link>
      </div>
    </header>
  )
}
