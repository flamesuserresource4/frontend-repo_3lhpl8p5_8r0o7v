export default function About() {
  return (
    <main className="pt-24">
      <section className="bg-blue-50 py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-blue-950">About Me</h1>
          <p className="mt-4 text-blue-900/80 leading-relaxed">
            I’m a certified financial advisor with over a decade of experience helping individuals and businesses make smarter financial decisions.
            My approach is clear, empathetic, and results-driven — blending practical budgeting systems with long-term wealth planning and tax strategy.
          </p>
          <div className="mt-8 grid md:grid-cols-2 gap-6">
            <img className="rounded-xl w-full h-72 object-cover" src="https://images.unsplash.com/photo-1551836022-4c4c79ecde51?q=80&w=1600&auto=format&fit=crop" alt="Advisor" />
            <div className="rounded-xl border border-blue-100 p-6 bg-white">
              <h3 className="font-semibold text-blue-950">Credentials</h3>
              <ul className="list-disc list-inside text-blue-900/80 mt-3 space-y-1 text-sm">
                <li>CFA Level II, CFP</li>
                <li>10+ years in personal and business finance</li>
                <li>Featured on finance podcasts and publications</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
