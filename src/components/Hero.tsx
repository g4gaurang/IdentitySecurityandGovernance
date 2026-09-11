import {
  ArrowRight,
  Bot,
  Network,
  ShieldCheck,
  UserRound,
  Workflow,
} from 'lucide-react'

export function Hero() {
  return (
    <section id="overview" className="hero" aria-labelledby="hero-title">
      <div className="container hero__grid">
        <div>
          <p className="hero__eyebrow">Adaptive Identity Security and Governance</p>
          <h1 id="hero-title">
            Understand who has access, how they received it, and whether it remains appropriate
          </h1>
          <p className="hero__support">
            Connect identity, entitlement, access-path, ownership, and available usage information
            to support least-privilege decisions and accountable remediation.
          </p>
          <p className="hero__desc">
            MTX Identity Security &amp; Governance helps security and identity teams examine access
            across connected SaaS, cloud, on-premises, and custom applications. It provides context
            for access reviews, posture findings, incident investigations, and remediation workflows
            covering human, non-human, external, and AI identities.
          </p>
          <div className="hero__actions">
            <a className="btn btn--primary" href="#identity-graph">
              Explore the Identity Graph <ArrowRight size={16} aria-hidden="true" />
            </a>
            <a className="btn btn--secondary" href="#access-review">
              Review an Access Decision
            </a>
            <a className="btn btn--secondary" href="#contact">
              Request a Product Demonstration
            </a>
          </div>
        </div>

        <aside className="hero-panel" aria-label="Illustrative identity-security view">
          <div className="hero-panel__label">
            <span>Illustrative identity-security view</span>
            <span className="badge badge--cyan">Fictional sample</span>
          </div>
          <div className="hero-stats">
            <div className="hero-stat">
              <strong>9</strong>
              <span>
                <UserRound size={14} aria-hidden="true" /> Connected identities
              </span>
            </div>
            <div className="hero-stat">
              <strong>3</strong>
              <span>
                <UserRound size={14} aria-hidden="true" /> Human identities
              </span>
            </div>
            <div className="hero-stat">
              <strong>3</strong>
              <span>
                <Workflow size={14} aria-hidden="true" /> Non-human identities
              </span>
            </div>
            <div className="hero-stat">
              <strong>3</strong>
              <span>
                <Bot size={14} aria-hidden="true" /> AI identities
              </span>
            </div>
            <div className="hero-stat">
              <strong>6</strong>
              <span>
                <Network size={14} aria-hidden="true" /> Applications / resources
              </span>
            </div>
            <div className="hero-stat">
              <strong>12</strong>
              <span>
                <Network size={14} aria-hidden="true" /> Access relationships
              </span>
            </div>
            <div className="hero-stat">
              <strong>4</strong>
              <span>
                <ShieldCheck size={14} aria-hidden="true" /> Dormant / unused signals
              </span>
            </div>
            <div className="hero-stat">
              <strong>6</strong>
              <span>Review queue items</span>
            </div>
            <div className="hero-stat">
              <strong>3</strong>
              <span>Remediation statuses tracked</span>
            </div>
            <div className="hero-stat">
              <strong>Scoped</strong>
              <span>Visibility limited to connected systems</span>
            </div>
          </div>
        </aside>
      </div>
    </section>
  )
}
