import type { ReactNode } from 'react'

interface SectionProps {
  id: string
  eyebrow?: string
  title: string
  lead?: string
  alt?: boolean
  dark?: boolean
  children: ReactNode
}

export function Section({ id, eyebrow, title, lead, alt, dark, children }: SectionProps) {
  const classes = ['section', alt ? 'section--alt' : '', dark ? 'section--dark' : '']
    .filter(Boolean)
    .join(' ')

  return (
    <section id={id} className={classes} aria-labelledby={`${id}-title`}>
      <div className="container">
        {eyebrow ? <p className="section__eyebrow">{eyebrow}</p> : null}
        <h2 id={`${id}-title`} className="section__title">
          {title}
        </h2>
        {lead ? <p className="section__lead">{lead}</p> : null}
        {children}
      </div>
    </section>
  )
}

export function IllustrativeBadge() {
  return <span className="badge badge--illus">Illustrative product data</span>
}
