import { useState } from 'react'
import type { FormEvent } from 'react'
import { reviewItem } from '../data/sampleData'
import { Section } from './ui/Section'

const decisions = [
  'Keep access',
  'Reduce access',
  'Revoke access',
  'Time-limit access',
  'Request more information',
  'Record an exception',
  'Delegate review',
]

export function AccessReview() {
  const [decision, setDecision] = useState('')
  const [reason, setReason] = useState('')
  const [error, setError] = useState('')
  const [recorded, setRecorded] = useState<string | null>(null)

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (!decision) {
      setError('Select a reviewer decision.')
      return
    }
    if (!reason.trim()) {
      setError('A reason is required before recording a simulated decision.')
      return
    }
    setError('')
    setRecorded(`Simulated decision recorded: ${decision}. Reason retained locally only.`)
  }

  return (
    <Section
      id="access-review"
      eyebrow="Usage-aware access review"
      title="Decide with business and usage context"
      lead="Usage is decision context and does not independently determine whether access remains necessary. Recommendations help an authorized reviewer; they do not establish that access should be removed."
    >
      <div className="grid-2">
        <div className="panel">
          <h3 className="panel__title">Review package</h3>
          <dl className="kv">
            <dt>Identity</dt>
            <dd>{reviewItem.identity}</dd>
            <dt>Role</dt>
            <dd>{reviewItem.role}</dd>
            <dt>Manager</dt>
            <dd>{reviewItem.manager}</dd>
            <dt>Resource</dt>
            <dd>{reviewItem.resource}</dd>
            <dt>Permission</dt>
            <dd>{reviewItem.permission}</dd>
            <dt>Access path</dt>
            <dd>{reviewItem.accessPath}</dd>
            <dt>Last observed use</dt>
            <dd>{reviewItem.lastObservedUse}</dd>
            <dt>Usage frequency</dt>
            <dd>{reviewItem.usageFrequency}</dd>
            <dt>Peer comparison</dt>
            <dd>{reviewItem.peerComparison}</dd>
            <dt>Resource sensitivity</dt>
            <dd>{reviewItem.resourceSensitivity}</dd>
            <dt>Recommendation</dt>
            <dd>{reviewItem.recommendation}</dd>
          </dl>
        </div>

        <form className="panel stack" onSubmit={onSubmit} noValidate>
          <h3 className="panel__title">Reviewer decision</h3>
          <div className="decision-grid" role="radiogroup" aria-label="Reviewer decision">
            {decisions.map((item) => (
              <label key={item} className="chip" style={{ display: 'inline-flex', gap: '0.4rem' }}>
                <input
                  type="radio"
                  name="decision"
                  value={item}
                  checked={decision === item}
                  onChange={() => setDecision(item)}
                />
                {item}
              </label>
            ))}
          </div>
          <div className="form-field">
            <label htmlFor="review-reason">Reason (required)</label>
            <textarea
              id="review-reason"
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              aria-required="true"
              aria-invalid={Boolean(error)}
              aria-describedby={error ? 'review-error' : 'review-help'}
            />
            <p id="review-help" className="note">
              Lack of observed use does not automatically prove that access is unnecessary.
            </p>
            {error ? (
              <p id="review-error" className="error" role="alert">
                {error}
              </p>
            ) : null}
          </div>
          <button type="submit" className="btn btn--primary">
            Record simulated decision
          </button>
          {recorded ? (
            <p className="badge badge--green" role="status">
              {recorded}
            </p>
          ) : null}
        </form>
      </div>
    </Section>
  )
}
