import About from './components/About'
import Contact from './components/Contact'
import Experience from './components/Experience'
import Header from './components/Header'
import Hero from './components/Hero'
import TechStack from './components/TechStack'

const currentYear = new Date().getFullYear()

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <TechStack />
        <Experience />
        <Contact />
      </main>
      <footer className="site-footer">
        <div className="page-wrap footer-inner">
          <span>© {currentYear} Martin Fandli</span>
          <a href="#home">Back to top <span aria-hidden="true">↑</span></a>
        </div>
      </footer>
    </>
  )
}

export default App
