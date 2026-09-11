/** Fictional illustrative sample data for the MTX Identity Security & Governance prototype.
 *  No real identities, organizations, or access relationships are represented.
 */

export type IdentityType = 'human' | 'non-human' | 'ai' | 'external'
export type ResourceType = 'saas' | 'data' | 'cloud' | 'admin' | 'dev' | 'analytics'
export type UsageStatus = 'active' | 'dormant' | 'unused' | 'unknown'
export type ReviewStatus = 'not-started' | 'in-review' | 'keep' | 'reduce' | 'revoke' | 'exception'
export type RiskPriority = 'low' | 'medium' | 'high' | 'critical'
export type AccessLevel = 'read' | 'write' | 'admin' | 'privileged' | 'tool'

export interface IdentityNode {
  id: string
  name: string
  type: IdentityType
  role: string
  businessUnit: string
  owner: string
  purpose: string
  lifecycle: string
  credentials: string
}

export interface ResourceNode {
  id: string
  name: string
  type: ResourceType
  owner: string
  sensitivity: 'standard' | 'sensitive' | 'highly-sensitive'
  businessUnit: string
}

export interface AccessRelationship {
  id: string
  identityId: string
  resourceId: string
  accessPath: string
  pathType: 'direct' | 'group-inherited' | 'role-based' | 'external-sharing' | 'service-account' | 'agent-tool' | 'privileged'
  permission: string
  accessLevel: AccessLevel
  lastObservedUse: string
  usageStatus: UsageStatus
  usageFrequency: string
  identityOwner: string
  resourceOwner: string
  recommendation: string
  reviewStatus: ReviewStatus
  riskPriority: RiskPriority
  remediationOption: string
  dormant?: boolean
}

export const identities: IdentityNode[] = [
  {
    id: 'maya',
    name: 'Maya Chen',
    type: 'human',
    role: 'Program Analyst',
    businessUnit: 'Program Delivery',
    owner: 'Jordan Hale (manager)',
    purpose: 'Workforce analysis and reporting',
    lifecycle: 'Active employee',
    credentials: 'Workforce identity provider account',
  },
  {
    id: 'daniel',
    name: 'Daniel Brooks',
    type: 'external',
    role: 'Contractor',
    businessUnit: 'Program Delivery',
    owner: 'Jordan Hale (engagement owner)',
    purpose: 'Temporary analytics support',
    lifecycle: 'External engagement — end date recorded',
    credentials: 'Guest / federated account',
  },
  {
    id: 'elena',
    name: 'Elena Ruiz',
    type: 'human',
    role: 'Finance Manager',
    businessUnit: 'Finance',
    owner: 'Priya Natarajan (manager)',
    purpose: 'Finance operations and approvals',
    lifecycle: 'Active employee',
    credentials: 'Workforce identity provider account',
  },
  {
    id: 'svc-integration',
    name: 'Integration Service Account',
    type: 'non-human',
    role: 'Service account',
    businessUnit: 'Platform Engineering',
    owner: 'Sam Okonkwo',
    purpose: 'Application-to-application data exchange',
    lifecycle: 'Active — owner confirmed',
    credentials: 'Client credential / certificate',
  },
  {
    id: 'svc-reporting',
    name: 'Reporting Automation',
    type: 'non-human',
    role: 'Automation identity',
    businessUnit: 'Finance',
    owner: 'Unconfirmed',
    purpose: 'Scheduled finance report generation',
    lifecycle: 'Active — ownership review required',
    credentials: 'API token',
  },
  {
    id: 'svc-deploy',
    name: 'Deployment Pipeline Identity',
    type: 'non-human',
    role: 'Workload identity',
    businessUnit: 'Platform Engineering',
    owner: 'Alex Kim',
    purpose: 'CI/CD deployment actions',
    lifecycle: 'Active',
    credentials: 'Workload identity federation',
  },
  {
    id: 'ai-doc',
    name: 'Document Review Agent',
    type: 'ai',
    role: 'AI agent',
    businessUnit: 'Operations',
    owner: 'Nina Patel',
    purpose: 'Summarize approved document sets',
    lifecycle: 'Pilot',
    credentials: 'Agent service account + tool grants',
  },
  {
    id: 'ai-knowledge',
    name: 'Knowledge Assistant',
    type: 'ai',
    role: 'Copilot / assistant',
    businessUnit: 'Operations',
    owner: 'Nina Patel',
    purpose: 'Answer internal knowledge questions',
    lifecycle: 'Active',
    credentials: 'Delegated permissions',
  },
  {
    id: 'ai-servicedesk',
    name: 'Service Desk Agent',
    type: 'ai',
    role: 'Autonomous workflow agent',
    businessUnit: 'IT Service',
    owner: 'Chris Alvarez',
    purpose: 'Draft service-desk responses and triage',
    lifecycle: 'Active',
    credentials: 'Agent tools + service account',
  },
]

