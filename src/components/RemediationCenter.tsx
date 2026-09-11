import { useState } from 'react'
import {
  remediationItems,
  type RemediationItem,
  type RemediationStatus,
} from '../data/sampleData'
import { IllustrativeBadge, Section } from './ui/Section'

const nextStatus: Record<RemediationStatus, RemediationStatus> = {
  New: 'Reviewing',
  Reviewing: 'Approved',
  Approved: 'Scheduled',
  Scheduled: 'In progress',
  'In progress': 'Awaiting connector result',
  'Awaiting connector result': 'Ready for verification',
  'Ready for verification': 'Closed',
  Closed: 'Closed',
  'Exception active': 'Exception active',
  Reopened: 'Reviewing',
}

export function RemediationCenter() {
  const [items, setItems] = useState(remediationItems)
  const [selectedId, setSelectedId] = useState(items[0].id)
  const selected = items.find((i) => i.id === selectedId) ?? items[0]

  const simulate = (item: RemediationItem) => {
    const status = nextStatus[item.status]
    const stamp = `Simulated transition to ${status}`
    setItems((prev) =>
      prev.map((row) =>
        row.id === item.id
          ? {
              ...row,
              status,
              lastUpdate: 'Illustrative — just now',
              verification:
                status === 'Closed'
                  ? 'Authoritative confirmation simulated'
                  : status === 'Ready for verification'
                    ? 'Ready for verification'
                    : row.verification,
              audit: [...row.audit, stamp],
            }
          : row,
      ),
    )
  }

  return (
    <Section
      id="remediation"
      eyebrow="Remediation control center"
      title="Coordinate approved remediation with an audit trail"
      lead="Revoking or changing access depends on connector capability, permissions, workflow configuration, and the authoritative source. No real access changes occur in this prototype."
    >
      <div className="table-wrap">
        <table className="data">
          <caption className="sr-only">Remediation workspace items</caption>
          <thead>
            <tr>
              <th scope="col">Finding</th>
              <th scope="col">Identity</th>
              <th scope="col">Resource</th>
              <th scope="col">Priority</th>
              <th scope="col">Owner</th>
              <th scope="col">Status</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr key={item.id} className={item.id === selectedId ? 'is-selected' : undefined}>
                <th scope="row">
                  <button
                    type="button"
                    className="btn btn--ghost btn--small"
                    onClick={() => setSelectedId(item.id)}
                  >
                    {item.finding}
                  </button>
                </th>
                <td>{item.identity}</td>
                <td>{item.resource}</td>
                <td>{item.priority}</td>
                <td>{item.owner}</td>
                <td>
                  <span className="badge">{item.status}</span>
                </td>
                <td>
                  <button
                    type="button"
                    className="btn btn--primary btn--small"
                    onClick={() => {
                      setSelectedId(item.id)
                      simulate(item)
                    }}
                    disabled={item.status === 'Closed' || item.status === 'Exception active'}
                  >
                    Simulate step
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="panel" style={{ marginTop: '1.25rem' }} aria-live="polite">
        <div className="row" style={{ justifyContent: 'space-between' }}>
          <h3 className="panel__title">Selected remediation</h3>
          <IllustrativeBadge />
        </div>
        <dl className="kv">
          <dt>Finding</dt>
          <dd>{selected.finding}</dd>
          <dt>Recommended action</dt>
          <dd>{selected.recommendedAction}</dd>
          <dt>Approval requirement</dt>
          <dd>{selected.approvalRequirement}</dd>
          <dt>Connector</dt>
          <dd>{selected.connector}</dd>
          <dt>Verification</dt>
          <dd>{selected.verification}</dd>
          <dt>Exception</dt>
          <dd>{selected.exception}</dd>
          <dt>Last update</dt>
          <dd>{selected.lastUpdate}</dd>
        </dl>
        <h4>Audit trail</h4>
        <ol>
          {selected.audit.map((entry) => (
            <li key={entry}>{entry}</li>
          ))}
        </ol>
      </div>
    </Section>
  )
}
