# Portfolio Roadmap

Site: `debanjanm.github.io` — hand-written `index.html` plus a Jekyll-built Writing
section, hosted on GitHub Pages. Shared styles in `assets/css/site.css`.

## Done

- [x] Editorial redesign around the statistics → data science → AI engineering arc
- [x] Dark/light theme toggle (localStorage + `prefers-color-scheme`)
- [x] Real work only: Professional (no links), Personal, and Public sections
- [x] Meta description and Open Graph tags
- [x] Writing infrastructure: `_config.yml`, `_layouts/`, `/writing/`, RSS at `/writing/feed.xml`

## Writing

Drafts live in `_drafts/`, which is gitignored — this repo is public, so nothing is
visible until a post is deliberately published.

To publish: move the draft to `_posts/YYYY-MM-DD-slug.md`, commit, push.

- [ ] **A perfect score that still merged the wrong people** — entity resolution,
      grouped splits, and a 1.000 measured on 21 negatives (draft ready)
- [ ] When the fairer evaluation gives you a lower number
- [ ] Descoping a four-agent platform to one deeper agent
- [ ] When `tfidf × coef` beats SHAP
- [ ] Survival analysis on breast-cancer metagenes (MSc thesis)
- [ ] Designing an LLM agent for asymmetric costs — needs employer clearance first

Rule for anything drawn from professional work: problem pattern and decision only —
no internal system names, no internal scale figures, no code.

- [ ] Add "Writing" to the homepage nav once 2–3 posts are live

## Polish

- [ ] Favicon and `og:image` (LinkedIn previews currently render as bare text)
- [ ] Mobile navigation on the homepage (links hide below 960px with no menu)
- [ ] Add Agentic-IDP to Personal Work once its public README is pushed
- [ ] Privacy-friendly analytics (GoatCounter or Plausible)
- [ ] Accessibility pass: contrast in both themes, focus states

## Open decisions

1. Blog comments — none, or giscus via GitHub Discussions?
2. Custom domain, or keep `debanjanm.github.io`?