export const resources: ResourceNode[] = [
  {
    id: 'finance-ws',
    name: 'Finance Workspace',
    type: 'saas',
    owner: 'Elena Ruiz',
    sensitivity: 'highly-sensitive',
    businessUnit: 'Finance',
  },
  {
    id: 'constituent',
    name: 'Constituent Records',
    type: 'data',
    owner: 'Records Steward Team',
    sensitivity: 'highly-sensitive',
    businessUnit: 'Program Delivery',
  },
  {
    id: 'cloud-storage',
    name: 'Cloud Storage',
    type: 'cloud',
    owner: 'Platform Engineering',
    sensitivity: 'sensitive',
    businessUnit: 'Platform Engineering',
  },
  {
    id: 'analytics',
    name: 'Analytics Platform',
    type: 'analytics',
    owner: 'Analytics Leads',
    sensitivity: 'sensitive',
    businessUnit: 'Program Delivery',
  },
  {
    id: 'source-repo',
    name: 'Source Repository',
    type: 'dev',
    owner: 'Alex Kim',
    sensitivity: 'sensitive',
    businessUnit: 'Platform Engineering',
  },
  {
    id: 'admin-console',
    name: 'Administrative Console',
    type: 'admin',
    owner: 'Identity Operations',
    sensitivity: 'highly-sensitive',
    businessUnit: 'Security',
  },
]

export const relationships: AccessRelationship[] = [
  {
    id: 'rel-1',
    identityId: 'maya',
    resourceId: 'analytics',
    accessPath: 'Direct assignment → Analytics Contributor',
    pathType: 'direct',
    permission: 'Contributor',
    accessLevel: 'write',
    lastObservedUse: '2 days ago',
    usageStatus: 'active',
    usageFrequency: 'Weekly',
    identityOwner: 'Jordan Hale',
    resourceOwner: 'Analytics Leads',
    recommendation: 'Keep — recent observed use aligns with role',
    reviewStatus: 'not-started',
    riskPriority: 'low',
    remediationOption: 'No action suggested',
  },
  {
    id: 'rel-2',
    identityId: 'maya',
    resourceId: 'cloud-storage',
    accessPath: 'Group: Program Analysts → Nested: Storage Readers',
    pathType: 'group-inherited',
    permission: 'Read',
    accessLevel: 'read',
    lastObservedUse: '45 days ago',
    usageStatus: 'dormant',
    usageFrequency: 'Rare',
    identityOwner: 'Jordan Hale',
    resourceOwner: 'Platform Engineering',
    recommendation: 'Review — limited observed use; confirm business need',
    reviewStatus: 'in-review',
    riskPriority: 'medium',
    remediationOption: 'Reduce or revoke after authorized review',
    dormant: true,
  },
  {
    id: 'rel-3',
    identityId: 'daniel',
    resourceId: 'constituent',
    accessPath: 'Group: Temporary Analytics → Constituent Read',
    pathType: 'group-inherited',
    permission: 'Read PII fields',
    accessLevel: 'read',
    lastObservedUse: '1 day ago',
    usageStatus: 'active',
    usageFrequency: 'Recently resumed',
    identityOwner: 'Jordan Hale',
    resourceOwner: 'Records Steward Team',
    recommendation: 'Review urgently — dormant external account became active',
    reviewStatus: 'in-review',
    riskPriority: 'high',
    remediationOption: 'Disable account or remove group membership pending investigation',
  },
  {
    id: 'rel-4',
    identityId: 'daniel',
    resourceId: 'analytics',
    accessPath: 'External sharing link + guest membership',
    pathType: 'external-sharing',
    permission: 'Viewer',
    accessLevel: 'read',
    lastObservedUse: '18 days ago',
    usageStatus: 'dormant',
    usageFrequency: 'Occasional',
    identityOwner: 'Jordan Hale',
    resourceOwner: 'Analytics Leads',
    recommendation: 'Confirm engagement still requires access',
    reviewStatus: 'not-started',
    riskPriority: 'medium',
    remediationOption: 'Revoke external share if engagement ended',
    dormant: true,
  },
  {
    id: 'rel-5',
    identityId: 'elena',
    resourceId: 'finance-ws',
    accessPath: 'Role: Finance Manager → Workspace Admin',
    pathType: 'role-based',
    permission: 'Admin',
    accessLevel: 'admin',
    lastObservedUse: 'Today',
    usageStatus: 'active',
    usageFrequency: 'Daily',
    identityOwner: 'Priya Natarajan',
    resourceOwner: 'Elena Ruiz',
    recommendation: 'Keep — role-aligned privileged access with active use',
    reviewStatus: 'keep',
    riskPriority: 'low',
    remediationOption: 'Maintain; continue periodic privileged review',
  },
  {
    id: 'rel-6',
    identityId: 'elena',
    resourceId: 'admin-console',
    accessPath: 'Privileged role assignment',
    pathType: 'privileged',
    permission: 'Identity admin (limited)',
    accessLevel: 'privileged',
    lastObservedUse: 'No observed use in 90 days',
    usageStatus: 'unused',
    usageFrequency: 'None observed',
    identityOwner: 'Priya Natarajan',
    resourceOwner: 'Identity Operations',
    recommendation: 'Review — privileged permission without observed use',
    reviewStatus: 'not-started',
    riskPriority: 'high',
    remediationOption: 'Reduce privilege or convert to break-glass if supported',
  },
  {
    id: 'rel-7',
    identityId: 'svc-integration',
    resourceId: 'cloud-storage',
    accessPath: 'Service-account grant',
    pathType: 'service-account',
    permission: 'Read/Write objects',
    accessLevel: 'write',
    lastObservedUse: '3 hours ago',
    usageStatus: 'active',
    usageFrequency: 'Continuous batch jobs',
    identityOwner: 'Sam Okonkwo',
    resourceOwner: 'Platform Engineering',
    recommendation: 'Keep with owner attestation',
    reviewStatus: 'keep',
    riskPriority: 'low',
    remediationOption: 'No action suggested',
  },
  {
    id: 'rel-8',
    identityId: 'svc-reporting',
    resourceId: 'finance-ws',
    accessPath: 'Service-account role → Finance reporting',
    pathType: 'service-account',
    permission: 'Export reports',
    accessLevel: 'privileged',
    lastObservedUse: '7 days ago',
    usageStatus: 'active',
    usageFrequency: 'Weekly',
    identityOwner: 'Unconfirmed',
    resourceOwner: 'Elena Ruiz',
    recommendation: 'Assign confirmed owner before broader privilege changes',
    reviewStatus: 'in-review',
    riskPriority: 'high',
    remediationOption: 'Assign owner; then review privilege scope',
  },
  {
    id: 'rel-9',
    identityId: 'svc-deploy',
    resourceId: 'source-repo',
    accessPath: 'Workload identity → Deploy role',
    pathType: 'role-based',
    permission: 'Deploy',
    accessLevel: 'privileged',
    lastObservedUse: '5 hours ago',
    usageStatus: 'active',
    usageFrequency: 'Per pipeline run',
    identityOwner: 'Alex Kim',
    resourceOwner: 'Alex Kim',
    recommendation: 'Keep — purpose-aligned privileged workload access',
    reviewStatus: 'keep',
    riskPriority: 'medium',
    remediationOption: 'Continue least-privilege pipeline scoping',
  },
  {
    id: 'rel-10',
    identityId: 'ai-doc',
    resourceId: 'constituent',
    accessPath: 'Agent tool grant → Records retrieval tool',
    pathType: 'agent-tool',
    permission: 'Retrieve documents',
    accessLevel: 'tool',
    lastObservedUse: '4 days ago',
    usageStatus: 'active',
    usageFrequency: 'On demand',
    identityOwner: 'Nina Patel',
    resourceOwner: 'Records Steward Team',
    recommendation: 'Review tool scope against approved purpose',
    reviewStatus: 'in-review',
    riskPriority: 'high',
    remediationOption: 'Reduce tool grants to approved document sets',
  },
  {
    id: 'rel-11',
    identityId: 'ai-knowledge',
    resourceId: 'cloud-storage',
    accessPath: 'Delegated permissions → Knowledge corpus',
    pathType: 'agent-tool',
    permission: 'Search indexed content',
    accessLevel: 'read',
    lastObservedUse: '1 day ago',
    usageStatus: 'active',
    usageFrequency: 'Daily',
    identityOwner: 'Nina Patel',
    resourceOwner: 'Platform Engineering',
    recommendation: 'Keep within approved corpus boundaries',
    reviewStatus: 'keep',
    riskPriority: 'medium',
    remediationOption: 'Monitor corpus expansion events',
  },
  {
    id: 'rel-12',
    identityId: 'ai-servicedesk',
    resourceId: 'admin-console',
    accessPath: 'Agent tool + elevated service account',
    pathType: 'privileged',
    permission: 'Read ticket admin metadata',
    accessLevel: 'privileged',
    lastObservedUse: 'No observed use in 60 days',
    usageStatus: 'unused',
    usageFrequency: 'None observed',
    identityOwner: 'Chris Alvarez',
    resourceOwner: 'Identity Operations',
    recommendation: 'Review — broad agent permission may exceed approved purpose',
    reviewStatus: 'not-started',
    riskPriority: 'critical',
    remediationOption: 'Remove admin-console tool access pending owner decision',
  },
]

