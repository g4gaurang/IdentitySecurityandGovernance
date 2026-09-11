import { useState } from 'react'
import { accessRequest } from '../data/sampleData'
import { Section } from './ui/Section'

const outcomes = [
  'Approve',
  'Approve with reduced permission',
  'Approve for a limited duration',
  'Request more information',
  'Reject',
  'Escalate',
]

export function AdaptiveAccess() {
  const [outcome, setOutcome] = useState<string | null>(null)

  const onDecide = (value: string) => {
    setOutcome(`Simulated outcome: ${value}. No access was granted or changed.`)
  }

  return (
    <Section
      id="adaptive-access"
      eyebrow="Adaptive and time-boxed access"
      title="Move toward access that reflects current need"
      lead="Illustrative access-request experience. Time-boxed access availability depends on connected systems and licensed product capabilities."
    >
      <div className="disclaimer" role="note">
        <strong>Requires availability confirmation.</strong> Do not describe access as automatically
        granted before a request unless MTX and Oleria confirm feature availability and approve the
        language for the intended integrations.
      </div>
      <div className="grid-2" style={{ marginTop: '1.25rem' }}>
        <div className="panel">
          <h3 className="panel__title">Access request (illustrative)</h3>
          <dl className="kv">
            <dt>Requester</dt>
            <dd>{accessRequest.requester}</dd>
            <dt>Requested resource</dt>
            <dd>{accessRequest.resource}</dd>
            <dt>Requested permission</dt>
            <dd>{accessRequest.permission}</dd>
            <dt>Business purpose</dt>
            <dd>{accessRequest.purpose}</dd>
            <dt>Requested duration</dt>
            <dd>{accessRequest.duration}</dd>
            <dt>Current access</dt>
            <dd>{accessRequest.currentAccess}</dd>
            <dt>Peer context</dt>
            <dd>{accessRequest.peerContext}</dd>
            <dt>Resource owner</dt>
            <dd>{accessRequest.owner}</dd>
            <dt>Approval route</dt>
            <dd>{accessRequest.approvalRoute}</dd>
            <dt>Expiration</dt>
            <dd>{accessRequest.expiration}</dd>
          </dl>
          <p className="badge badge--amber" style={{ marginTop: '0.75rem' }}>
            Availability depends on connected systems and licensed product capabilities.
          </p>
        </div>
        <form className="panel stack">
          <h3 className="panel__title">Possible outcomes</h3>
          <div className="decision-grid">
            {outcomes.map((item) => (
              <button
                key={item}
                type="button"
                className="btn btn--ghost"
                onClick={() => onDecide(item)}
              >
                {item}
              </button>
            ))}
          </div>
          {outcome ? (
            <p className="badge badge--green" role="status">
              {outcome}
            </p>
          ) : null}
        </form>
      </div>
    </Section>
  )
}
