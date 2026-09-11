import { offeringModel } from '../data/sampleData'
import { Section } from './ui/Section'

export function OfferingModel() {
  return (
    <Section
      id="offering"
      eyebrow="Offering model"
      title="Technology plus MTX services"
      lead="The public product name is MTX Identity Security & Governance. Co-branding language such as “Powered by Oleria” should appear only after partnership and branding approval."
    >
      <div className="grid-3">
        <article className="panel">
          <h3 className="panel__title">Oleria identity-security technology</h3>
          <ul className="list-clean">
            {offeringModel.oleria.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p className="note">MTX did not develop Oleria’s underlying platform.</p>
        </article>
        <article className="panel">
          <h3 className="panel__title">MTX implementation services</h3>
          <ul className="list-clean">
            {offeringModel.implementation.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
        <article className="panel">
          <h3 className="panel__title">MTX managed services</h3>
          <p className="badge badge--amber">Include only if MTX currently offers them</p>
          <ul className="list-clean">
            {offeringModel.managed.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p className="note">
            Do not imply continuous monitoring if service hours and responsibilities are
            unconfirmed.
          </p>
        </article>
      </div>
    </Section>
  )
}