export const challenges = [
  {
    id: 'fragmented',
    title: 'Fragmented access information',
    challenge:
      'Identity and entitlement information may be spread across directories, cloud platforms, SaaS applications, groups, roles and custom systems.',
    response: 'Normalize available access relationships into a connected identity graph.',
    affectedRoles: ['IAM leaders', 'Security architects', 'Application owners'],
    evidence: ['Connected-system entitlements', 'Group memberships', 'Role assignments'],
    additionalContext: ['Systems not yet connected', 'Custom entitlement models awaiting mapping'],
    capability: 'Identity graph normalization across connected sources',
    measure: 'Share of priority systems represented in the access graph',
  },
  {
    id: 'excessive',
    title: 'Excessive or unused access',
    challenge:
      'Permissions may remain after job changes, project completion or extended periods without observed use.',
    response: 'Combine entitlement and available usage context to identify access requiring review.',
    affectedRoles: ['Access reviewers', 'Managers', 'Privileged-access teams'],
    evidence: ['Provisioned permissions', 'Available usage signals', 'Role change history where available'],
    additionalContext: ['Business need not visible in usage alone', 'Seasonal or break-glass use'],
    capability: 'Usage-aware review recommendations',
    measure: 'Privileged relationships queued for authorized review',
  },
  {
    id: 'inherited',
    title: 'Inherited and indirect permissions',
    challenge:
      'Access may be inherited through nested groups, roles, application settings and resource-sharing relationships.',
    response: 'Show direct and indirect access paths so reviewers can understand how an identity reaches a resource.',
    affectedRoles: ['IAM engineers', 'Application owners', 'Auditors'],
    evidence: ['Nested group paths', 'Role inheritance', 'Sharing relationships'],
    additionalContext: ['Incomplete group nesting in source systems', 'Shadow IT sharing'],
    capability: 'Access-path mapping for connected relationships',
    measure: 'Indirect paths explained in review packages',
  },
  {
    id: 'nonhuman',
    title: 'Non-human identity growth',
    challenge:
      'Service accounts, API identities, workloads, bots and automation may retain broad permissions with unclear ownership.',
    response:
      'Connect non-human identities with owners, credentials, resources, usage and review status where data is available.',
    affectedRoles: ['Platform engineering', 'Security operations', 'Application owners'],
    evidence: ['Service-account inventory', 'Credential metadata', 'Owner fields where populated'],
    additionalContext: ['Identities without authoritative owners', 'Secrets outside connected vaults'],
    capability: 'Non-human identity inventory and ownership review',
    measure: 'Non-human identities with confirmed owners',
  },
  {
    id: 'external',
    title: 'External and third-party access',
    challenge:
      'Contractors, partners and former collaborators may retain access after their business need changes.',
    response: 'Identify external access relationships and route them to the relevant business or resource owner.',
    affectedRoles: ['Engagement owners', 'Procurement partners', 'Compliance officials'],
    evidence: ['Guest/external account flags', 'Engagement end dates where available', 'External shares'],
    additionalContext: ['Partner identity providers not connected', 'Informal sharing channels'],
    capability: 'External access identification and review routing',
    measure: 'External relationships with assigned reviewers',
  },
  {
    id: 'manual',
    title: 'Manual access reviews',
    challenge:
      'Reviewers may receive entitlement lists without the usage, peer, ownership or business context needed for a reasoned decision.',
    response: 'Present access context and recommendations within a governed review workflow.',
    affectedRoles: ['Access reviewers', 'Resource owners', 'Internal auditors'],
    evidence: ['Review queue items', 'Decision history', 'Exception records'],
    additionalContext: ['Peer baselines needing local tuning', 'Policy mappings awaiting confirmation'],
    capability: 'Governed, context-rich access reviews',
    measure: 'Reviews completed with recorded rationale',
  },
]

