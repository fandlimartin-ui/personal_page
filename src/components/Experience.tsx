const roles = [
  {
    title: 'Data Engineer',
    company: 'AERO',
    detail: 'Aviation · Current',
    contributions: [
      'Designed and implemented a centralized data model that unified sources into a single source of truth.',
      'Built and optimized data pipelines and transformations to reduce inconsistencies and improve data quality.',
      'Improved the performance of data models and reports by simplifying structures and accelerating refreshes.',
      'Contributed to data governance and standardization so metrics remain consistent across the organization.',
      'Enabled self-service reporting and integrated data into Power BI and the wider BI ecosystem.',
    ],
    stack: ['Microsoft Fabric', 'Power BI', 'Azure Data Factory', 'Azure Synapse Analytics', 'ERP data'],
  },
  {
    title: 'Data Engineer / Data Analyst',
    company: 'Direct Auto',
    detail: 'Automotive · 2023–2024',
    contributions: [
      'Built a new data platform for a dealership network focused on vehicle sales.',
      'Implemented deduplication and data quality controls.',
      'Created reporting for new and used vehicle sales and service operations.',
      'Distributed data across the group, including integration with a shared customer database (CDP).',
      'Introduced Microsoft Fabric for data work.',
      'Led the migration of key application environments (DEV/SIT/PROD) to Azure and designed scalable solutions using AKS, Azure Database for MySQL, and PostgreSQL.',
    ],
    stack: ['Microsoft Fabric', 'Python', 'PySpark', 'Azure Data Factory', 'Airflow', 'Power BI', 'Tableau', 'Looker Studio', 'PostgreSQL'],
  },
  {
    title: 'Data Analyst',
    company: 'Brown-Forman',
    detail: 'FMCG',
    contributions: [
      'Owned reporting for Sales and Marketing teams in an FMCG business.',
      'Automated reporting workflows using Python and its data libraries.',
    ],
    stack: ['Python', 'Reporting', 'Sales analytics', 'Marketing analytics'],
  },
  {
    title: 'Full-Stack Junior Engineer',
    company: 'Laetis s.r.o.',
    detail: 'Web development',
    contributions: [
      'Developed websites for online sales of solar panels, bonds, and loans.',
      'Progressed from frontend development to backend work and PPC campaign analysis.',
    ],
    stack: ['Frontend', 'Backend', 'Web development', 'PPC analytics'],
  },
  {
    title: 'External Data Analyst',
    company: 'Inter-sat',
    detail: 'Contract',
    contributions: [
      'Performed historical data analysis during a migration from a legacy CRM.',
      'Supported a business representing satellite television providers.',
    ],
    stack: ['CRM migration', 'Historical analysis'],
  },
]

function Experience() {
  return (
    <section className="section-block" id="experience">
      <div className="page-wrap">
        <div className="section-heading">
          <p className="section-index">03 / Experience</p>
          <h2 className="section-title">Building reliable data foundations across industries.</h2>
        </div>
        <div className="experience-list">
          {roles.map((role, index) => (
            <article className="experience-item" key={`${role.company}-${role.title}`}>
              <div className="experience-header">
                <div>
                  <h3 className="experience-role">{role.title}</h3>
                  <p className="experience-company">{role.company}</p>
                </div>
                <p className="experience-detail">{role.detail}</p>
              </div>
              <ul className="experience-contributions">
                {role.contributions.map((contribution) => <li key={contribution}>{contribution}</li>)}
              </ul>
              <div className="experience-stack">
                <span className="experience-stack-label">{index === 0 || index === 1 ? 'TECH STACK' : 'AREAS'}</span>
                <div className="stack-tags">
                  {role.stack.map((item) => <span className="stack-tag" key={item}>{item}</span>)}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience