import { maturityItems } from '../data/sampleData'
import { Section } from './ui/Section'

function statusClass(status: string) {
  if (status === 'Available') return 'badge--green'
  if (status === 'Configured per deployment') return 'badge--cyan'
  if (status === 'Early access') return 'badge--amber'
  if (status === 'Planned') return 'badge'
  return 'badge--red'
}

export function ProductMaturity() {
  return (
    <Section
      id="maturity"
      alt
      eyebrow="Evidence discipline"
      title="Product maturity and operating evidence"
      lead="Status labels describe capability readiness for planning conversations. Customer counts, risk reductions, connector inventories, certifications, and outcome metrics are omitted unless validated."
    >
      <div className="table-wrap">
        <table className="data">
          <caption className="sr-only">Capability maturity status</caption>
          <thead>
            <tr>
              <th scope="col">Capability</th>
              <th scope="col">Status</th>
            </tr>
          </thead>
          <tbody>
            {maturityItems.map((item) => (
              <tr key={item.capability}>
                <th scope="row">{item.capability}</th>
                <td>
                  <span className={`badge ${statusClass(item.status)}`}>{item.status}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="note" style={{ marginTop: '1rem' }}>
        Do not transfer Oleria customer claims to MTX. Do not use an Oleria customer logo,
        testimonial, or result without written authorization.
      </p>
    </Section>
  )
}