export const lifecycleStages = [
  {
    id: 'connect',
    title: 'Connect',
    summary: 'Bring selected identity and resource systems into scope through available connectors and permissions.',
    items: [
      'Identity providers',
      'Directories',
      'SaaS applications',
      'Cloud platforms',
      'On-premises applications',
      'Custom applications',
      'HR systems',
      'PAM',
      'IGA',
      'Data platforms',
    ],
  },
  {
    id: 'understand',
    title: 'Understand',
    summary: 'Normalize identities, entitlements, ownership and available usage into a connected view.',
    items: [
      'Identity',
      'Account',
      'Group',
      'Role',
      'Permission',
      'Resource',
      'Access path',
      'Usage',
      'Ownership',
      'Authentication posture',
    ],
  },
  {
    id: 'assess',
    title: 'Assess',
    summary: 'Surface posture findings that may require investigation or review based on connected data.',
    items: [
      'Dormant account',
      'Unused permission',
      'Excessive privilege',
      'Orphaned account',
      'External sharing',
      'Missing owner',
      'Authentication gap',
      'Privilege accumulation',
      'Conflicting access',
      'Non-human identity risk',
    ],
  },
  {
    id: 'review',
    title: 'Review',
    summary: 'Equip authorized reviewers with context, recommendations and decision controls.',
    items: [
      'Reviewer',
      'Business context',
      'Usage context',
      'Peer comparison',
      'Recommendation',
      'Evidence',
      'Decision',
      'Comments',
      'Escalation',
    ],
  },
  {
    id: 'remediate',
    title: 'Remediate',
    summary: 'Initiate authorized actions subject to connector capability, permissions and workflow configuration.',
    items: [
      'Revoke access',
      'Reduce permission',
      'Remove group membership',
      'Disable account',
      'Assign owner',
      'Correct configuration',
      'Create ticket',
      'Record exception',
    ],
  },
  {
    id: 'verify',
    title: 'Verify',
    summary: 'Confirm outcomes in authoritative systems and retain audit evidence.',
    items: [
      'Connector result',
      'Authoritative-system confirmation',
      'Residual access',
      'Evidence',
      'Closure review',
      'Reopened finding',
      'Audit history',
    ],
  },
]

