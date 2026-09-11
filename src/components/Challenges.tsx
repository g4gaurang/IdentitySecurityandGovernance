import { useState } from 'react'
import { challenges } from '../data/sampleData'
import { Section } from './ui/Section'

export function Challenges() {
  const [activeId, setActiveId] = useState(challenges[0].id)
  const active = challenges.find((c) => c.id === activeId) ?? challenges[0]

  return (
    <Section
      id="challenges"
      alt
      eyebrow="Identity-security challenges"
      title="Common access problems teams need to examine"
      lead="Select a challenge to see affected roles, evidence, required context, product capability, and a suggested measure."
    >
      <div className="challenge-grid">
        <div className="challenge-list stack" role="list">
          {challenges.map((item) => (
            <button
              key={item.id}
              type="button"
              role="listitem"
              aria-pressed={item.id === activeId}
              onClick={() => setActiveId(item.id)}
            >
              {item.title}
            </button>
          ))}
        </div>
        <div className="panel" aria-live="polite">
          <h3 className="panel__title">{active.title}</h3>
          <p>
            <strong>Challenge:</strong> {active.challenge}
          </p>
          <p>
            <strong>Response:</strong> {active.response}
          </p>
          <dl className="kv">
            <dt>Affected roles</dt>
            <dd>{active.affectedRoles.join(', ')}</dd>
            <dt>Evidence available</dt>
            <dd>{active.evidence.join('; ')}</dd>
            <dt>Additional context required</dt>
            <dd>{active.additionalContext.join('; ')}</dd>
            <dt>Product capability</dt>
            <dd>{active.capability}</dd>
            <dt>Suggested measure</dt>
            <dd>{active.measure}</dd>
          </dl>
        </div>
      </div>
    </Section>
  )
}
