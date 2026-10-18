import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Menu, X, Sparkles } from 'lucide-react'
import './Nav.css'
const links = [['/', 'Home'], ['/characters', 'Characters']]
export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 40)
    on(); window.addEventListener('scroll', on, { passive: true })
    return () => window.removeEventListener('scroll', on)
  }, [])
  return (
    <header className={`nav ${scrolled ? 'nav--solid' : ''}`}>
      <NavLink to="/" className="nav__logo" onClick={() => setOpen(false)}><Sparkles size={18} /> FRIEREN</NavLink>
      <button className="nav__toggle" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
      <nav className={`nav__links ${open ? 'is-open' : ''}`} aria-label="Main">
        {links.map(([to, label]) => <NavLink key={to} to={to} end onClick={() => setOpen(false)} className="nav__link">{label}</NavLink>)}
      </nav>
    </header>
  )
}
