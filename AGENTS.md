# AGENTS.md — DotGUI codebase guide

Read this before contributing. It describes what the project is, the stack,
and the code constraints that must not be broken.

## Project

- DotGUI: unblocked games + tools + proxied search site for school users.
- Repo: `https://github.com/dotgui-dev/DotGUI`, branch `main`, Cloudflare Pages
  target `dotgui.pages.dev`.
- Vanilla HTML/CSS/JS. No frameworks. Local dev: `npx servor` from repo root.
- Single-file release is built local-only with `build-single.py`; `dist/` is
  gitignored and never committed.

## Code constraints (never break)

1. Game and tool embeds (`game-embeds/`, `pages/game-pages/`,
   `pages/tool-pages/`) are owner-maintained. Do not modify them; tiles,
   embeds, and pages are handed over by the owner.
2. Pledge: games, tools, and search stay ad-free. Monetag Multitag
   (`nap5k.com/tag.min.js`, zone `11810591`) lives ONLY on other nav pages
   and MUST be iframe-gated (`window.self!==window.top`).
3. Proxy scripts stay at absolute paths: `/scramjet/scramjet.js`,
   `/controller/controller.api.js`, `/sw.js`. Keep them as classic
   `<script>` tags, never `type="module"`.
4. Service worker `sw.js` must stay at site root for scope.

## Stack facts

- Proxy: Scramjet `2.0.67-alpha.1` + controller `0.0.13` +
  `@mercuryworkshop/epoxy-transport@3.0.1` over Wisp. Wisp and Bare are
  DIFFERENT protocols; the first-party worker speaks Wisp, not Bare.
- Wisp chain: first-party worker, then Mercury, then Anura. Sticky key
  `dotgui_wisp_v2`, health key `dotgui_wisp_health`, 10s per-attempt timeout.
- Themes: `Classic` (default), `Dark`, `Light` (all text `#000`, logo
  `filter: brightness(0)`), `Primordial` (black/white, `BlackoutGames` swap,
  grayscale), `Fall` (cream/pumpkin seasonal default, manual winter handoff).
  Theme key: `dotgui_theme`.
- Changelog: `start.html` top-left `!` popup, sidebar tabs `.cl-tab` +
  `.cl-entry`, seen-version key `dotgui_changelog_seen`.
- Favs: corner star toggle, favorites sort first then alphabetical, 4 recents
  (120px tiles), keys `dotgui_favs` / `dotgui_recent`.
