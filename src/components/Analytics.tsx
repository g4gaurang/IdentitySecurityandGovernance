import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'
import { analyticsData } from '../data/sampleData'
import { IllustrativeBadge, Section } from './ui/Section'

export function Analytics() {
  return (
    <Section
      id="analytics"
      alt
      eyebrow="Analytics and recommended measures"
      title="Illustrative posture, governance and remediation measures"
      lead="Every figure below is illustrative product data. Values are fictional and are not MTX, Oleria, or customer results."
    >
      <div className="grid-2">
        <article className="metric-card">
          <div className="row" style={{ justifyContent: 'space-between' }}>
            <h3>Identity inventory</h3>
            <IllustrativeBadge />
          </div>
          <div style={{ width: '100%', height: 240 }} aria-hidden="true">
            <ResponsiveContainer>
              <PieChart>
                <Pie data={analyticsData.inventory} dataKey="value" nameKey="name" outerRadius={80} label>
                  {analyticsData.inventory.map((entry) => (
                    <Cell key={entry.name} fill={entry.fill} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <ul className="list-clean">
            {analyticsData.inventory.map((item) => (
              <li key={item.name}>
                <span className="status-dot" style={{ background: item.fill }} aria-hidden="true" />
                {item.name}: {item.value}
              </li>
            ))}
          </ul>
        </article>

        <article className="metric-card">
          <div className="row" style={{ justifyContent: 'space-between' }}>
            <h3>Access posture</h3>
            <IllustrativeBadge />
          </div>
          <div style={{ width: '100%', height: 260 }} aria-hidden="true">
            <ResponsiveContainer>
              <BarChart data={analyticsData.posture}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" tick={{ fontSize: 11 }} interval={0} angle={-20} textAnchor="end" height={60} />
                <YAxis />
                <Tooltip />
                <Bar dataKey="value" fill="#1E5A8A" name="Count" />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <p className="note">Chart values are also listed by category labels above the bars.</p>
        </article>

        <article className="metric-card">
          <div className="row" style={{ justifyContent: 'space-between' }}>
            <h3>Governance</h3>
            <IllustrativeBadge />
          </div>
          <ul className="list-clean">
            {analyticsData.governance.map((item) => (
              <li key={item.name}>
                {item.name}: <strong>{item.value}</strong>
              </li>
            ))}
          </ul>
        </article>

        <article className="metric-card">
          <div className="row" style={{ justifyContent: 'space-between' }}>
            <h3>Remediation</h3>
            <IllustrativeBadge />
          </div>
          <ul className="list-clean">
            {analyticsData.remediation.map((item) => (
              <li key={item.name}>
                {item.name}: <strong>{item.value}</strong>
              </li>
            ))}
          </ul>
        </article>
      </div>

      <article className="panel" style={{ marginTop: '1.25rem' }}>
        <div className="row" style={{ justifyContent: 'space-between' }}>
          <h3 className="panel__title">Platform coverage</h3>
          <IllustrativeBadge />
        </div>
        <div className="grid-3">
          {analyticsData.coverage.map((item) => (
            <div key={item.label}>
              <strong>{item.label}</strong>
              <p className="note">{item.value}</p>
            </div>
          ))}
        </div>
      </article>
    </Section>
  )
}
