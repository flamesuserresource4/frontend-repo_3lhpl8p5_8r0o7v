import { useState } from 'react'

export default function ContactPage() {
  const [status, setStatus] = useState(null)
  const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  const onSubmit = async (e) => {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const payload = Object.fromEntries(form.entries())
    setStatus('sending')
    try {
      const res = await fetch(`${baseUrl}/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })
      if (!res.ok) throw new Error('Failed to send')
      setStatus('sent')
      e.currentTarget.reset()
    } catch (err) {
      setStatus('error')
    }
  }

  return (
    <main className="pt-24">
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-blue-950">Contact</h1>
          <p className="mt-3 text-blue-900/80">Send a message or reach me on WhatsApp for quick responses.</p>

          <div className="mt-8 grid md:grid-cols-2 gap-8">
            <form onSubmit={onSubmit} className="space-y-3">
              <input name="name" required placeholder="Full name" className="w-full border border-blue-200 rounded-md px-3 py-2" />
              <input name="email" type="email" required placeholder="Email" className="w-full border border-blue-200 rounded-md px-3 py-2" />
              <input name="phone" placeholder="Phone (optional)" className="w-full border border-blue-200 rounded-md px-3 py-2" />
              <select name="preferred_mode" className="w-full border border-blue-200 rounded-md px-3 py-2">
                <option value="online">Online Session</option>
                <option value="f2f">Face-to-Face Meeting</option>
              </select>
              <textarea name="message" required placeholder="Your message" rows="5" className="w-full border border-blue-200 rounded-md px-3 py-2" />
              <button className="px-6 py-3 rounded-md bg-blue-900 text-white font-semibold" disabled={status==='sending'}>
                {status === 'sending' ? 'Sending...' : 'Send Message'}
              </button>
              {status === 'sent' && <p className="text-green-700">Thanks! I will get back to you shortly.</p>}
              {status === 'error' && <p className="text-red-600">Something went wrong. Please try again.</p>}
            </form>

            <div className="rounded-xl border border-blue-100 p-6 bg-white">
              <h3 className="font-semibold text-blue-950">WhatsApp</h3>
              <p className="text-blue-900/80 mt-2 text-sm">Prefer WhatsApp? Tap below:</p>
              <a
                href="https://wa.me/1234567890"
                target="_blank"
                rel="noreferrer"
                className="inline-flex mt-4 px-4 py-2 rounded-md bg-green-600 text-white font-semibold"
              >
                Chat on WhatsApp
              </a>

              <div className="mt-8">
                <h3 className="font-semibold text-blue-950">Book a Consultation</h3>
                <div className="mt-3 rounded-md overflow-hidden border border-blue-100">
                  <iframe title="Booking" src="https://calendly.com/" className="w-full h-[520px] bg-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
