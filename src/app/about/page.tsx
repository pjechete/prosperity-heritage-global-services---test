import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function AboutPage() {
  return (
    <main>
      <Navbar />

      <section className="page-hero">
        <div className="container">
          <h1>About Prosperity Heritage Advisory</h1>
          <p>
            We support leadership teams in strengthening the systems that
            connect revenue generation to cash performance.
          </p>
        </div>
      </section>

      <section>
        <div className="container content-stack">
          <div className="card-gray">
            <p>
              As organizations grow, their revenue processes often become more
              complex. Sales teams move quickly, operations evolve, and finance
              teams work hard to keep up with invoicing, collections, and reporting.
            </p>
          </div>

          <div className="card-gray">
            <p>
              Without strong processes connecting these functions, revenue may
              look healthy while cash performance becomes inconsistent.
            </p>
          </div>

          <div className="card-gray">
            <p>
              Our work focuses on practical improvements in billing discipline,
              collections structure, process control, and leadership visibility.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
