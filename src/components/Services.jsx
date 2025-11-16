export default function Services() {
  const services = [
    { title: 'Personal Finance Coaching', desc: 'Clarity and accountability to master your money habits.' },
    { title: 'Wealth Planning', desc: 'Long-term strategies tailored to your goals and risk profile.' },
    { title: 'Budgeting Support', desc: 'Smart frameworks to optimize cash flow and savings.' },
    { title: 'Business Financial Planning', desc: 'Financial roadmaps for founders and SMEs to scale sustainably.' },
    { title: 'Tax Advisory', desc: 'Plan ahead to legally minimize taxes and keep more of what you earn.' },
    { title: 'Debt Management', desc: 'Strategic repayment plans to reduce debt faster and stress-free.' },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-blue-950">Services</h2>
        <p className="text-blue-900/70 mt-2">Premium, expert-led financial guidance designed around you.</p>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div key={s.title} className="rounded-xl border border-blue-100 p-6 hover:shadow-md transition">
              <h3 className="font-semibold text-blue-950">{s.title}</h3>
              <p className="text-blue-900/70 mt-2 text-sm">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
