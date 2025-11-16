export default function CTA() {
  return (
    <section id="book" className="py-16 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-3xl font-bold text-blue-950">Book Your Free Consultation</h2>
          <p className="text-blue-900/70 mt-2">Choose an online session or face-to-face meeting. Real-time availability, instant confirmation, and automated reminders.</p>
          <ul className="list-disc list-inside text-blue-900/70 mt-4 space-y-1">
            <li>Online: Zoom or Google Meet</li>
            <li>Face-to-face: Choose a location</li>
            <li>Automatic confirmation emails and reminders</li>
            <li>One-click booking</li>
          </ul>
        </div>
        <div className="rounded-xl border border-blue-100 bg-white overflow-hidden shadow">
          <iframe
            title="Booking"
            src="https://calendly.com/"
            className="w-full h-[560px]"
          />
        </div>
      </div>
    </section>
  )
}
