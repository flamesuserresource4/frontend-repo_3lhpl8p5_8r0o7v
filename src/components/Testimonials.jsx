export default function Testimonials() {
  const items = [
    {
      quote: 'Clear, actionable advice that helped me pay off debt and start investing. Best decision I made this year.',
      name: 'Samantha R.',
    },
    {
      quote: 'Our small business finally has a clean financial plan. Revenue up, stress down.',
      name: 'Aditya P.',
    },
    {
      quote: 'Trustworthy and professional. The budgeting framework changed the way I manage money.',
      name: 'Michael B.',
    },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-blue-950">What Clients Say</h2>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {items.map((t) => (
            <div key={t.name} className="rounded-xl border border-blue-100 p-6 bg-white shadow-sm">
              <p className="text-blue-900/80">“{t.quote}”</p>
              <p className="mt-4 font-semibold text-blue-950">{t.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
