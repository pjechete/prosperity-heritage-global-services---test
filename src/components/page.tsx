import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'

export default function HomePage() {
  return (
    <main className="bg-white text-gray-900">

      <Navbar />

      {/* HERO SECTION */}

      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6 text-center">

          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            Turn Revenue Into Predictable Cash
          </h1>

          <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-600">
            Many companies generate strong revenue but still experience unstable
            cash performance. Prosperity Heritage Advisory helps leadership teams
            strengthen billing, collections, and financial controls so revenue
            consistently converts into reliable cash.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">

            <Link
              href="/contact"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700"
            >
              Book a Consultation
            </Link>

            <Link
              href="/how-we-work"
              className="border border-gray-300 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50"
            >
              Learn How We Work
            </Link>

          </div>
        </div>
      </section>

      {/* PROBLEM SECTION */}

      <section className="py-20 bg-gray-50">

        <div className="max-w-5xl mx-auto px-6 text-center">

          <h2 className="text-3xl font-bold">
            Revenue Is Growing. Cash Still Feels Tight.
          </h2>

          <p className="mt-6 text-gray-600 max-w-3xl mx-auto">
            This is a common pattern in growing organizations. Sales increase.
            Operations scale. Finance teams work hard to keep up. But somewhere
            between contracts, invoicing, collections, and reporting, cash gets delayed.
          </p>

          <div className="mt-10 grid md:grid-cols-2 gap-6 text-left">

            <div className="bg-white p-6 rounded-xl shadow-sm">
              Late or inconsistent invoicing
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              Unclear payment terms
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              Weak collections processes
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              Revenue leakage and limited visibility
            </div>

          </div>

          <p className="mt-8 font-semibold text-gray-800">
            Revenue may look healthy, but cash performance becomes unpredictable.
          </p>

        </div>

      </section>

      {/* SERVICES SECTION */}

      <section className="py-20">

        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-3xl font-bold text-center">
            Our Advisory Focus
          </h2>

          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="text-lg font-semibold">Revenue Control</h3>
              <p className="mt-3 text-gray-600">
                Ensuring revenue is accurately billed, tracked, and collected.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="text-lg font-semibold">Billing Optimization</h3>
              <p className="mt-3 text-gray-600">
                Improving invoicing structure, timing, and accuracy.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="text-lg font-semibold">Collections Performance</h3>
              <p className="mt-3 text-gray-600">
                Building structured processes that reduce payment delays.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="text-lg font-semibold">Financial Controls</h3>
              <p className="mt-3 text-gray-600">
                Strengthening systems that protect revenue integrity.
              </p>
            </div>

          </div>

          <div className="text-center mt-10">
            <Link
              href="/services"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold"
            >
              Explore Services
            </Link>
          </div>

        </div>

      </section>

      {/* PROCESS SECTION */}

      <section className="py-20 bg-gray-50">

        <div className="max-w-6xl mx-auto px-6 text-center">

          <h2 className="text-3xl font-bold">How We Work</h2>

          <div className="mt-12 grid md:grid-cols-4 gap-8">

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="font-semibold">1. Diagnose</h3>
              <p className="mt-2 text-gray-600">
                Assess the revenue-to-cash process.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="font-semibold">2. Identify Gaps</h3>
              <p className="mt-2 text-gray-600">
                Locate operational breakdowns.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="font-semibold">3. Improve Systems</h3>
              <p className="mt-2 text-gray-600">
                Strengthen billing and collections processes.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="font-semibold">4. Stabilize Cash</h3>
              <p className="mt-2 text-gray-600">
                Improve reporting and leadership visibility.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* CTA */}

      <section className="py-24 bg-blue-600 text-white text-center">

        <div className="max-w-4xl mx-auto px-6">

          <h2 className="text-3xl md:text-4xl font-bold">
            Revenue Should Turn Into Cash. Consistently.
          </h2>

          <p className="mt-6 text-lg text-blue-50">
            If your company is generating revenue but struggling with
            inconsistent cash performance, we can help strengthen the
            systems behind it.
          </p>

          <div className="mt-8">
            <Link
              href="/contact"
              className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold"
            >
              Book a Consultation
            </Link>
          </div>

        </div>

      </section>

      <Footer />

    </main>
  )
}
