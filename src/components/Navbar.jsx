import { Link, NavLink } from 'react-router-dom'
import { Menu } from 'lucide-react'
import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navClass = ({ isActive }) =>
    `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
      isActive ? 'text-white bg-blue-900' : 'text-blue-900 hover:bg-blue-50'
    }`

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur bg-white/70 border-b border-blue-100">
      <div className="max-w-6xl mx-auto px-4">
        <div className="h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-900 to-yellow-500" />
            <span className="font-semibold text-blue-900">Aurora Wealth Advisory</span>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            <NavLink to="/about" className={navClass}>About</NavLink>
            <NavLink to="/services" className={navClass}>Services</NavLink>
            <NavLink to="/podcasts" className={navClass}>Podcasts</NavLink>
            <NavLink to="/contact" className={navClass}>Contact</NavLink>
            <a
              href="#book"
              className="ml-2 inline-flex items-center justify-center px-4 py-2 rounded-md bg-gradient-to-r from-blue-900 to-yellow-600 text-white text-sm font-semibold shadow-sm hover:opacity-95"
            >
              Book Your Free Consultation
            </a>
          </nav>

          <button className="md:hidden p-2" onClick={() => setOpen(!open)}>
            <Menu className="text-blue-900" />
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4 animate-in">
            <div className="grid gap-2">
              <NavLink to="/about" className={navClass} onClick={() => setOpen(false)}>About</NavLink>
              <NavLink to="/services" className={navClass} onClick={() => setOpen(false)}>Services</NavLink>
              <NavLink to="/podcasts" className={navClass} onClick={() => setOpen(false)}>Podcasts</NavLink>
              <NavLink to="/contact" className={navClass} onClick={() => setOpen(false)}>Contact</NavLink>
              <a href="#book" className="px-3 py-2 rounded-md text-sm font-medium text-white bg-gradient-to-r from-blue-900 to-yellow-600" onClick={() => setOpen(false)}>
                Book Your Free Consultation
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
