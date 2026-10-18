import Hero from '../../components/Hero/Hero.jsx'
import './Home.css'
export default function Home() {
  return (
    <>
      <Hero />
      <section id="about" className="about section">
        <div className="container">
          <h2>Every Journey Leaves a Memory</h2>
          <p>Frieren, an elven mage, helped the hero&rsquo;s party defeat the Demon King. Decades later she sets out again, this time to understand the people she knew only briefly. This is an unofficial, spoiler-light fan page.</p>
        </div>
      </section>
    </>
  )
}
