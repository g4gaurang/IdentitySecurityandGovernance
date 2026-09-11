import { useState } from 'react'
import { explorerQueries } from '../data/sampleData'
import { IllustrativeBadge, Section } from './ui/Section'

export function WhoHasAccess() {
  const [activeId, setActiveId] = useState(explorerQueries[0].id)
  const active = explorerQueries.find((q) => q.id === activeId) ?? explorerQueries[0]

  return (
    <Section
      id="who-has-access"
      eyebrow="Who-has-access explorer"
      title="Ask focused access questions against illustrative relationships"
      lead="Prebuilt questions return fictional results with evidence and context. This prototype does not connect to a live natural-language model or identity systems."
    >
      <div className="split">
        <div className="query-list stack" role="list">
          {explorerQueries.map((q) => (
            <button
              key={q.id}
              type="button"
              role="listitem"
              aria-pressed={q.id === activeId}
              onClick={() => setActiveId(q.id)}
            >
              {q.question}
            </button>
          ))}
        </div>
        <div className="panel" aria-live="polite">
          <div className="row" style={{ justifyContent: 'space-between' }}>
            <h3 className="panel__title">{active.question}</h3>
            <IllustrativeBadge />
          </div>
          <p className="note">Focus: {active.focus}</p>
          <ul className="list-clean">
            {active.results.map((r) => (
              <li key={`${r.subject}-${r.detail}`}>
                <strong>{r.subject}</strong> — {r.detail}
                <br />
                <span>Evidence: {r.evidence}</span>
                <br />
                <span>Context: {r.context}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  )
}
