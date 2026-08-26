# Portfolio Roadmap

Site: `debanjanm.github.io` — single-file `index.html`, no build tooling, hosted on GitHub Pages.

## Done

- [x] Dark/light theme toggle (localStorage + `prefers-color-scheme`)
- [x] Real project cards added (Bhutan Voice Assistant, Mental Health RAG Bot) linking to `Portfolio-Public`

## Phase 1 — Site hygiene (do before Blog)

- [ ] Fix dead project links: 6 original cards (RAG Doc Q&A, Churn Predictor, Medical Image Classifier, Analytics Pipeline, Sentiment Analysis, House Price Kaggle) all use `href="#"` for Demo/GitHub — either wire real repos/demos or drop the card. Fabricated metrics (87% accuracy, 94% AUC, etc.) need to be real or removed.
- [ ] Add `<meta name="description">`, Open Graph (`og:title`, `og:description`, `og:image`), Twitter card tags — currently missing, hurts link previews and SEO.
- [ ] Add favicon (currently none).
- [ ] Add `robots.txt` + `sitemap.xml` (trivial once Blog exists — sitemap matters more then).

## Phase 2 — Blog tab

**Approach: GitHub Pages' native Jekyll support.** No build tooling to maintain — GH Pages builds it server-side on push. Posts are plain Markdown.

- [ ] Add `_config.yml` (site title, description, permalink style)
- [ ] Add `_posts/` — one Markdown file per post (`YYYY-MM-DD-title.md`)
- [ ] Add `blog.html` — Liquid template listing posts (title, date, excerpt), styled to match existing dark/light theme (reuse CSS vars from `index.html`)
- [ ] Add per-post layout (`_layouts/post.html`) matching site chrome (nav, footer, theme toggle)
- [ ] Add "Blog" link to nav in `index.html`
- [ ] `jekyll-feed` plugin for free RSS — GitHub Pages whitelists it

**Alternative considered:** hand-rolled static blog (own HTML per post, no Jekyll). Rejected — more files to keep in sync by hand for no benefit over what GH Pages gives free.

## Phase 3 — Content (the actual point: showcase talent)

- [ ] 2–3 launch posts, real substance not filler:
  - LLM fine-tuning / quantization lessons from the Gen AI Squad Lead role
  - Write-up of one Omdena project (Bhutan assistant or Mental Health bot) — problem, architecture, what broke, what you'd do differently
  - One technical deep-dive (RAG, latency optimization, whatever you're best at)
- [ ] Each post links back to relevant project card / GitHub repo

## Phase 4 — Polish

- [ ] Privacy-friendly analytics (e.g., GoatCounter/Plausible — skip Google Analytics unless you want it)
- [ ] Accessibility pass (contrast in both themes, alt text, focus states)
- [ ] Mobile check (nav + new Blog link, project grid, post pages)

## Open decisions (need your call)

1. Fictional projects in Phase 1 — replace with real ones, or delete the cards outright?
2. Blog comments — none, or a lightweight embed (giscus via GitHub Discussions)?
3. Custom domain, or keep `debanjanm.github.io`?
