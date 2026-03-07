import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function ServicesPage() {
  return (
    <main className="bg-white text-gray-900">

      <Navbar />

      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6">

          <h1 className="text-4xl font-bold">
            Revenue Control & Cash Stabilization
          </h1>

          <p className="mt-6 text-lg text-gray-600 max-w-3xl">
            Prosperity Heritage Advisory works with leadership teams to
            strengthen the systems that ensure revenue consistently converts
            into predictable cash.
          </p>

        </div>
      </section>

      <section className="pb-20">
        <div className="max-w-5xl mx-auto px-6 grid gap-8">

          <div className="bg-gray-50 p-8 rounded-xl">
            <h2 className="text-2xl font-semibold">Revenue Control</h2>
            <p className="mt-3 text-gray-600">
              Protecting the integrity of revenue processes.
            </p>
          </div>

          <div className="bg-gray-50 p-8 rounded-xl">
            <h2 className="text-2xl font-semibold">
              Billing & Collections Optimization
            </h2>
            <p className="mt-3 text-gray-600">
              Improving invoicing accuracy, payment terms, and collections
              performance.
            </p>
          </div>

          <div className="bg-gray-50 p-8 rounded-xl">
            <h2 className="text-2xl font-semibold">
              Revenue Operations Alignment
            </h2>
            <p className="mt-3 text-gray-600">
              Connecting sales, operations, and finance processes.
            </p>
          </div>

          <div className="bg-gray-50 p-8 rounded-xl">
            <h2 className="text-2xl font-semibold">
              Financial Controls & Revenue Integrity
            </h2>
            <p className="mt-3 text-gray-600">
              Strengthening the financial systems supporting revenue tracking.
            </p>
          </div>

        </div>
      </section>

      <Footer />

    </main>
  )
}
