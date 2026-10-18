import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import CharacterCard from '../CharacterCard/CharacterCard.jsx'
import { characters } from '../../data/characters.js'
import './CharacterSection.css'
export default function CharacterSection() {
  const [active, setActive] = useState(null)
  useEffect(() => {
    if (!active) return
    const onKey = e => e.key === 'Escape' && setActive(null)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [active])
  return (
    <section className="chars section">
      <div className="container">
        <h2>The Travelers</h2>
        <div className="chars__grid">
          {characters.map((c, i) => <CharacterCard key={c.id} character={c} index={i} onOpen={setActive} />)}
        </div>
      </div>
      <AnimatePresence>
        {active && (
          <motion.div className="modal" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setActive(null)}>
            <div className="modal__box" role="dialog" aria-modal="true" aria-label={active.name} onClick={e => e.stopPropagation()}>
              <h3>{active.name}</h3><p className="modal__role">{active.role}</p><p>{active.bio}</p>
              <button className="btn" autoFocus onClick={() => setActive(null)}>Close</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
