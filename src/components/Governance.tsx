import { useState } from 'react'
import { governanceTopics } from '../data/sampleData'
import { Section } from './ui/Section'

const tabs = [
  { id: 'ownership', title: 'Identity ownership', items: governanceTopics.ownership },
  { id: 'decision', title: 'Decision governance', items: governanceTopics.decision },
  { id: 'remediation', title: 'Remediation governance', items: governanceTopics.remediation },
  { id: 'audit', title: 'Audit evidence', items: governanceTopics.audit },
] as const

export function Governance() {
  const [active, setActive] = useState<(typeof tabs)[number]['id']>('ownership')
  const current = tabs.find((t) => t.id === active) ?? tabs[0]

  return (
    <Section
      id="governance"
      eyebrow="Governance and auditability"
      title="Keep ownership, decisions, remediation and evidence accountable"
      lead="This section describes governance constructs supported by the offering model. It does not claim that the platform establishes legal or regulatory compliance."
    >
      <div className="tablist" role="tablist" aria-label="Governance topics">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            type="button"
            className="tab"
            role="tab"
            aria-selected={active === tab.id}
            onClick={() => setActive(tab.id)}
          >
            {tab.title}
          </button>
        ))}
      </div>
      <div className="panel" role="tabpanel" aria-live="polite">
        <h3 className="panel__title">{current.title}</h3>
        <ul className="list-clean">
          {current.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </Section>
  )
}
