import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function HomePage() {
  return (
    <main>
      <Navbar />

      <section className="hero">
  <div className="hero-watermark"></div>

  <div className="container hero-content">

    <h1>
      Revenue growth should lead to stronger
      cash performance — not more uncertainty.
    </h1>

    <p>
      Prosperity Heritage Advisory helps companies strengthen
      billing discipline, collections performance, and revenue
      control so revenue consistently converts into reliable cash.
    </p>

    <div className="button-row">
      <Link href="/contact" className="btn-primary">
        Schedule Consultation
      </Link>

      <Link href="/services" className="btn-secondary">
        View Advisory Services
      </Link>
    </div>

  </div>
</section>

            <div className="hero-note">
              Ideal for growth-stage and operationally complex businesses that need stronger revenue discipline.
            </div>
          </div>

          <div className="hero-card">
            <h3>Common executive concerns we help address</h3>

            <div className="metric-list">
              <div className="metric">
                <strong>Revenue looks strong, but cash remains inconsistent</strong>
                <span>Leadership sees sales performance, but cash conversion still feels unreliable.</span>
              </div>

              <div className="metric">
                <strong>Billing delays are slowing collections</strong>
                <span>Invoices are not always timely, accurate, or connected to operational triggers.</span>
              </div>

              <div className="metric">
                <strong>Collections lack structure and accountability</strong>
                <span>Follow-up is inconsistent, aging grows quietly, and visibility is limited.</span>
              </div>

              <div className="metric">
                <strong>Finance is carrying problems created upstream</strong>
                <span>Issues in contracts, handoffs, and execution eventually show up as cash pressure.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="credibility-band">
        <div className="container credibility-grid">
          <div className="credibility-item">
            <strong>Executive-Level Focus</strong>
            <span>Designed for leadership teams that need practical, decision-ready improvements.</span>
          </div>
          <div className="credibility-item">
            <strong>Operational + Financial Lens</strong>
            <span>We look across sales, delivery, billing, collections, and controls.</span>
          </div>
          <div className="credibility-item">
            <strong>Implementation-Oriented</strong>
            <span>Not just recommendations — clearer workflows, stronger discipline, better visibility.</span>
          </div>
          <div className="credibility-item">
            <strong>Cash Reliability Mindset</strong>
            <span>Focused on helping revenue convert into dependable financial performance.</span>
          </div>
        </div>
      </section>

      <section className="section section-light">
        <div className="container">
          <h2 className="section-title">The problem is usually not revenue alone. It is what happens after the sale.</h2>

          <p className="section-subtitle">
            Many businesses do not have a true revenue problem. They have a
            revenue execution problem. The friction often sits between contract
            terms, operational handoffs, invoice timing, collections follow-up,
            and the financial controls needed to protect consistency.
          </p>

          <div className="problem-list">
            <div className="problem-item">Invoices go out late, inconsistently, or with avoidable errors.</div>
            <div className="problem-item">Payment terms do not match how the business actually operates.</div>
            <div className="problem-item">Collections are reactive instead of structured and managed.</div>
            <div className="problem-item">Revenue leakage builds quietly through weak handoffs and poor visibility.</div>
            <div className="problem-item">Leadership gets revenue reports but not enough clarity on what is slowing cash conversion.</div>
          </div>

          <div className="center-note">
            When these issues compound, revenue may look healthy while cash performance becomes unstable.
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title">A sharper advisory focus for companies that need revenue discipline</h2>

          <p className="section-subtitle">
            Our work is centered on strengthening the processes and controls that
            protect revenue quality and improve the consistency of cash outcomes.
          </p>

          <div className="grid-4">
            <div className="card-highlight">
              <h3>Revenue Control</h3>
              <p>
                Strengthening the workflows that ensure revenue is properly billed,
                tracked, supported, and protected.
              </p>
            </div>

            <div className="card">
              <h3>Billing Optimization</h3>
              <p>
                Improving invoice timing, structure, accuracy, and process ownership
                to reduce unnecessary payment delays.
              </p>
            </div>

            <div className="card">
              <h3>Collections Performance</h3>
              <p>
                Building disciplined follow-up processes, accountability, and aging
                visibility so collections become more consistent.
              </p>
            </div>

            <div className="card">
              <h3>Financial Controls & Visibility</h3>
              <p>
                Strengthening reconciliation, reporting, and control structures that
                support better revenue-to-cash decision making.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-light">
        <div className="container">
          <h2 className="section-title">How we work</h2>

          <p className="section-subtitle">
            We help leadership teams move from scattered symptoms to clearer
            root causes, stronger process discipline, and more reliable operating performance.
          </p>

          <div className="grid-4">
            <div className="card">
              <div className="process-step-number">1</div>
              <h3>Diagnose</h3>
              <p>
                We assess the current revenue-to-cash flow, including billing,
                collections, handoffs, and reporting.
              </p>
            </div>

            <div className="card">
              <div className="process-step-number">2</div>
              <h3>Identify Gaps</h3>
              <p>
                We pinpoint delays, leakage risks, weak ownership, and process
                inconsistencies affecting cash reliability.
              </p>
            </div>

            <div className="card">
              <div className="process-step-number">3</div>
              <h3>Strengthen Systems</h3>
              <p>
                We help improve workflows, controls, accountability, and revenue
                discipline where they matter most.
              </p>
            </div>

            <div className="card">
              <div className="process-step-number">4</div>
              <h3>Support Stability</h3>
              <p>
                We help leadership gain clearer visibility and a more sustainable
                operating rhythm around cash conversion.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-band">
        <div className="container">
          <h2 className="section-title">If revenue is growing but cash still feels unpredictable, it is time to tighten the system behind it.</h2>

          <p>
            Prosperity Heritage Advisory helps leadership teams improve the
            billing, collections, and financial-control disciplines that turn
            revenue into more reliable cash performance.
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
