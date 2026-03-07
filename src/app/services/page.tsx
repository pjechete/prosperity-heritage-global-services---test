import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function ServicesPage() {
  return (
    <main>
      <Navbar />

      <section className="page-hero">
        <div className="container">
          <h1>Services</h1>
          <p>
            Prosperity Heritage Advisory helps companies strengthen the systems
            that turn revenue into predictable cash.
          </p>
        </div>
      </section>

      <section>
        <div className="container content-stack">
          <div className="card-gray">
            <h3>Revenue Control</h3>
            <p>
              Review of revenue workflows, billing discipline, contract-to-invoice
              handoffs, and revenue leakage risks.
            </p>
          </div>

          <div className="card-gray">
            <h3>Billing & Collections Optimization</h3>
            <p>
              Improvement of invoicing structure, payment terms, collection
              follow-up, and aging reduction strategy.
            </p>
          </div>

          <div className="card-gray">
            <h3>Revenue Operations Alignment</h3>
            <p>
              Better connection between sales, operations, and finance to reduce
              handoff errors and improve execution.
            </p>
          </div>

          <div className="card-gray">
            <h3>Financial Controls & Revenue Integrity</h3>
            <p>
              Strengthening reporting, reconciliations, and controls that support
              reliable revenue tracking and protection.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
