import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function ContactPage() {
  return (
    <main className="bg-white text-gray-900">

      <Navbar />

      <section className="py-20">

        <div className="max-w-3xl mx-auto px-6">

          <h1 className="text-4xl font-bold">
            Book a Consultation
          </h1>

          <p className="mt-6 text-lg text-gray-600">
            Let’s discuss how we can help strengthen your
            revenue-to-cash systems.
          </p>

          <div className="mt-10 bg-gray-50 p-8 rounded-xl">

            <form className="space-y-6">

              <input
                type="text"
                placeholder="Name"
                className="w-full border rounded-lg px-4 py-3"
              />

              <input
                type="email"
                placeholder="Email"
                className="w-full border rounded-lg px-4 py-3"
              />

              <input
                type="text"
                placeholder="Company"
                className="w-full border rounded-lg px-4 py-3"
              />

              <textarea
                placeholder="Tell us about your billing, collections, or revenue challenges."
                className="w-full border rounded-lg px-4 py-3 min-h-[140px]"
              />

              <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold"
              >
                Submit Inquiry
              </button>

            </form>

          </div>

        </div>

      </section>

      <Footer />

    </main>
  )
}
