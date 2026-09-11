import { useMemo, useState } from 'react'
import {
  getIdentity,
  getResource,
  identities,
  relationships,
  resources,
  type AccessRelationship,
} from '../data/sampleData'
import { IllustrativeBadge, Section } from './ui/Section'

const nodePositions: Record<string, { x: number; y: number }> = {
  maya: { x: 90, y: 70 },
  daniel: { x: 90, y: 150 },
  elena: { x: 90, y: 230 },
  'svc-integration': { x: 90, y: 320 },
  'svc-reporting': { x: 90, y: 400 },
  'svc-deploy': { x: 90, y: 480 },
  'ai-doc': { x: 240, y: 110 },
  'ai-knowledge': { x: 240, y: 230 },
  'ai-servicedesk': { x: 240, y: 350 },
  'finance-ws': { x: 520, y: 90 },
  constituent: { x: 520, y: 170 },
  'cloud-storage': { x: 520, y: 250 },
  analytics: { x: 520, y: 330 },
  'source-repo': { x: 520, y: 410 },
  'admin-console': { x: 520, y: 490 },
}

function typeColor(type: string) {
  switch (type) {
    case 'human':
      return '#6B8FCE'
    case 'external':
      return '#D4A017'
    case 'non-human':
      return '#2EC4B6'
    case 'ai':
      return '#8B7EC8'
    default:
      return '#9fb2c7'
  }
}

function edgeColor(rel: AccessRelationship) {
  if (rel.riskPriority === 'critical' || rel.riskPriority === 'high') return '#C23B3B'
  if (rel.dormant || rel.usageStatus === 'unused') return '#D4A017'
  if (rel.pathType === 'privileged') return '#8B7EC8'
  return '#3DB9E0'
}

