UPDATE portfolio_contact_content
SET
    footer_copyright = 'Built with React + TypeScript + Vite · Tailwind CSS · SCSS · Motion · React Router · Axios · Spring Boot · Java · PostgreSQL · Flyway · Maven · Docker · GitHub Actions · GitHub Pages',
    updated_at = NOW()
WHERE footer_copyright IS DISTINCT FROM 'Built with React + TypeScript + Vite · Tailwind CSS · SCSS · Motion · React Router · Axios · Spring Boot · Java · PostgreSQL · Flyway · Maven · Docker · GitHub Actions · GitHub Pages';
