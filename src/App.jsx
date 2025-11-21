import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Projects from './components/Projects'
import About from './components/About'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white selection:bg-emerald-400/30">
      {/* ambient glow */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute top-[-20%] left-[-10%] h-[40vmax] w-[40vmax] rounded-full bg-emerald-500/10 blur-3xl" />
        <div className="absolute bottom-[-20%] right-[-10%] h-[40vmax] w-[40vmax] rounded-full bg-cyan-500/10 blur-3xl" />
      </div>

      <Navbar />
      <Hero />
      <Services />
      <Projects />
      <About />
      <Contact />

      <footer className="border-t border-white/10 py-10">
        <div className="mx-auto max-w-7xl px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-400 text-sm">© {new Date().getFullYear()} Survey Studio — All rights reserved.</p>
          <div className="text-slate-400 text-sm">
            Crafted with precision and care.
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
