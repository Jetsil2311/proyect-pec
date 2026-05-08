import HeaderBanner from './components/HeaderBanner'
import FolletoSection from './components/FolletoSection'
import StatsSection from './components/StatsSection'
import VideoSection from './components/VideoSection'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-brand-light font-body">
      <HeaderBanner />
      <FolletoSection />
      <StatsSection />
      <VideoSection />
      <Footer />
    </div>
  )
}

export default App
