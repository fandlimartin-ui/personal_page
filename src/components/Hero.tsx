import { ArrowDown, ArrowRight } from 'lucide-react'

function Hero() {
  return (
    <section className="hero-section" id="home">
      <div className="page-wrap hero-grid">
        <div className="hero-copy">
          <p className="hero-kicker"><span className="status-dot" /> FABRIC DATA ENGINEER · MARTIN FANDLI</p>
          <h1 className="hero-title">Engineering data platforms <span>people can trust.</span></h1>
          <p className="hero-description">
            I build dependable data platforms, improve data quality, and make useful
            insights accessible across organizations.
          </p>
          <div className="hero-actions">
            <a className="button-primary" href="#experience">
              View experience <ArrowRight size={15} aria-hidden="true" />
            </a>
            <a className="button-secondary" href="#about">
              About Martin <ArrowDown size={14} aria-hidden="true" />
            </a>
          </div>
        </div>
        <div className="hero-visual">
          <img
            src="/martin.png"
            alt="Portrait and full-length photo of Martin Fandli in a brown suit"
          />
        </div>
      </div>
    </section>
  )
}

export default Hero