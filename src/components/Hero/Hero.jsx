import { motion } from 'motion/react'
import { Link } from 'react-router-dom'
import MagicParticles from '../MagicParticles/MagicParticles.jsx'
import './Hero.css'
const item = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: .9 } } }
export default function Hero() {
  return (
    <section className="hero">
      <MagicParticles />
      <div className="hero__circle" aria-hidden="true" />
      <motion.div className="hero__content" initial="hidden" animate="show" transition={{ staggerChildren: .25 }}>
        <motion.h1 variants={item}>Frieren: Beyond Journey&rsquo;s End</motion.h1>
        <motion.p variants={item} className="hero__sub">An endless journey through memories, magic, and the meaning of time.</motion.p>
        <motion.p variants={item} className="hero__desc">After the Demon King falls, an elf mage outlives her companions and sets out to learn what their short lives meant.</motion.p>
        <motion.div variants={item} className="hero__cta">
          <Link className="btn" to="/characters">Explore the Characters</Link>
          <a className="btn ghost" href="#about">Begin the Journey</a>
        </motion.div>
      </motion.div>
    </section>
  )
}
