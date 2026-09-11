import { useState } from 'react'
import { lifecycleStages } from '../data/sampleData'
import { Section } from './ui/Section'

export function Lifecycle() {
  const [activeId, setActiveId] = useState(lifecycleStages[0].id)
  const active = lifecycleStages.find((s) => s.id === activeId) ?? lifecycleStages[0]
  const index = lifecycleStages.findIndex((s) => s.id === activeId)

  return (
    <Section
      id="lifecycle"
      eyebrow="Identity operating lifecycle"
      title="Six stages from connection through verification"
      lead="Selecting a stage updates the adjacent interface with the activities and artifacts typical of that stage."
    >
      <div className="lifecycle">
        <div className="stage-rail" role="list">
          {lifecycleStages.map((stage, i) => (
            <button
              key={stage.id}
              type="button"
              role="listitem"
              aria-pressed={stage.id === activeId}
              onClick={() => setActiveId(stage.id)}
            >
              <span className="stage-index">{i + 1}</span>
              <span>{stage.title}</span>
            </button>
          ))}
        </div>
        <div className="panel" aria-live="polite">
          <p className="badge badge--illus">
            Stage {index + 1} of {lifecycleStages.length}
          </p>
          <h3 className="panel__title">{active.title}</h3>
          <p>{active.summary}</p>
          <ul className="chip-row" aria-label={`${active.title} details`}>
            {active.items.map((item) => (
              <li key={item} className="badge">
                {item}
              </li>
            ))}
          </ul>
          <p className="note">
            Coverage and actions remain limited to connected systems, available data, connector
            capability, and authorized workflows.
          </p>
        </div>
      </div>
    </Section>
  )
}
