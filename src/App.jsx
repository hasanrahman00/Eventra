import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import FloatingWidgets from './components/FloatingWidgets.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'
import { getContentRoutes } from './data/registry.jsx'

import Home from './pages/Home.jsx'
import Events from './pages/Events.jsx'
import EventData from './pages/EventData.jsx'
import Solutions from './pages/Solutions.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Blog from './pages/Blog.jsx'
import CaseStudies from './pages/CaseStudies.jsx'
import NotFound from './pages/NotFound.jsx'

export default function App() {
  const contentRoutes = getContentRoutes()
  return (
    <div className="flex min-h-screen flex-col">
      <ScrollToTop />
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<Events />} />
          <Route path="/event-data" element={<EventData />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          {contentRoutes.map(({ path, Component, page }) => (
            <Route key={path} path={path} element={<Component page={page} />} />
          ))}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <FloatingWidgets />
    </div>
  )
}
