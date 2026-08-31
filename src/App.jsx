import Nav from './components/Nav'
import Hero from './components/Hero'
import ProblemSolution from './components/ProblemSolution'
import FeatureGrid from './components/FeatureGrid'
import HowItWorks from './components/HowItWorks'
import Partners from './components/Partners'
import CTA from './components/CTA'
import Footer from './components/Footer'

export default function App() {
  return (
    <div id="top">
      <Nav />
      <main>
        <Hero />
        <ProblemSolution />
        <FeatureGrid />
        <HowItWorks />
        <Partners />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}