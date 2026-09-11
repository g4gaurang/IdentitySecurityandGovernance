import { useState } from 'react'
import type { FormEvent } from 'react'
import { Section } from './ui/Section'

interface FormState {
  name: string
  organization: string
  role: string
  email: string
  environment: string
  concern: string
  governance: string
  message: string
}

const initial: FormState = {
  name: '',
  organization: '',
  role: '',
  email: '',
  environment: '',
  concern: '',
  governance: '',
  message: '',
}

export function ClosingCta() {
  const [form, setForm] = useState<FormState>(initial)
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({})
  const [confirmed, setConfirmed] = useState(false)

  const update = (key: keyof FormState, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }))
  }

  const validate = () => {
    const next: Partial<Record<keyof FormState, string>> = {}
    if (!form.name.trim()) next.name = 'Enter your name.'
    if (!form.organization.trim()) next.organization = 'Enter your organization.'
    if (!form.role.trim()) next.role = 'Enter your role.'
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      next.email = 'Enter a valid email address.'
    }
    if (!form.environment.trim()) next.environment = 'Describe your identity environment.'
    if (!form.concern.trim()) next.concern = 'Select or describe a primary concern.'
    if (!form.governance.trim()) next.governance = 'Describe your current governance approach.'
    return next
  }

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    const next = validate()
    setErrors(next)
    if (Object.keys(next).length) {
      setConfirmed(false)
      return
    }
    setConfirmed(true)
  }

  return (
    <Section
      id="contact"
      dark
      eyebrow="Next step"
      title="Build a clearer, more accountable view of enterprise access"
      lead="Explore how MTX and Oleria can help your organization understand access relationships, identify identity-security concerns, improve reviews and coordinate remediation."
    >
      <div className="cta-band">
        <div className="stack">
          <a className="btn btn--primary" href="#contact-form">
            Request an Identity Security Demonstration
          </a>
          <a className="btn btn--secondary" href="#contact-form">
            Schedule an Access Posture Assessment
          </a>
          <a className="btn btn--secondary" href="#contact-form">
            Discuss an Identity Governance Roadmap
          </a>
          <p className="note" style={{ color: '#c5d0dc' }}>
            Recommended tagline: Understand access. Reduce unnecessary privilege. Govern identity
            risk.
          </p>
        </div>

        <form id="contact-form" className="panel" onSubmit={onSubmit} noValidate>
          <h3 className="panel__title">Local demonstration request</h3>
          <p className="note">
            Submitted values stay in your browser session. Nothing is transmitted to a server.
          </p>
          <div className="form-grid" style={{ marginTop: '1rem' }}>
            {(
              [
                ['name', 'Name', 'text'],
                ['organization', 'Organization', 'text'],
                ['role', 'Role', 'text'],
                ['email', 'Email', 'email'],
              ] as const
            ).map(([key, label, type]) => (
              <div className="form-field" key={key}>
                <label htmlFor={key}>{label}</label>
                <input
                  id={key}
                  type={type}
                  value={form[key]}
                  onChange={(e) => update(key, e.target.value)}
                  aria-invalid={Boolean(errors[key])}
                  aria-describedby={errors[key] ? `${key}-error` : undefined}
                  required
                />
                {errors[key] ? (
                  <span id={`${key}-error`} className="error">
                    {errors[key]}
                  </span>
                ) : null}
              </div>
            ))}

            <div className="form-field form-field--full">
              <label htmlFor="environment">Identity environment</label>
              <input
                id="environment"
                value={form.environment}
                onChange={(e) => update('environment', e.target.value)}
                aria-invalid={Boolean(errors.environment)}
                required
              />
              {errors.environment ? <span className="error">{errors.environment}</span> : null}
            </div>

            <div className="form-field">
              <label htmlFor="concern">Primary concern</label>
              <select
                id="concern"
                value={form.concern}
                onChange={(e) => update('concern', e.target.value)}
                aria-invalid={Boolean(errors.concern)}
                required
              >
                <option value="">Select a concern</option>
                <option>Access visibility</option>
                <option>Access reviews</option>
                <option>Non-human identities</option>
                <option>AI agent permissions</option>
                <option>Remediation governance</option>
                <option>External access</option>
              </select>
              {errors.concern ? <span className="error">{errors.concern}</span> : null}
            </div>

            <div className="form-field">
              <label htmlFor="governance">Current governance approach</label>
              <input
                id="governance"
                value={form.governance}
                onChange={(e) => update('governance', e.target.value)}
                aria-invalid={Boolean(errors.governance)}
                required
              />
              {errors.governance ? <span className="error">{errors.governance}</span> : null}
            </div>

            <div className="form-field form-field--full">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                value={form.message}
                onChange={(e) => update('message', e.target.value)}
              />
            </div>
          </div>
          <button type="submit" className="btn btn--primary" style={{ marginTop: '1rem' }}>
            Submit locally
          </button>
          {confirmed ? (
            <p className="badge badge--green" role="status" style={{ marginTop: '0.75rem' }}>
              Local confirmation: your demonstration request was recorded in this browser only.
            </p>
          ) : null}
        </form>
      </div>
    </Section>
  )
}
