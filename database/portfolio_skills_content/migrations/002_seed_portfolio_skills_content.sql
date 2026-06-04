-- Seed: PORTFOLIO_SKILLS_CONTENT (frontend/src/dataservices/content/portfolioContent.ts)

INSERT INTO portfolio_skills_content (
    categories,
    comment_label,
    heading,
    section_label,
    tools
) VALUES (
    '[
      {"name":"Frontend","skills":[{"level":95,"name":"React / Next.js"},{"level":93,"name":"TypeScript / JavaScript (ES6+)"},{"level":92,"name":"CSS / SCSS / Tailwind"},{"level":90,"name":"Accessibility (WCAG 2.1 AA)"}]},
      {"name":"State & Integration","skills":[{"level":92,"name":"Redux Toolkit / Redux-Saga"},{"level":90,"name":"REST APIs / BFF"},{"level":88,"name":"GraphQL / Apollo Client"},{"level":85,"name":"Node.js / Express.js"}]},
      {"name":"Quality & Delivery","skills":[{"level":90,"name":"Jest / React Testing Library"},{"level":88,"name":"Cypress / Playwright"},{"level":90,"name":"CI/CD (GitHub Actions / GitLab)"},{"level":85,"name":"AWS / Docker / Kubernetes"}]}
    ]'::jsonb,
    '// Senior Fullstack stack',
    'Core skills from production work',
    '03 / Skills',
    '["React 18","Next.js","TypeScript","Redux Toolkit","Redux-Saga","GraphQL","Apollo Client","Node.js","Express.js","HTML5","CSS3","SASS/SCSS","Tailwind CSS","Storybook","Figma","Webpack","Vite","Jest","React Testing Library","Cypress","Playwright","Docker","Kubernetes","AWS","GitHub Actions","GitLab CI/CD","Cursor IDE","MCP"]'::jsonb
);
