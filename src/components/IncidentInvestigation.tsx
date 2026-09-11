import { useState } from 'react'
import { incidentResponses, incidentSteps } from '../data/sampleData'
import { Section } from './ui/Section'

export function IncidentInvestigation() {
  const [step, setStep] = useState(0)
  const [response, setResponse] = useState<string | null>(null)
  const active = incidentSteps[step]

  return (
    <Section
      id="incident"
      alt
      eyebrow="Identity incident investigation"
      title="Trace unexpected activity through access context"
      lead="Scenario: a dormant contractor account becomes active and accesses a sensitive resource through inherited group membership. Response options depend on integrations, permissions and organizational policy."
    >
      <div className="disclaimer" role="note">
        Identity posture and remediation can reduce exposure and support incident response. This
        prototype does not claim that the platform independently stops lateral movement or prevents
        a breach.
      </div>
      <div className="grid-2" style={{ marginTop: '1.25rem' }}>
        <div className="stack">
          {incidentSteps.map((item, index) => (
            <button
              key={item.step}
              type="button"
              className="chip"
              aria-pressed={step === index}
              onClick={() => setStep(index)}
            >
              {item.step}. {item.title}
            </button>
          ))}
        </div>
        <div className="panel" aria-live="polite">
          <h3 className="panel__title">
            Step {active.step}: {active.title}
          </h3>
          <p>{active.detail}</p>
          {step === 5 ? (
            <>
              <h4>Possible responses</h4>
              <div className="decision-grid">
                {incidentResponses.map((item) => (
                  <button
                    key={item}
                    type="button"
                    className="btn btn--ghost btn--small"
                    onClick={() =>
                      setResponse(
                        `Simulated response selected: ${item}. No live containment action occurred.`,
                      )
                    }
                  >
                    {item}
                  </button>
                ))}
              </div>
              {response ? (
                <p className="badge badge--cyan" role="status">
                  {response}
                </p>
              ) : null}
            </>
          ) : null}
          <div className="row" style={{ marginTop: '1rem' }}>
            <button
              type="button"
              className="btn btn--ghost btn--small"
              disabled={step === 0}
              onClick={() => setStep((s) => Math.max(0, s - 1))}
            >
              Previous
            </button>
            <button
              type="button"
              className="btn btn--primary btn--small"
              disabled={step === incidentSteps.length - 1}
              onClick={() => setStep((s) => Math.min(incidentSteps.length - 1, s + 1))}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </Section>
  )
}
