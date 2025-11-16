import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Podcast from './components/Podcast'
import Testimonials from './components/Testimonials'
import CTA from './components/CTA'
import About from './pages/About'
import ServicesPage from './pages/Services'
import PodcastsPage from './pages/Podcasts'
import Contact from './pages/Contact'

function Home() {
  return (
    <>
      <Hero />
      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-4 py-10">
          <p className="text-blue-900/80 text-lg">
            Expert guidance across financial planning, budgeting, investments, and business strategy. Built for clarity, confidence, and long-term growth.
          </p>
        </div>
      </section>
      <Podcast />
      <Services />
      <Testimonials />
      <CTA />
    </>
  )
}

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/podcasts" element={<PodcastsPage />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <footer className="border-t border-blue-100 py-10">
        <div className="max-w-6xl mx-auto px-4 text-sm text-blue-900/60">
          <p>© {new Date().getFullYear()} Aurora Wealth Advisory. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
