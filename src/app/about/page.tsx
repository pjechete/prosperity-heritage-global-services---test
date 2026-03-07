import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function AboutPage() {
  return (
    <main className="bg-white text-gray-900">

      <Navbar />

      <section className="py-20">

        <div className="max-w-4xl mx-auto px-6">

          <h1 className="text-4xl font-bold">
            About Prosperity Heritage Advisory
          </h1>

          <p className="mt-6 text-lg text-gray-600">
            Prosperity Heritage Advisory supports leadership teams in
            strengthening the systems that connect revenue generation
            to cash performance.
          </p>

          <div className="mt-10 space-y-6 text-gray-700 leading-8">

            <p>
              As organizations grow, their revenue processes often become
              increasingly complex. Sales teams move quickly, operations evolve,
              and finance teams work hard to keep up with billing and reporting.
            </p>

            <p>
              Without strong processes connecting these functions, revenue
              performance can become unpredictable.
            </p>

            <p>
              Our work focuses on strengthening billing discipline, improving
              collections processes, and building financial controls that help
              leadership teams gain confidence in their cash performance.
            </p>

          </div>

        </div>

      </section>

      <Footer />

    </main>
  )
}
