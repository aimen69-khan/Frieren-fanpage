import { Link } from 'react-router-dom'
import { ArrowUp } from 'lucide-react'
import './Footer.css'
// Set this to your own streaming link. Leave empty to hide the button.
const STREAMING_URL = ''
export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <h2>FRIEREN: BEYOND JOURNEY&rsquo;S END</h2>
        <p>An unofficial fan-made website.</p>
        <nav aria-label="Footer"><Link to="/">Home</Link> <Link to="/characters">Characters</Link></nav>
        <p>Want to watch Frieren: Beyond Journey&rsquo;s End? I&rsquo;ll add a link here so you can find where to watch the anime.</p>
        {STREAMING_URL && <a className="btn" href={STREAMING_URL} target="_blank" rel="noopener noreferrer">Where to watch</a>}
        <button className="btn ghost" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}><ArrowUp size={16} /> Back to top</button>
        <small>&copy; {new Date().getFullYear()} Fan project. Artwork and trademarks belong to their respective rights holders. Not affiliated with the official production.</small>
      </div>
    </footer>
  )
}
