import { useState } from 'react'
import { roadmapPhases } from '../data/sampleData'
import { Section } from './ui/Section'

export function Roadmap() {
  const [activeId, setActiveId] = useState(roadmapPhases[0].id)
  const active = roadmapPhases.find((p) => p.id === activeId) ?? roadmapPhases[0]

  return (
    <Section
      id="roadmap"
      alt
      eyebrow="Adoption roadmap"
      title="A practical path from scope to improved governance"
      lead="Phases are sequential planning aids. Fixed implementation durations are intentionally omitted because timelines depend on scope, connectors, and organizational readiness."
    >
      <div className="split">
        <div className="roadmap-list stack" role="list">
          {roadmapPhases.map((phase) => (
            <button
              key={phase.id}
              type="button"
              role="listitem"
              aria-pressed={phase.id === activeId}
              onClick={() => setActiveId(phase.id)}
            >
              {phase.title}
            </button>
          ))}
        </div>
        <div className="panel" aria-live="polite">
          <h3 className="panel__title">{active.title}</h3>
          <ul>
            {active.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  )
}