export const explorerQueries = [
  {
    id: 'who-resource',
    question: 'Who has access to this resource?',
    focus: 'Finance Workspace',
    results: [
      {
        subject: 'Elena Ruiz',
        detail: 'Role-based Admin',
        evidence: 'Finance Manager role → Workspace Admin',
        context: 'Daily observed use',
      },
      {
        subject: 'Reporting Automation',
        detail: 'Service-account export',
        evidence: 'Service role → Export reports',
        context: 'Owner unconfirmed',
      },
    ],
  },
  {
    id: 'unused-priv',
    question: 'Which privileged permissions appear unused?',
    focus: 'Privileged relationships',
    results: [
      {
        subject: 'Elena Ruiz → Administrative Console',
        detail: 'Limited identity admin',
        evidence: 'No observed use in 90 days',
        context: 'Usage is review context only',
      },
      {
        subject: 'Service Desk Agent → Administrative Console',
        detail: 'Read ticket admin metadata',
        evidence: 'No observed use in 60 days',
        context: 'May exceed approved agent purpose',
      },
    ],
  },
  {
    id: 'contractors',
    question: 'Which contractors retain access?',
    focus: 'External identities',
    results: [
      {
        subject: 'Daniel Brooks',
        detail: 'Constituent Records via Temporary Analytics group',
        evidence: 'Guest account active; engagement end date recorded',
        context: 'Recently resumed activity after dormancy',
      },
    ],
  },
  {
    id: 'no-owner',
    question: 'Which accounts have no confirmed owner?',
    focus: 'Ownership gaps',
    results: [
      {
        subject: 'Reporting Automation',
        detail: 'Finance Workspace export privilege',
        evidence: 'Owner field empty / unconfirmed',
        context: 'Suggested reviewer: Finance resource owner',
      },
    ],
  },
  {
    id: 'nhi-elevated',
    question: 'Which non-human identities have elevated access?',
    focus: 'Non-human privileged paths',
    results: [
      {
        subject: 'Deployment Pipeline Identity',
        detail: 'Deploy on Source Repository',
        evidence: 'Workload identity → Deploy role',
        context: 'Owner confirmed',
      },
      {
        subject: 'Reporting Automation',
        detail: 'Export reports',
        evidence: 'Service-account privileged path',
        context: 'Ownership review required',
      },
    ],
  },
  {
    id: 'ai-sensitive',
    question: 'Which AI agents can access sensitive resources?',
    focus: 'AI agent tool grants',
    results: [
      {
        subject: 'Document Review Agent',
        detail: 'Constituent Records retrieval tool',
        evidence: 'Agent tool grant',
        context: 'Purpose: summarize approved document sets',
      },
      {
        subject: 'Service Desk Agent',
        detail: 'Administrative Console metadata',
        evidence: 'Elevated tool + service account',
        context: 'Broad permission review recommended',
      },
    ],
  },
  {
    id: 'how-access',
    question: 'How did this identity receive access?',
    focus: 'Maya Chen → Cloud Storage',
    results: [
      {
        subject: 'Maya Chen',
        detail: 'Inherited read access',
        evidence: 'Program Analysts → nested Storage Readers',
        context: 'Last observed use 45 days ago',
      },
    ],
  },
  {
    id: 'group-path',
    question: 'Which users can reach this resource through a group?',
    focus: 'Constituent Records',
    results: [
      {
        subject: 'Daniel Brooks',
        detail: 'Temporary Analytics group',
        evidence: 'Group-inherited Read PII fields',
        context: 'External contractor',
      },
    ],
  },
]

export const findings = [
  {
    id: 'unused-priv',
    title: 'Unused privileged access',
    summary: 'A privileged permission has no observed use during the selected review period.',
    observation: 'Elena Ruiz holds limited identity-admin permission on Administrative Console.',
    evidence: ['Permission provisioned', 'No observed use in 90 days', 'Role: Finance Manager'],
    unknown: ['Whether break-glass procedures rely on this grant', 'Seasonal finance-close needs'],
    impact: 'Privileged standing access may exceed current need if unused.',
    reviewer: 'Identity Operations + Finance manager',
    action: 'Reduce privilege or document exception after authorized review',
    status: 'New',
  },
  {
    id: 'dormant-ext',
    title: 'Dormant external account',
    summary: 'An external identity remains active after a project milestone.',
    observation: 'Daniel Brooks retained guest access after the recorded engagement milestone.',
    evidence: ['External account flag', 'Engagement end date on file', 'Recent resumed activity'],
    unknown: ['Whether a contract extension exists outside connected HR data'],
    impact: 'External access to sensitive records may continue beyond business need.',
    reviewer: 'Engagement owner (Jordan Hale)',
    action: 'Confirm engagement status; revoke or time-bound if unsupported',
    status: 'Reviewing',
  },
  {
    id: 'orphan-svc',
    title: 'Orphaned service account',
    summary: 'A non-human account has no confirmed owner.',
    observation: 'Reporting Automation can export Finance Workspace reports without a confirmed owner.',
    evidence: ['Owner field unconfirmed', 'Weekly export activity', 'Privileged export permission'],
    unknown: ['Original requesting team', 'Secret rotation owner'],
    impact: 'Remediation and accountability are harder without ownership.',
    reviewer: 'Elena Ruiz (resource owner)',
    action: 'Assign owner, then review privilege scope',
    status: 'Reviewing',
  },
  {
    id: 'nested-group',
    title: 'Nested group access',
    summary: 'An identity receives access through multiple group relationships.',
    observation: 'Maya Chen reaches Cloud Storage through Program Analysts → Storage Readers.',
    evidence: ['Nested group path', 'Read permission', '45 days since last observed use'],
    unknown: ['Whether nested membership is still required for current projects'],
    impact: 'Indirect paths can obscure standing access during reviews.',
    reviewer: 'Jordan Hale + Platform Engineering',
    action: 'Confirm path necessity; simplify membership if appropriate',
    status: 'New',
  },
  {
    id: 'auth-gap',
    title: 'Authentication posture gap',
    summary: 'A connected system shows an identity configuration requiring review.',
    observation: 'Guest authentication posture for Daniel Brooks lacks a recent strong-authentication signal in connected data.',
    evidence: ['External identity', 'Authentication posture field incomplete', 'Sensitive resource access'],
    unknown: ['Controls enforced outside connected telemetry'],
    impact: 'Authentication gaps can increase exposure for retained external access.',
    reviewer: 'IAM + engagement owner',
    action: 'Require stronger authentication or restrict access per policy',
    status: 'New',
  },
  {
    id: 'ai-broad',
    title: 'Broad AI-agent permissions',
    summary: 'An AI agent can access more tools or data than its approved purpose appears to require.',
    observation: 'Service Desk Agent retains Administrative Console tool access with no recent observed use.',
    evidence: ['Agent tool grant', 'Approved purpose: triage and drafting', 'Unused privileged path'],
    unknown: ['Whether a future workflow depends on admin metadata'],
    impact: 'Excess agent permissions can expand blast radius if the agent account is misused.',
    reviewer: 'Chris Alvarez (AI-agent owner)',
    action: 'Remove or reduce admin-console tool access pending decision',
    status: 'New',
  },
]

