# MTX Identity Security & Governance

Interactive GitHub Pages prototype that helps buyers understand access visibility, usage-aware reviews, identity governance, and remediation workflows for MTX Identity Security & Governance.

This is a static demonstration only. It does not discover identities, change access, or connect to live systems.

## Technology stack

* React
* TypeScript
* Vite
* Responsive CSS
* Lucide React
* Recharts
* Accessible SVG identity graph
* Local TypeScript sample-data objects

## Local setup

```bash
npm install
```

## Development

```bash
npm run dev
```

## Production build

```bash
npm run build
npm run preview
```

The production build writes static assets to `dist/`. Vite is configured with `base: './'` so asset paths work for repository-subdirectory GitHub Pages hosting.

## GitHub Pages deployment

1. Push to `main` (or merge a pull request into `main`).
2. The workflow `.github/workflows/deploy-pages.yml` builds the site and deploys the `dist` directory with GitHub Pages.
3. In the repository settings, set Pages source to **GitHub Actions** if it is not already configured.
4. Expected Pages URL pattern: `https://<owner>.github.io/<repository>/`

## Fictional-data disclaimer

All identities, resources, findings, analytics figures, remediation statuses, and review outcomes are fictional and labeled as illustrative. They are not MTX, Oleria, or customer results.

## Partnership and co-branding review

* Public product name: **MTX Identity Security & Governance**
* Supporting description **Powered by Oleria** should be used only after co-branding approval
* Confirm that MTX may publicly identify itself as an Oleria partner before publishing
* Do not imply that MTX developed Oleria’s underlying platform
* Do not use Oleria logos, customer logos, testimonials, or transferred customer claims without written authorization

## Product-claims guidance

Prefer qualified language such as:

* Helps identify
* Supports least-privilege decisions
* Based on connected systems
* Available usage context
* Requires authorized review
* Can initiate remediation
* Subject to connector capability

Avoid unsupported claims such as zero standing access, complete visibility, stopping lateral movement, guaranteeing compliance, or exact permissions at every moment.

Usage is review context. Lack of observed use does not prove access is unnecessary. Recommendations are not final decisions. Remediation depends on connector capability, permissions, workflow configuration, and authoritative systems. Just-in-time / time-boxed access must remain labeled as requiring availability confirmation until validated.

## Updating identity categories

Edit `src/data/sampleData.ts`:

* `identities` — human, external, non-human, and AI nodes
* `resources` — illustrative systems and data stores
* `relationships` — access paths used by the graph, explorer, and tables
* `identityCategories` — tabbed human / non-human / AI explorer content

## Replacing the contact action

The closing form in `src/components/ClosingCta.tsx` validates locally and shows an in-browser confirmation. To connect a real intake process later, replace the `onSubmit` handler with your approved form endpoint or CRM workflow. Do not add API keys to the static site.

## Content and sample-data locations

* Page composition: `src/App.tsx`
* Section components: `src/components/`
* Shared sample data: `src/data/sampleData.ts`
* Visual system: `src/index.css`
* SEO / metadata: `index.html`
* Product mark: `public/favicon.svg`

## Scripts

* `npm run dev` — local development server
* `npm run build` — typecheck and production build
* `npm run lint` — oxlint
* `npm run preview` — preview the production build
