import { useState } from 'react'
import { identityCategories } from '../data/sampleData'
import { Section } from './ui/Section'

const tabs = [
  { id: 'human', label: 'Human identities' },
  { id: 'nonHuman', label: 'Non-human identities' },
  { id: 'ai', label: 'AI identities' },
] as const

export function IdentityTypes() {
  const [tab, setTab] = useState<(typeof tabs)[number]['id']>('human')
  const active = identityCategories[tab]

  return (
    <Section
      id="identity-types"
      alt
      eyebrow="Human, non-human and AI identities"
      title="Govern modern identity categories with ownership and lifecycle context"
      lead="Discoverability depends on required connectors and available source data. Examples below are fictional."
    >
      <div className="tablist" role="tablist" aria-label="Identity categories">
        {tabs.map((t) => (
          <button
            key={t.id}
            type="button"
            className="tab"
            role="tab"
            id={`tab-${t.id}`}
            aria-selected={tab === t.id}
            aria-controls={`panel-${t.id}`}
            tabIndex={tab === t.id ? 0 : -1}
            onClick={() => setTab(t.id)}
            onKeyDown={(e) => {
              const idx = tabs.findIndex((x) => x.id === tab)
              if (e.key === 'ArrowRight') {
                e.preventDefault()
                setTab(tabs[(idx + 1) % tabs.length].id)
              }
              if (e.key === 'ArrowLeft') {
                e.preventDefault()
                setTab(tabs[(idx - 1 + tabs.length) % tabs.length].id)
              }
            }}
          >
            {t.label}
          </button>
        ))}
      </div>

      <div
        className="panel"
        role="tabpanel"
        id={`panel-${tab}`}
        aria-labelledby={`tab-${tab}`}
      >
        <h3 className="panel__title">{active.title}</h3>
        <div className="chip-row" style={{ marginBottom: '1rem' }}>
          {active.types.map((type) => (
            <span key={type} className="badge">
              {type}
            </span>
          ))}
        </div>
        <div className="grid-2">
          {active.examples.map((ex) => (
            <article key={ex.name} className="metric-card">
              <h4>{ex.name}</h4>
              <dl className="kv">
                <dt>Owner</dt>
                <dd>{ex.owner}</dd>
                <dt>Purpose</dt>
                <dd>{ex.purpose}</dd>
                <dt>Resources</dt>
                <dd>{ex.resources.join(', ')}</dd>
                <dt>Permissions</dt>
                <dd>{ex.permissions.join(', ')}</dd>
                <dt>Credentials</dt>
                <dd>{ex.credentials}</dd>
                <dt>Usage</dt>
                <dd>{ex.usage}</dd>
                <dt>Review status</dt>
                <dd>{ex.review}</dd>
                <dt>Lifecycle</dt>
                <dd>{ex.lifecycle}</dd>
                <dt>Related findings</dt>
                <dd>{ex.findings.join(', ')}</dd>
              </dl>
            </article>
          ))}
        </div>
      </div>
    </Section>
  )
}
