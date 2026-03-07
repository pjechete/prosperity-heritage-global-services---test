import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div>
          <h3>Prosperity Heritage Advisory</h3>
          <p>
            Prosperity Heritage Advisory helps leadership teams strengthen
            billing, collections, and financial controls so revenue does not
            just get recorded — it turns into predictable cash.
          </p>
        </div>

        <div className="footer-links">
          <Link href="/">Home</Link>
          <Link href="/services">Services</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </div>
    </footer>
  )
}
