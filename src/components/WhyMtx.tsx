import { differentiators } from '../data/sampleData'
import { Section } from './ui/Section'

export function WhyMtx() {
  return (
    <Section
      id="why-mtx"
      eyebrow="Why MTX Identity Security & Governance"
      title="Restrained differentiators for buyer conversations"
      lead="The offering helps organizations understand access, support least-privilege decisions, and coordinate remediation across connected systems."
    >
      <div className="diff-grid">
        {differentiators.map((item) => (
          <article key={item.title} className="diff-card">
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </article>
        ))}
      </div>
      <div className="panel" style={{ marginTop: '1.25rem' }}>
        <h3 className="panel__title">Three buyer questions this page answers</h3>
        <ol>
          <li>
            Can the platform show who or what has access to sensitive resources and how that access
            was obtained?
          </li>
          <li>
            Can it help reviewers distinguish necessary access from dormant, excessive, inherited, or
            unintended access?
          </li>
          <li>
            Can access changes and remediation operate within our approvals, identity architecture,
            and audit requirements?
          </li>
        </ol>
      </div>
    </Section>
  )
}
