import './MagicParticles.css'
const dots = Array.from({ length: 28 }, (_, i) => ({ id: i, left: (i * 37) % 100, top: (i * 53) % 100, size: 2 + (i % 4), delay: (i % 7) * .8 }))
export default function MagicParticles() {
  return (
    <div className="particles" aria-hidden="true">
      {dots.map(d => <span key={d.id} style={{ left: d.left + '%', top: d.top + '%', width: d.size, height: d.size, animationDelay: d.delay + 's' }} />)}
    </div>
  )
}
