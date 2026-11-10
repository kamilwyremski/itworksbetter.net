# IT Works Better

Website of the team of programmers (Front-End and Back-End Web Developers), graphic designers and SEO specialists
IT Works Better - It's just not enough that it works
See the website at [itworksbetter.net](https://itworksbetter.net)

## Prerequisites

You will need the following things properly installed on your computer.

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/) (with npm)
- [Ember CLI](https://ember-cli.com/)
- [Google Chrome](https://google.com/chrome/)

## Installation

- `git clone https://github.com/kamilwyremski/itworksbetter.net.git` this repository
- `cd itworksbetter.net`
- `npm install`

## Running / Development

- `ember serve`
- Visit your app at [http://localhost:4200](http://localhost:4200).
- Visit your tests at [http://localhost:4200/tests](http://localhost:4200/tests).

### Running Tests

- `ember test`
- `ember test --server`
- `node --test scripts/agent-metadata-test.js` (built output and discovery metadata; run `npm run build` first)

### Linting

- `npm run lint`
- `npm run lint:fix`

### Building

- `ember build` (development)
- `ember build --environment production` (production)
- `npm run build` (deployment build: generates Markdown sources and skill digests, prerenders pages, and injects route-specific head tags)

## Agent discovery and hosting

- Each PWA icon in `config/manifest.js` uses `purpose: 'any maskable'` in one entry so `ember-web-app` generates only one Apple touch icon tag per size.

- Homepage About and Contact sections share `AboutContent` and `ContactContent` with their dedicated pages. Keep the corresponding public Markdown sources in sync when editing that content.

- `public/agents.md` describes when to use the site and its limitations. The site has static JSON content catalogs, not a public service API, SDK, or A2A agent.
- `npm run generate:markdown` refreshes generated Markdown and the SHA-256 digest in `public/.well-known/agent-skills/index.json`. Build and start run it automatically.
- Markdown alternate URLs are shared by the browser and production head injection through `site.markdown_paths` in `config/environment.js`.
- The 404 page has no canonical link, including after client-side navigation. Its Markdown alternate remains available for error recovery.
- `site.base_url` is normalized once in `config/environment.js` without a trailing slash. Development/test use an empty prefix; app routing still uses `rootURL: '/'`.
- Deploy the full `dist/` output, including `.htaccess` and `.well-known/`. Apache-compatible hosting uses `public/.htaccess` for Markdown content types, discovery headers, and content-negotiated 404 responses. A missing URL requested with `Accept: text/markdown` must retain HTTP 404 and return `error404.md`; normal browsers keep the HTML error page.
- If an agent receives HTTP 429 while a browser receives 200, inspect the hosting/CDN/WAF bot and rate-limit settings. `robots.txt` does not override those controls. Permit legitimate search/user-triggered agents without disabling protection globally.
- No postal address or fixed quote is invented for structured data. Contact uses the published email; service prices use `PriceSpecification.minPrice`/`maxPrice` to preserve the published ranges.
