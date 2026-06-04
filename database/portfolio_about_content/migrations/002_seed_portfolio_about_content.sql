-- Seed: PORTFOLIO_ABOUT_CONTENT (frontend/src/dataservices/content/portfolioContent.ts)

INSERT INTO portfolio_about_content (
    heading,
    image_alt,
    paragraphs,
    section_label,
    stats,
    status_chip
) VALUES (
    'I design and ship accessible, high-performance frontends for customer-facing products at scale.',
    'Vinay Kumar working on frontend architecture and UI development',
    '["I am a Senior Fullstack Engineer focused on analyzing, designing, and developing highly scalable, multi-tier web applications. I specialize in React.js, Next.js, TypeScript, and modern CSS workflows across e-commerce, retail, and telecom domains.","At Abercrombie & Fitch, I build and enhance customer-facing micro-frontends, migrate legacy experiences to React 18, contribute shared utilities across MFEs, and use AI-assisted development with Cursor, LLMs, and MCP to accelerate delivery while maintaining quality, accessibility, and team standards."]'::jsonb,
    '01 / About',
    '[{"label":"Core focus","value":"Fullstack"},{"label":"Industry domains","value":"3"},{"label":"Current role","value":"A&F"},{"label":"Accessibility standard","value":"WCAG 2.1 AA"}]'::jsonb,
    'Currently: Senior Fullstack Engineer @ Abercrombie & Fitch'
);
