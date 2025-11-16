export default function ServicesPage() {
  const services = [
    { title: 'Personal Finance Coaching', desc: '1:1 coaching to build lasting money habits.' },
    { title: 'Wealth Planning', desc: 'Comprehensive, goal-based wealth plans.' },
    { title: 'Budgeting Support', desc: 'Cashflow optimization and system setup.' },
    { title: 'Business Financial Planning', desc: 'Financial models and dashboards for SMEs.' },
    { title: 'Tax Advisory', desc: 'Proactive planning to legally reduce taxes.' },
    { title: 'Debt Management', desc: 'Strategic repayment and consolidation plans.' },
  ]

  return (
    <main className="pt-24">
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-blue-950">Services</h1>
          <p className="mt-3 text-blue-900/80">Premium support across personal and business finance.</p>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <div key={s.title} className="rounded-xl border border-blue-100 p-6 bg-white hover:shadow transition">
                <h3 className="font-semibold text-blue-950">{s.title}</h3>
                <p className="text-blue-900/70 mt-2 text-sm">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <a href="/contact" className="px-6 py-3 rounded-md bg-blue-900 text-white font-semibold">Request a Proposal</a>
          </div>
        </div>
      </section>
    </main>
  )
}
