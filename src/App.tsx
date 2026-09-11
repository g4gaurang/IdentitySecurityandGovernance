import { AccessReview } from './components/AccessReview'
import { AccessRisk } from './components/AccessRisk'
import { AdaptiveAccess } from './components/AdaptiveAccess'
import { Analytics } from './components/Analytics'
import { Architecture } from './components/Architecture'
import { BackToTop } from './components/BackToTop'
import { Challenges } from './components/Challenges'
import { ClosingCta } from './components/ClosingCta'
import { Governance } from './components/Governance'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { IdentityGraph } from './components/IdentityGraph'
import { IdentityTypes } from './components/IdentityTypes'
import { IncidentInvestigation } from './components/IncidentInvestigation'
import { Lifecycle } from './components/Lifecycle'
import { OfferingModel } from './components/OfferingModel'
import { PlatformScope } from './components/PlatformScope'
import { ProductMaturity } from './components/ProductMaturity'
import { RemediationCenter } from './components/RemediationCenter'
import { Roadmap } from './components/Roadmap'
import { RoleExperiences } from './components/RoleExperiences'
import { WhoHasAccess } from './components/WhoHasAccess'
import { WhyMtx } from './components/WhyMtx'

function App() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to main content
      </a>
      <Header />
      <main id="main">
        <div id="top" />
        <Hero />
        <PlatformScope />
        <Challenges />
        <Lifecycle />
        <IdentityGraph />
        <WhoHasAccess />
        <AccessRisk />
        <AccessReview />
        <IdentityTypes />
        <AdaptiveAccess />
        <IncidentInvestigation />
        <RemediationCenter />
        <Architecture />
        <RoleExperiences />
        <Analytics />
        <Governance />
        <Roadmap />
        <OfferingModel />
        <ProductMaturity />
        <WhyMtx />
        <ClosingCta />
      </main>
      <footer className="site-footer">
        <div className="container">
          <p>
            MTX Identity Security &amp; Governance — interactive product prototype for buyer
            conversations. Identities, findings, analytics, and remediation outcomes are fictional
            and illustrative.
          </p>
          <p>
            Partnership naming, Oleria co-branding, managed-service commitments, just-in-time
            availability, and connector claims require MTX and Oleria validation before external
            publication.
          </p>
        </div>
      </footer>
      <BackToTop />
    </>
  )
}

export default App
