import { useEffect, useState } from 'react'

export default function Podcast() {
  const [episodes, setEpisodes] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  useEffect(() => {
    const fetchEpisodes = async () => {
      try {
        const res = await fetch(`${baseUrl}/episodes`)
        if (!res.ok) throw new Error('Failed to load episodes')
        const data = await res.json()
        setEpisodes(data)
      } catch (e) {
        setError(e.message)
      } finally {
        setLoading(false)
      }
    }
    fetchEpisodes()
  }, [])

  return (
    <section className="py-16 bg-blue-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-bold text-blue-950">Weekly Podcast</h2>
            <p className="text-blue-900/70 mt-2">Insights on markets, money, and mindset.</p>
          </div>
          <a
            href="https://calendly.com/" target="_blank" rel="noreferrer"
            className="hidden sm:inline-flex px-4 py-2 rounded-md bg-blue-900 text-white font-semibold hover:opacity-90"
          >
            Book a Call
          </a>
        </div>

        <div className="mt-8">
          {loading && <p className="text-blue-900/70">Loading...</p>}
          {error && <p className="text-red-600">{error}</p>}
          {!loading && !error && (
            <div className="grid md:grid-cols-2 gap-6">
              {episodes.length === 0 && (
                <div className="rounded-lg border border-blue-100 p-6 bg-white">
                  <p className="text-blue-900/70">No episodes yet. Add your first one via the API.</p>
                </div>
              )}
              {episodes.map((ep) => (
                <div key={ep.id} className="rounded-lg border border-blue-100 p-6 bg-white">
                  <div className="flex gap-4">
                    {ep.cover_image_url ? (
                      <img src={ep.cover_image_url} alt={ep.title} className="w-24 h-24 object-cover rounded" />
                    ) : (
                      <div className="w-24 h-24 bg-blue-100 rounded" />
                    )}
                    <div className="flex-1">
                      <h3 className="font-semibold text-blue-950">{ep.title}</h3>
                      {ep.published_at && (
                        <p className="text-xs text-blue-900/60 mt-1">{new Date(ep.published_at).toLocaleDateString()}</p>
                      )}
                      <p className="text-sm text-blue-900/70 mt-2 line-clamp-2">{ep.description}</p>
                      <audio controls className="mt-3 w-full">
                        <source src={ep.audio_url} type="audio/mpeg" />
                        Your browser does not support the audio element.
                      </audio>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
