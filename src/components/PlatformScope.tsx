import { Section } from './ui/Section'

const cards = [
  {
    num: '4',
    label: 'Identity categories',
    detail: 'Workforce · External and third-party · Non-human · AI agents',
  },
  {
    num: '6',
    label: 'Operating stages',
    detail: 'Connect · Understand · Assess · Review · Remediate · Verify',
  },
  {
    num: '5',
    label: 'Access-context dimensions',
    detail: 'Identity · Resource · Access path · Usage · Business context',
  },
  {
    num: '1',
    label: 'Connected access graph',
    detail: 'Relationships drawn from systems brought into scope',
  },
]

export function PlatformScope() {
  return (
    <Section
      id="platform-scope"
      eyebrow="Platform scope"
      title="A scoped operating model for identity security and governance"
      lead="These figures describe platform scope for the prototype, not customer outcomes. Visibility depends on connected systems and available data."
    >
      <div className="scope-cards">
        {cards.map((card) => (
          <article key={card.label} className="scope-card">
            <div className="scope-card__num" aria-hidden="true">
              {card.num}
            </div>
            <h3>{card.label}</h3>
            <p className="note">{card.detail}</p>
          </article>
        ))}
      </div>
    </Section>
  )
}
