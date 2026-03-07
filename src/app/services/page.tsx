import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function ServicesPage() {
  return (
    <main>
      <Navbar />

      <section className="page-hero">
        <div className="container">
          <h1>Advisory Services</h1>
          <p>
            Our services are designed for companies that need stronger revenue
            discipline, better operational follow-through, and more consistent
            cash conversion across billing, collections, and financial controls.
          </p>
        </div>
      </section>

      <section>
        <div className="container content-stack">
          <div className="card-highlight">
            <h3>Revenue Control Review</h3>
            <p>
              We assess the workflows, handoffs, and control points that support
              revenue quality — from contract execution through invoicing and follow-up.
            </p>
          </div>

          <div className="card-gray">
            <h3>Billing Process Optimization</h3>
            <p>
              We help improve invoice timing, accuracy, supporting documentation,
              operational triggers, and ownership so billing becomes more reliable
              and less dependent on manual recovery.
            </p>
          </div>

          <div className="card-gray">
            <h3>Collections Performance Improvement</h3>
            <p>
              We help create more structured follow-up, better aging visibility,
              clearer accountability, and stronger collections discipline so payments
              do not drift unnecessarily.
            </p>
          </div>

          <div className="card-gray">
            <h3>Revenue Operations Alignment</h3>
            <p>
              We examine the connection between sales, operations, and finance to
              reduce breakdowns in handoffs that ultimately delay invoicing or weaken cash conversion.
            </p>
          </div>

          <div className="card-gray">
            <h3>Financial Controls & Reporting Visibility</h3>
            <p>
              We strengthen reconciliations, reporting clarity, and operational
              visibility so leadership can better understand where revenue is slowing before it becomes a bigger cash issue.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
