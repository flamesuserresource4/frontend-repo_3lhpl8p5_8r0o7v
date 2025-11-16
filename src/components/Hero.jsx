export default function Hero() {
  return (
    <section className="pt-24 bg-gradient-to-b from-blue-950 via-blue-900 to-blue-800 text-white">
      <div className="max-w-6xl mx-auto px-4 py-20 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Your Trusted Guide to Smarter Financial Decisions
          </h1>
          <p className="mt-6 text-blue-100 text-lg">
            Personalized financial consulting to help you build wealth with confidence — planning, budgeting, investments, and business advisory designed for real life.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#book" className="px-6 py-3 rounded-md bg-yellow-500 text-blue-950 font-semibold shadow hover:bg-yellow-400">
              Book Your Free Consultation
            </a>
            <a href="/podcasts" className="px-6 py-3 rounded-md border border-white/20 hover:bg-white/10">
              Listen to the Podcast
            </a>
          </div>
        </div>
        <div className="relative">
          <div className="rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/10">
            <img
              src="https://images.unsplash.com/photo-1553729459-efe14ef6055d?q=80&w=1600&auto=format&fit=crop"
              alt="Financial advisory illustration"
              className="w-full h-[360px] object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 w-24 h-24 rounded-full bg-yellow-500 blur-2xl opacity-30" />
          <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-white blur-2xl opacity-10" />
        </div>
      </div>
    </section>
  )
}
