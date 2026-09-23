# MALE UAV Aero Piston Engine Digital Twin — React Conversion

This is the uploaded modular HTML dashboard converted into a React/Vite project.

## Structure

- `src/App.jsx` — application shell and workspace switching.
- `src/components/` — React components for branding, sidebar, control rail, top bar, and navigation.
- `src/pages/` — workspace content exported as React-rendered HTML strings so the original layout is preserved.
- `src/styles/dashboard.css` — extracted dashboard styles.
- `index.html` — Vite entry document.

## Run

```bash
pnpm install
pnpm run dev
```

Build for production:

```bash
pnpm run build
```

## Note

The large legacy workspace markup is rendered through `dangerouslySetInnerHTML` to preserve the original dashboard exactly during the first conversion. The next refactor can convert each workspace string into typed JSX components incrementally without changing the shell or navigation.
