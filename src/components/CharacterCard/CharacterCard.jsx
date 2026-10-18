import { motion } from 'motion/react'
import './CharacterCard.css'

export default function CharacterCard({ character, index, onOpen }) {
  return (
    <motion.article
      className="card"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: (index % 3) * 0.12, duration: 0.6 }}
    >
      <div className="card__art">
        <img
          src={character.image}
          alt={character.name}
          loading="lazy"
          onError={(e) => { e.currentTarget.style.display = 'none' }}
        />
        <span aria-hidden="true">{character.name[0]}</span>
      </div>
      <h3>{character.name}</h3>
      <p className="card__role">{character.role}</p>
      <p>{character.bio}</p>
      <button className="btn ghost" onClick={() => onOpen(character)}>
        Discover Character
      </button>
    </motion.article>
  )
}