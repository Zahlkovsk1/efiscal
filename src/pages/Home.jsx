import Nav from '../components/Nav'
import Hero from '../components/Hero'
import ProblemSolution from '../components/ProblemSolution'
import FeatureGrid from '../components/FeatureGrid'
import HowItWorks from '../components/HowItWorks'
import ApiSection from '../components/ApiSection'
import Partners from '../components/Partners'
import CTA from '../components/CTA'
import Footer from '../components/Footer'

export default function Home() {
    return (
        <div id="top">
            <Nav />
            <main>
                <Hero />
                <ProblemSolution />
                <FeatureGrid />
                <HowItWorks />
                <ApiSection />
                <Partners />
                <CTA />
            </main>
            <Footer />
        </div>
    )
}