export const reviewItem = {
  identity: 'Maya Chen',
  role: 'Program Analyst',
  manager: 'Jordan Hale',
  resource: 'Cloud Storage',
  permission: 'Read',
  accessPath: 'Group: Program Analysts → Nested: Storage Readers',
  lastObservedUse: '45 days ago',
  usageFrequency: 'Rare',
  peerComparison: 'Most peer analysts show monthly or greater observed use',
  resourceSensitivity: 'Sensitive',
  recommendation: 'Review — limited observed use; confirm business need before keeping',
}

export const identityCategories = {
  human: {
    title: 'Human identities',
    types: ['Employees', 'Contractors', 'Partners', 'Guests', 'Administrators', 'Managers'],
    examples: [
      {
        name: 'Maya Chen',
        owner: 'Jordan Hale',
        purpose: 'Program analysis',
        resources: ['Analytics Platform', 'Cloud Storage'],
        permissions: ['Contributor', 'Read'],
        credentials: 'Workforce IdP',
        usage: 'Mixed active / dormant',
        review: 'In review',
        lifecycle: 'Active employee',
        findings: ['Nested group access'],
      },
      {
        name: 'Elena Ruiz',
        owner: 'Priya Natarajan',
        purpose: 'Finance operations',
        resources: ['Finance Workspace', 'Administrative Console'],
        permissions: ['Admin', 'Limited identity admin'],
        credentials: 'Workforce IdP',
        usage: 'Active on finance; unused on admin console',
        review: 'Privileged review queued',
        lifecycle: 'Active employee',
        findings: ['Unused privileged access'],
      },
    ],
  },
  nonHuman: {
    title: 'Non-human identities',
    types: ['Service accounts', 'API identities', 'Workloads', 'Bots', 'Automation', 'Integration users'],
    examples: [
      {
        name: 'Reporting Automation',
        owner: 'Unconfirmed',
        purpose: 'Finance report export',
        resources: ['Finance Workspace'],
        permissions: ['Export reports'],
        credentials: 'API token',
        usage: 'Weekly',
        review: 'Ownership review',
        lifecycle: 'Active — owner required',
        findings: ['Orphaned service account'],
      },
      {
        name: 'Deployment Pipeline Identity',
        owner: 'Alex Kim',
        purpose: 'CI/CD deploy',
        resources: ['Source Repository'],
        permissions: ['Deploy'],
        credentials: 'Workload identity federation',
        usage: 'Per pipeline run',
        review: 'Keep',
        lifecycle: 'Active',
        findings: ['Elevated workload access — monitored'],
      },
    ],
  },
  ai: {
    title: 'AI identities',
    types: [
      'AI agents',
      'Copilots',
      'Autonomous workflows',
      'Agent service accounts',
      'Model-connected tools',
      'Delegated permissions',
    ],
    examples: [
      {
        name: 'Document Review Agent',
        owner: 'Nina Patel',
        purpose: 'Summarize approved documents',
        resources: ['Constituent Records (tool)'],
        permissions: ['Retrieve documents'],
        credentials: 'Agent service account + tools',
        usage: 'On demand',
        review: 'Tool-scope review',
        lifecycle: 'Pilot',
        findings: ['Sensitive tool grant'],
      },
      {
        name: 'Service Desk Agent',
        owner: 'Chris Alvarez',
        purpose: 'Draft and triage service desk work',
        resources: ['Administrative Console'],
        permissions: ['Read ticket admin metadata'],
        credentials: 'Agent tools + service account',
        usage: 'None observed in 60 days',
        review: 'Not started',
        lifecycle: 'Active',
        findings: ['Broad AI-agent permissions'],
      },
    ],
  },
}

export const accessRequest = {
  requester: 'Maya Chen',
  resource: 'Finance Workspace',
  permission: 'Read finance dashboards',
  purpose: 'Quarterly program-cost analysis requested by Finance',
  duration: '30 days',
  currentAccess: 'No direct Finance Workspace access',
  peerContext: 'Two peer analysts hold time-limited read access this quarter',
  owner: 'Elena Ruiz',
  approvalRoute: 'Resource owner → Finance manager',
  expiration: 'Requested end date + automated reminder (if supported)',
}

export const incidentSteps = [
  {
    step: 1,
    title: 'Identity activity observed',
    detail: 'Dormant contractor account shows new sign-in and resource access.',
  },
  {
    step: 2,
    title: 'Account and owner context retrieved',
    detail: 'Daniel Brooks — contractor; engagement owner Jordan Hale; end date on file.',
  },
  {
    step: 3,
    title: 'Access path mapped',
    detail: 'Access reached Constituent Records through Temporary Analytics group membership.',
  },
  {
    step: 4,
    title: 'Related resource access reviewed',
    detail: 'External share on Analytics Platform also present.',
  },
  {
    step: 5,
    title: 'Analyst assesses the event',
    detail: 'Activity may be legitimate extension or unexpected reuse; escalate for decision.',
  },
  {
    step: 6,
    title: 'Authorized response selected',
    detail: 'Response options depend on integrations, permissions and organizational policy.',
  },
  {
    step: 7,
    title: 'Remediation result verified',
    detail: 'Connector or ticket outcome checked for residual access.',
  },
  {
    step: 8,
    title: 'Investigation record retained',
    detail: 'Timeline, evidence and actions retained for audit review.',
  },
]

