# Adnan Khattak's portfolio

React, TypeScript, Vite, and Tailwind portfolio. The existing Vercel project serves [addi-portfolio.vercel.app](https://addi-portfolio.vercel.app/).

```sh
npm ci
npm run dev
```

Before committing:

```sh
npm run lint
npm run build
npm run preview
```

The production build also generates HTML metadata for each public route, so social previews and crawlers receive the correct title, description, and canonical URL without executing JavaScript. Client-side navigation updates the same metadata.

Portfolio content and social links live in `src/data/portfolio.ts`; route metadata lives in `src/data/metadata.json`. Homepage sections and detail pages share these sources. The existing colors, typography, cards, gradients, and motion system are retained.

Contact forms prepare a draft in the visitor's email application. They do not send messages through a backend. Production projects link to their public product websites; projects without a confirmed public URL link to a discussion with the subject prefilled. A resume can be requested by email.

TBox Solutionz is included without an inferred employment date. Product descriptions are based on the public DealRevs, Carantee, Spendlio, and Real Horse websites linked in the project cards; earlier project history is retained.

The repository-wide TypeScript check (`npx tsc --noEmit -p tsconfig.app.json`) currently also includes unused UI templates whose dependencies are absent: `react-day-picker`, `embla-carousel-react`, `recharts`, `cmdk`, `vaul`, `input-otp`, and `react-resizable-panels`. These predate the content refresh and do not prevent the production build.
