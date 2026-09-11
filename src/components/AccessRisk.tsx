import { useState } from 'react'
import { findings } from '../data/sampleData'
import { IllustrativeBadge, Section } from './ui/Section'

export function AccessRisk() {
  const [activeId, setActiveId] = useState(findings[0].id)
  const active = findings.find((f) => f.id === activeId) ?? findings[0]

  return (
    <Section
      id="access-risk"
      alt
      eyebrow="Access risk explorer"
      title="Investigate posture findings with evidence and unknowns"
      lead="Findings highlight conditions that may require review. They do not automatically represent confirmed security incidents."
    >
      <div className="split">
        <div className="finding-list stack" role="list">
          {findings.map((f) => (
            <button
              key={f.id}
              type="button"
              role="listitem"
              aria-pressed={f.id === activeId}
              onClick={() => setActiveId(f.id)}
            >
              {f.title}
            </button>
          ))}
        </div>
        <div className="panel" aria-live="polite">
          <div className="row" style={{ justifyContent: 'space-between' }}>
            <h3 className="panel__title">{active.title}</h3>
            <IllustrativeBadge />
          </div>
          <p>{active.summary}</p>
          <dl className="kv">
            <dt>Observation</dt>
            <dd>{active.observation}</dd>
            <dt>Supporting evidence</dt>
            <dd>{active.evidence.join('; ')}</dd>
            <dt>What remains unknown</dt>
            <dd>{active.unknown.join('; ')}</dd>
            <dt>Potential impact</dt>
            <dd>{active.impact}</dd>
            <dt>Suggested reviewer</dt>
            <dd>{active.reviewer}</dd>
            <dt>Recommended action</dt>
            <dd>{active.action}</dd>
            <dt>Decision status</dt>
            <dd>
              <span className="badge badge--amber">{active.status}</span>
            </dd>
          </dl>
        </div>
      </div>
    </Section>
  )
}
