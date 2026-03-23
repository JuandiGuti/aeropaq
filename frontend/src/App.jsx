import Hero from './components/Hero'
import Services from './components/Services'

function App() {
  return (
    <div>
      <main>
        <section id="hero">
          <Hero />
        </section>
        <section id="servicios">
          <Services />
        </section>

      </main>
    </div>
  )
}

export default App