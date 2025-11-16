import Podcast from '../components/Podcast'

export default function PodcastsPage() {
  return (
    <main className="pt-24">
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-blue-950">Podcasts</h1>
          <p className="mt-3 text-blue-900/80">Weekly insights for smarter money decisions.</p>
        </div>
        <Podcast />
      </section>
    </main>
  )
}
