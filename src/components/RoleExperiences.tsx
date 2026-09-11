import { useState } from 'react'
import { roleViews } from '../data/sampleData'
import { IllustrativeBadge, Section } from './ui/Section'

type RoleKey = keyof typeof roleViews

export function RoleExperiences() {
  const keys = Object.keys(roleViews) as RoleKey[]
  const [active, setActive] = useState<RoleKey>('ciso')
  const view = roleViews[active]

  return (
    <Section
      id="roles"
      eyebrow="Role-based experiences"
      title="Tailor the workspace to decision-makers and operators"
      lead="Select a role to preview the panels that role typically needs. Content remains illustrative."
    >
      <div className="split">
        <div className="role-list stack" role="list">
          {keys.map((key) => (
            <button
              key={key}
              type="button"
              role="listitem"
              aria-pressed={active === key}
              onClick={() => setActive(key)}
            >
              {roleViews[key].title}
            </button>
          ))}
        </div>
        <div className="panel" aria-live="polite">
          <div className="row" style={{ justifyContent: 'space-between' }}>
            <h3 className="panel__title">{view.title} workspace</h3>
            <IllustrativeBadge />
          </div>
          <div className="grid-2">
            {view.panels.map((panel) => (
              <article key={panel} className="metric-card">
                <h4>{panel}</h4>
                <p className="note">Illustrative panel for {view.title.toLowerCase()} workflows.</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </Section>
  )
}
