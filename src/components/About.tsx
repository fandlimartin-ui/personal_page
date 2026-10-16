function About() {
  return (
    <section className="section-block" id="about">
      <div className="page-wrap">
        <div className="section-heading">
          <p className="section-index">01 / About</p>
          <h2 className="section-title">Data engineering shaped by the people who rely on it.</h2>
        </div>
        <div className="about-grid">
          <div className="about-copy">
            <p>
              I’m Martin Fandli, a Fabric Data Engineer with experience in data
              engineering and analytics. I design and build data platforms, process
              and validate data, and make it useful across organizations.
            </p>
            <p>
              My work spans aviation, automotive, and FMCG. I’ve built data platforms,
              improved data quality, enabled self-service reporting, and automated
              analysis with Python. I care about clear, consistent data that helps
              teams make better-informed decisions.
            </p>
          </div>
          <aside className="about-note">
            <strong>Areas of focus</strong>
            Data platform design, data quality, governance, performance, and business
            intelligence enablement.
          </aside>
        </div>
      </div>
    </section>
  )
}

export default About