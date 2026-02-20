# Style Guide & Conventions

## Code Style
- **Language:** JavaScript with JSDoc type checking enabled (`checkJs: true`).
- **Framework:** Svelte 4 / SvelteKit.
- **Styling:** TailwindCSS is the primary styling method.

## Formatting Rules (Prettier)
- **Semicolons:** No (`semi: false`).
- **Quotes:** Single quotes (`singleQuote: true`).
- **Trailing Commas:** None (`trailingComma: "none"`).
- **Print Width:** 100 characters.
- **Tabs:** Use tabs (`useTabs: true`).

## Linting
- **Tool:** ESLint with `plugin:svelte/recommended`.
- **Configuration:** `.eslintrc.cjs` extends `eslint:recommended`, `plugin:svelte/recommended`, and `prettier`.

## Project Structure
- `src/routes`: SvelteKit file-system based routing.
- `src/lib`: Shared utilities and components.
- `src/lib/components`: Reusable UI components.
- `src/lib/utils`: Utility functions.
