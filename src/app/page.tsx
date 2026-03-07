import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function HomePage() {
  return (
    <main>
      <Navbar />

      <section className="hero">
        <div className="container">
          <h1>Turn Revenue Into Predictable Cash</h1>
          <p>
            Many companies generate strong revenue but still experience unstable
            cash performance. Prosperity Heritage Advisory helps leadership
            teams strengthen billing, collections, and financial controls so
            revenue consistently converts into reliable cash.
          </p>

          <div className="button-row">
            <Link href="/contact" className="btn-primary">
              Book a Consultation
            </Link>
            <Link href="/services" className="btn-secondary">
              Explore Services
            </Link>
          </div>
        </div>
      </section>

      <section className="section section-light">
        <div className="container">
          <h2 className="section-title">
            Revenue Is Growing. Cash Still Feels Tight.
          </h2>
          <p className="section-subtitle">
            This is a common pattern in growing organizations. Sales increase.
            Operations scale. Finance teams work hard to keep up. But somewhere
            between contracts, invoicing, collections, and reporting, cash gets
            delayed.
          </p>

          <div className="grid-2">
            <div className="card">Late or inconsistent invoicing</div>
            <div className="card">Unclear payment terms</div>
            <div className="card">Weak collections processes</div>
            <div className="card">Revenue leakage and limited visibility</div>
          </div>

          <div className="center-note">
            Revenue may look healthy, but cash performance becomes unpredictable.
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title">Our Advisory Focus</h2>
          <p className="section-subtitle">
            We help leadership teams improve the systems and disciplines behind
            invoicing, collections, and revenue integrity.
          </p>

          <div className="grid-4">
            <div className="card-gray">
              <h3>Revenue Control</h3>
              <p>
                Strengthening the processes that ensure revenue is billed,
                tracked, and protected.
              </p>
            </div>

            <div className="card-gray">
              <h3>Billing Optimization</h3>
              <p>
                Improving invoicing timing, structure, and operational accuracy.
              </p>
            </div>

            <div className="card-gray">
              <h3>Collections Performance</h3>
              <p>
                Building disciplined follow-up processes that reduce delays in
                payment.
              </p>
            </div>

            <div className="card-gray">
              <h3>Financial Controls</h3>
              <p>
                Strengthening the control environment that supports reliable cash
                conversion.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-light">
        <div className="container">
          <h2 className="section-title">How We Work</h2>

          <div className="grid-4">
            <div className="card">
              <h3>1. Diagnose</h3>
              <p>We assess the current revenue-to-cash process.</p>
            </div>

            <div className="card">
              <h3>2. Identify Gaps</h3>
              <p>We pinpoint delays, weak controls, and process breakdowns.</p>
            </div>

            <div className="card">
              <h3>3. Improve Systems</h3>
              <p>We strengthen billing, collections, and reporting discipline.</p>
            </div>

            <div className="card">
              <h3>4. Stabilize Operations</h3>
              <p>We help leadership build better cash reliability over time.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-band">
        <div className="container">
          <h2 className="section-title">Revenue Should Turn Into Cash. Consistently.</h2>
          <p>
            If your company is generating revenue but struggling with billing
            delays, collections pressure, or weak cash reliability, we can help
            strengthen the systems behind it.
          </p>

          <div className="button-row">
            <Link href="/contact" className="btn-secondary">
              Book a Consultation
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