export const incidentResponses = [
  'Continue monitoring',
  'Notify owner',
  'Revoke session',
  'Remove group membership',
  'Disable account',
  'Create incident ticket',
  'Require additional authentication',
]

export type RemediationStatus =
  | 'New'
  | 'Reviewing'
  | 'Approved'
  | 'Scheduled'
  | 'In progress'
  | 'Awaiting connector result'
  | 'Ready for verification'
  | 'Closed'
  | 'Exception active'
  | 'Reopened'

export interface RemediationItem {
  id: string
  finding: string
  identity: string
  resource: string
  priority: RiskPriority
  owner: string
  recommendedAction: string
  approvalRequirement: string
  connector: string
  status: RemediationStatus
  verification: string
  exception: string
  lastUpdate: string
  audit: string[]
}

export const remediationItems: RemediationItem[] = [
  {
    id: 'rem-1',
    finding: 'Unused privileged access',
    identity: 'Elena Ruiz',
    resource: 'Administrative Console',
    priority: 'high',
    owner: 'Identity Operations',
    recommendedAction: 'Reduce privileged permission',
    approvalRequirement: 'IAM change approval',
    connector: 'Directory / admin connector (illustrative)',
    status: 'Reviewing',
    verification: 'Pending',
    exception: 'None',
    lastUpdate: 'Illustrative — today',
    audit: ['Finding opened', 'Assigned to Identity Operations', 'Awaiting reviewer decision'],
  },
  {
    id: 'rem-2',
    finding: 'Orphaned service account',
    identity: 'Reporting Automation',
    resource: 'Finance Workspace',
    priority: 'high',
    owner: 'Elena Ruiz',
    recommendedAction: 'Assign owner then scope review',
    approvalRequirement: 'Resource-owner attestation',
    connector: 'SaaS connector (illustrative)',
    status: 'Approved',
    verification: 'Owner assignment pending connector result',
    exception: 'None',
    lastUpdate: 'Illustrative — yesterday',
    audit: ['Finding opened', 'Owner nomination proposed', 'Approval recorded (simulated)'],
  },
  {
    id: 'rem-3',
    finding: 'Broad AI-agent permissions',
    identity: 'Service Desk Agent',
    resource: 'Administrative Console',
    priority: 'critical',
    owner: 'Chris Alvarez',
    recommendedAction: 'Remove admin-console tool grant',
    approvalRequirement: 'AI-agent owner + security review',
    connector: 'AI platform / tool catalog connector (illustrative)',
    status: 'New',
    verification: 'Not started',
    exception: 'None',
    lastUpdate: 'Illustrative — today',
    audit: ['Finding opened from posture assessment'],
  },
]

export const architecture = {
  identitySources: [
    'Identity providers',
    'Directories',
    'HR systems',
    'IGA',
    'PAM',
    'Authentication platforms',
  ],
  resources: [
    'SaaS applications',
    'Cloud environments',
    'On-premises systems',
    'Custom applications',
    'Data platforms',
    'Development tools',
    'AI platforms',
  ],
  oleriaLayer: [
    'Connector framework',
    'Identity normalization',
    'Access graph',
    'Usage context',
    'Posture findings',
    'Governance workflows',
    'Investigation context',
    'Remediation controls',
  ],
  mtxLayer: [
    'Identity discovery',
    'Architecture',
    'Integration',
    'Governance design',
    'Workflow configuration',
    'Deployment',
    'Change management',
    'Managed operations',
  ],
  experiences: [
    'CISO dashboard',
    'IAM workspace',
    'Access review',
    'Investigation',
    'Remediation',
    'Audit reporting',
  ],
}

export const roleViews = {
  ciso: {
    title: 'CISO',
    panels: [
      'Identity posture',
      'Privileged exposure',
      'External access',
      'Non-human identity risk',
      'AI identity risk',
      'Remediation progress',
    ],
  },
  iam: {
    title: 'IAM leader',
    panels: [
      'Connected systems',
      'Identity coverage',
      'Access paths',
      'Governance workflows',
      'Remediation',
      'Connector health',
    ],
  },
  reviewer: {
    title: 'Access reviewer',
    panels: [
      'Review queue',
      'Usage context',
      'Peer context',
      'Resource ownership',
      'Recommendations',
      'Decision history',
    ],
  },
  owner: {
    title: 'Application or resource owner',
    panels: [
      'Who has access',
      'Permission level',
      'Access path',
      'Last observed use',
      'Review requests',
      'Exceptions',
    ],
  },
  soc: {
    title: 'SOC analyst',
    panels: [
      'Identity findings',
      'Recent activity',
      'Access relationships',
      'Authentication context',
      'Investigation timeline',
      'Response options',
    ],
  },
  auditor: {
    title: 'Auditor or compliance official',
    panels: [
      'Review evidence',
      'Decisions',
      'Exceptions',
      'Remediation history',
      'Access changes',
      'Policy mappings',
    ],
  },
}

