# AlertHawk.Site

Marketing site for [AlertHawk](https://alerthawk.net), built with [Next.js](https://nextjs.org/) (App Router) for server-rendered HTML and SEO.

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production build

```bash
npm run build
npm start
```

## Docker

```bash
docker build -t alerthawk-site .
docker run -p 8080:8080 alerthawk-site
```

The container listens on port **8080** and serves the Next.js standalone server.

## SEO

- Server-rendered pages with the Next.js Metadata API
- JSON-LD structured data (`src/seo/structuredData.ts`)
- Dynamic `sitemap.xml` and `robots.txt` via App Router
- `/privacy.html` redirects permanently to `/privacy`
