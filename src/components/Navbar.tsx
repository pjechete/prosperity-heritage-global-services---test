import Link from "next/link"
import Image from "next/image"

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-inner">

        <Link href="/" className="brand">
          <Image
            src="/logo.png"
            alt="Prosperity Heritage Advisory"
            width={200}
            height={60}
            priority
          />
        </Link>

        <nav className="nav-links">
          <Link href="/services">Services</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </nav>

        <Link href="/contact" className="btn-primary">
          Book Consultation
        </Link>

      </div>
    </header>
  )
}
