import { Link } from 'react-router-dom'
import './NotFound.css'
export default function NotFound() {
  return <div className="nf"><h1>This path leads nowhere</h1><p>The page you asked for doesn&rsquo;t exist.</p><Link className="btn" to="/">Return home</Link></div>
}
