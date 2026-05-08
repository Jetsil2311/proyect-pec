import HeaderBanner from './components/HeaderBanner'
import FolletoSection from './components/FolletoSection'
import StatsSection from './components/StatsSection'
import VideoSection from './components/VideoSection'
import DrugAwarenessGame from './components/DrugAwarenessGame'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-brand-light font-body">
      <HeaderBanner />
      <FolletoSection />
      <StatsSection />
      <VideoSection />
      <section className="px-4 sm:px-6 py-12 sm:py-16">
        <div className="max-w-5xl mx-auto mb-8">
          <h2 className="font-display text-4xl font-bold text-brand-dark mb-2">
            Pon a prueba tu conocimiento
          </h2>
          <p className="font-body text-base text-gray-500">
            10 preguntas sobre el consumo de drogas en México. ¿Cuántas puedes responder correctamente?
          </p>
        </div>
        <DrugAwarenessGame />
      </section>
      <Footer />
    </div>
  )
}

export default App