export function IdentityGraph() {
  const [selectedId, setSelectedId] = useState(relationships[2].id)
  const [filters, setFilters] = useState({
    identityType: 'all',
    resourceType: 'all',
    businessUnit: 'all',
    accessLevel: 'all',
    usageStatus: 'all',
    reviewStatus: 'all',
    riskPriority: 'all',
  })

  const filtered = useMemo(() => {
    return relationships.filter((rel) => {
      const identity = getIdentity(rel.identityId)
      const resource = getResource(rel.resourceId)
      if (!identity || !resource) return false
      if (filters.identityType !== 'all' && identity.type !== filters.identityType) return false
      if (filters.resourceType !== 'all' && resource.type !== filters.resourceType) return false
      if (filters.businessUnit !== 'all' && identity.businessUnit !== filters.businessUnit)
        return false
      if (filters.accessLevel !== 'all' && rel.accessLevel !== filters.accessLevel) return false
      if (filters.usageStatus !== 'all' && rel.usageStatus !== filters.usageStatus) return false
      if (filters.reviewStatus !== 'all' && rel.reviewStatus !== filters.reviewStatus) return false
      if (filters.riskPriority !== 'all' && rel.riskPriority !== filters.riskPriority) return false
      return true
    })
  }, [filters])

  const selected = filtered.find((r) => r.id === selectedId) ?? filtered[0] ?? relationships[0]
  const selectedIdentity = getIdentity(selected.identityId)
  const selectedResource = getResource(selected.resourceId)

  const businessUnits = [...new Set(identities.map((i) => i.businessUnit))]

  return (
    <Section
      id="identity-graph"
      alt
      eyebrow="Interactive identity graph"
      title="See how identities reach resources across connected systems"
      lead="Fictional identities and resources illustrate direct, inherited, external, service-account, agent-tool, dormant, and privileged paths. Visibility is limited to connected sample relationships."
    >
      <div className="filters" aria-label="Graph filters">
        {(
          [
            ['identityType', 'Identity type', ['all', 'human', 'external', 'non-human', 'ai']],
            [
              'resourceType',
              'Resource type',
              ['all', 'saas', 'data', 'cloud', 'analytics', 'dev', 'admin'],
            ],
            ['businessUnit', 'Business unit', ['all', ...businessUnits]],
            [
              'accessLevel',
              'Access level',
              ['all', 'read', 'write', 'admin', 'privileged', 'tool'],
            ],
            ['usageStatus', 'Usage status', ['all', 'active', 'dormant', 'unused', 'unknown']],
            [
              'reviewStatus',
              'Review status',
              ['all', 'not-started', 'in-review', 'keep', 'reduce', 'revoke', 'exception'],
            ],
            ['riskPriority', 'Risk priority', ['all', 'low', 'medium', 'high', 'critical']],
          ] as const
        ).map(([key, label, options]) => (
          <label key={key}>
            {label}
            <select
              value={filters[key]}
              onChange={(e) => setFilters((f) => ({ ...f, [key]: e.target.value }))}
            >
              {options.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </label>
        ))}
      </div>

      <div className="graph-layout">
        <div>
          <svg
            className="graph-svg"
            viewBox="0 0 640 560"
            role="img"
            aria-labelledby="graph-title graph-desc"
          >
            <title id="graph-title">Illustrative identity access graph</title>
            <desc id="graph-desc">
              Nodes represent fictional human, non-human, and AI identities on the left and
              resources on the right. Edges represent access relationships. Select an edge or use
              the table alternative below.
            </desc>
            {filtered.map((rel) => {
              const from = nodePositions[rel.identityId]
              const to = nodePositions[rel.resourceId]
              if (!from || !to) return null
              const isSelected = rel.id === selected.id
              return (
                <g key={rel.id}>
                  <line
                    className="graph-edge"
                    x1={from.x + 18}
                    y1={from.y}
                    x2={to.x - 18}
                    y2={to.y}
                    stroke={edgeColor(rel)}
                    strokeWidth={isSelected ? 3.5 : 1.75}
                    strokeDasharray={
                      rel.pathType === 'group-inherited' || rel.pathType === 'external-sharing'
                        ? '6 4'
                        : undefined
                    }
                    opacity={isSelected ? 1 : 0.7}
                    tabIndex={0}
                    role="button"
                    aria-label={`${getIdentity(rel.identityId)?.name} to ${getResource(rel.resourceId)?.name}: ${rel.permission}`}
                    onClick={() => setSelectedId(rel.id)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault()
                        setSelectedId(rel.id)
                      }
                    }}
                  />
                </g>
              )
            })}
            {[...identities, ...resources.map((r) => ({ ...r, type: 'resource' as const }))].map(
              (node) => {
                const pos = nodePositions[node.id]
                if (!pos) return null
                const fill = 'type' in node && node.type !== 'resource' ? typeColor(node.type) : '#9fb2c7'
                return (
                  <g key={node.id} className="graph-node" transform={`translate(${pos.x}, ${pos.y})`}>
                    <circle r="14" fill={fill} stroke="#0B1B2B" strokeWidth="2" />
                    <text
                      x="20"
                      y="4"
                      fill="#E8EEF5"
                      fontSize="11"
                      fontFamily="IBM Plex Sans, sans-serif"
                    >
                      {node.name}
                    </text>
                  </g>
                )
              },
            )}
          </svg>
          <p className="note">
            Solid lines: direct, role, service, or privileged paths. Dashed lines: inherited or
            external sharing. Amber/red emphasize dormant, unused, or higher-priority review
            signals — not confirmed incidents.
          </p>
        </div>

        <aside className="panel" aria-live="polite">
          <div className="row" style={{ justifyContent: 'space-between' }}>
            <h3 className="panel__title">Relationship detail</h3>
            <IllustrativeBadge />
          </div>
          <dl className="kv">
            <dt>Identity</dt>
            <dd>{selectedIdentity?.name}</dd>
            <dt>Resource</dt>
            <dd>{selectedResource?.name}</dd>
            <dt>How access was granted</dt>
            <dd>{selected.accessPath}</dd>
            <dt>Permission</dt>
            <dd>{selected.permission}</dd>
            <dt>Last observed use</dt>
            <dd>{selected.lastObservedUse}</dd>
            <dt>Resource owner</dt>
            <dd>{selected.resourceOwner}</dd>
            <dt>Identity owner</dt>
            <dd>{selected.identityOwner}</dd>
            <dt>Recommendation</dt>
            <dd>{selected.recommendation}</dd>
            <dt>Review status</dt>
            <dd>{selected.reviewStatus}</dd>
            <dt>Remediation option</dt>
            <dd>{selected.remediationOption}</dd>
          </dl>
        </aside>
      </div>

      <h3 style={{ marginTop: '1.5rem' }}>Table alternative</h3>
      <div className="table-wrap">
        <table className="data">
          <caption className="sr-only">
            Access relationships corresponding to the identity graph
          </caption>
          <thead>
            <tr>
              <th scope="col">Identity</th>
              <th scope="col">Resource</th>
              <th scope="col">Path type</th>
              <th scope="col">Permission</th>
              <th scope="col">Usage</th>
              <th scope="col">Review</th>
              <th scope="col">Priority</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((rel) => (
              <tr
                key={rel.id}
                className={rel.id === selected.id ? 'is-selected' : undefined}
              >
                <th scope="row">
                  <button
                    type="button"
                    className="btn btn--ghost btn--small"
                    onClick={() => setSelectedId(rel.id)}
                  >
                    {getIdentity(rel.identityId)?.name}
                  </button>
                </th>
                <td>{getResource(rel.resourceId)?.name}</td>
                <td>{rel.pathType}</td>
                <td>{rel.permission}</td>
                <td>{rel.usageStatus}</td>
                <td>{rel.reviewStatus}</td>
                <td>{rel.riskPriority}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Section>
  )
}