export const analyticsData = {
  inventory: [
    { name: 'Human', value: 1280, fill: '#6B8FCE' },
    { name: 'External', value: 146, fill: '#D4A017' },
    { name: 'Non-human', value: 392, fill: '#2EC4B6' },
    { name: 'AI', value: 28, fill: '#8B7EC8' },
    { name: 'No confirmed owner', value: 41, fill: '#C23B3B' },
  ],
  posture: [
    { name: 'Privileged', value: 210 },
    { name: 'Unused', value: 164 },
    { name: 'Dormant', value: 97 },
    { name: 'External sharing', value: 53 },
    { name: 'Auth gaps', value: 38 },
    { name: 'Excessive', value: 121 },
  ],
  governance: [
    { name: 'In progress', value: 64 },
    { name: 'Overdue', value: 18 },
    { name: 'Decisions', value: 240 },
    { name: 'Delegated', value: 27 },
    { name: 'Exceptions', value: 14 },
    { name: 'Expiring', value: 22 },
  ],
  remediation: [
    { name: 'Approved', value: 45 },
    { name: 'Completed', value: 38 },
    { name: 'Verification pending', value: 12 },
    { name: 'Connector failures', value: 3 },
    { name: 'Reopened', value: 5 },
    { name: 'Avg age (days)', value: 9 },
  ],
  coverage: [
    { label: 'Connected systems', value: '24 illustrative' },
    { label: 'Connector health', value: '21 healthy / 3 attention' },
    { label: 'Resources represented', value: '186 illustrative' },
    { label: 'Identity coverage', value: 'Scoped to connected systems' },
    { label: 'Usage-data availability', value: 'Partial by source' },
    { label: 'Data-processing status', value: 'Incremental sync simulated' },
  ],
}

export const governanceTopics = {
  ownership: [
    'Employee manager',
    'Service-account owner',
    'Application owner',
    'Resource owner',
    'AI-agent owner',
    'Review responsibility',
  ],
  decision: [
    'Reviewer authority',
    'Approval routing',
    'Separation of duties',
    'Delegation',
    'Exceptions',
    'Escalation',
  ],
  remediation: [
    'Authorized actions',
    'Protected identities',
    'Connector permissions',
    'Change approval',
    'Rollback',
    'Verification',
  ],
  audit: [
    'Access relationship',
    'Review context',
    'Recommendation',
    'Reviewer decision',
    'Remediation action',
    'Connector response',
    'Configuration change',
  ],
}

export const roadmapPhases = [
  {
    id: 'p1',
    title: 'Phase 1: Establish scope',
    items: [
      'Identify priority systems',
      'Define identity categories',
      'Select risk questions',
      'Establish ownership',
      'Agree on measures',
    ],
  },
  {
    id: 'p2',
    title: 'Phase 2: Connect and map',
    items: [
      'Configure selected connectors',
      'Normalize identity information',
      'Build access relationships',
      'Validate ownership',
      'Assess coverage',
    ],
  },
  {
    id: 'p3',
    title: 'Phase 3: Identify access risk',
    items: [
      'Review dormant accounts',
      'Examine excessive permissions',
      'Identify external access',
      'Assess non-human identities',
      'Prioritize findings',
    ],
  },
  {
    id: 'p4',
    title: 'Phase 4: Operationalize governance',
    items: [
      'Configure access reviews',
      'Establish decisions',
      'Define exceptions',
      'Connect remediation',
      'Validate audit evidence',
    ],
  },
  {
    id: 'p5',
    title: 'Phase 5: Expand and improve',
    items: [
      'Add applications',
      'Add identity categories',
      'Refine policies',
      'Extend remediation',
      'Review posture trends',
      'Introduce supported adaptive capabilities',
    ],
  },
]

export const offeringModel = {
  oleria: [
    'Identity and access graph',
    'Usage-aware access context',
    'Identity-security posture',
    'Governance workflows',
    'Investigation support',
    'Remediation controls',
    'Reporting',
  ],
  implementation: [
    'Identity discovery',
    'Architecture',
    'Connector configuration',
    'Data validation',
    'Governance design',
    'Access-review configuration',
    'Remediation workflow',
    'Testing',
    'Training',
    'Deployment',
  ],
  managed: [
    'Connector monitoring',
    'Posture review',
    'Access-review support',
    'Finding triage',
    'Remediation coordination',
    'Reporting',
    'Governance administration',
    'Service reviews',
  ],
}

export const maturityItems = [
  { capability: 'Identity and access graph for connected systems', status: 'Available' },
  { capability: 'Usage context where source telemetry is connected', status: 'Configured per deployment' },
  { capability: 'Access reviews with recommendations', status: 'Available' },
  { capability: 'Remediation actions via connectors', status: 'Configured per deployment' },
  { capability: 'AI-agent identity governance views', status: 'Early access' },
  { capability: 'Time-boxed / just-in-time access patterns', status: 'Requires validation' },
  { capability: 'Adaptive inline enforcement at every application', status: 'Planned' },
  { capability: 'Managed operations support model', status: 'Requires validation' },
]

export const differentiators = [
  {
    title: 'Connected access context',
    text: 'Bring identity, entitlement, access path, ownership and available usage information into a shared view.',
  },
  {
    title: 'Governance informed by use',
    text: 'Give reviewers additional context when deciding whether access remains appropriate.',
  },
  {
    title: 'Coverage for modern identities',
    text: 'Support human, external, non-human and AI identity governance across connected systems.',
  },
  {
    title: 'Implementation and operating support',
    text: 'Use MTX services to plan integrations, configure governance, support deployment and establish ongoing processes.',
  },
]

export function getIdentity(id: string) {
  return identities.find((i) => i.id === id)
}

export function getResource(id: string) {
  return resources.find((r) => r.id === id)
}
