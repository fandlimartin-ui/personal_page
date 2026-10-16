const technologies = [
  {
    number: '01',
    name: 'Data platforms',
    description: 'Cloud data platforms, orchestration, lakehouses, and enterprise sources.',
    tags: ['Microsoft Fabric', 'Azure Data Factory', 'Azure Synapse', 'Airflow'],
  },
  {
    number: '02',
    name: 'Python',
    description: 'Data processing and automation, from exploratory analysis to distributed workloads.',
    tags: ['Pandas', 'NumPy', 'Matplotlib', 'PySpark'],
  },
  {
    number: '03',
    name: 'SQL',
    description: 'Structured data, analytics models, and dependable transformation workflows.',
    tags: ['SQL', 'PostgreSQL', 'dbt', 'Data modeling'],
  },
  {
    number: '04',
    name: 'BI & cloud',
    description: 'Reporting and cloud infrastructure that puts trusted data to work.',
    tags: ['Power BI', 'Tableau', 'Looker Studio', 'AKS'],
  },
]

function TechStack() {
  return (
    <section className="section-block" id="stack">
      <div className="page-wrap">
        <div className="section-heading">
          <p className="section-index">02 / Expertise</p>
          <h2 className="section-title">Tools I use to build and deliver data products.</h2>
        </div>
        <div className="stack-grid">
          {technologies.map((technology) => (
            <article className="stack-item" key={technology.name}>
              <span className="stack-index">{technology.number} / CORE</span>
              <h3 className="stack-name">{technology.name}</h3>
              <p className="stack-description">{technology.description}</p>
              <div className="stack-tags" aria-label={`${technology.name} areas`}>
                {technology.tags.map((tag) => <span className="stack-tag" key={tag}>{tag}</span>)}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TechStack