import { useState } from 'react'
import { architecture } from '../data/sampleData'
import { Section } from './ui/Section'

const columns = [
  { id: 'identitySources', title: 'Identity sources', items: architecture.identitySources },
  { id: 'resources', title: 'Resources', items: architecture.resources },
  { id: 'oleriaLayer', title: 'Oleria technology layer', items: architecture.oleriaLayer },
  { id: 'mtxLayer', title: 'MTX services layer', items: architecture.mtxLayer },
  { id: 'experiences', title: 'User experiences', items: architecture.experiences },
] as const

export function Architecture() {
  const [active, setActive] = useState<(typeof columns)[number]['id']>('oleriaLayer')
  const selected = columns.find((c) => c.id === active) ?? columns[2]

  return (
    <Section
      id="integrations"
      alt
      eyebrow="Integration architecture"
      title="Complement existing identity and security systems"
      lead="Named product integrations and logos are omitted until availability is validated. Partnership naming and co-branding require internal confirmation before external publication."
    >
      <div className="arch-grid" role="list">
        {columns.map((col) => (
          <button
            key={col.id}
            type="button"
            className={`arch-col ${active === col.id ? 'is-active' : ''}`}
            role="listitem"
            aria-pressed={active === col.id}
            onClick={() => setActive(col.id)}
          >
            <h3>{col.title}</h3>
            <ul className="list-clean">
              {col.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </button>
        ))}
      </div>
      <div className="panel" style={{ marginTop: '1rem' }} aria-live="polite">
        <h3 className="panel__title">Focus: {selected.title}</h3>
        <p className="note">
          MTX Identity Security &amp; Governance is positioned as an identity intelligence, posture,
          governance, and remediation layer. It does not replace directories, IAM, IGA, PAM, HR,
          cloud platforms, or security operations systems.
        </p>
      </div>
    </Section>
  )
}
