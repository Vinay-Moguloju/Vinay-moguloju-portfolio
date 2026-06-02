-- Seed: PORTFOLIO_LANDING_PAGE_CONTENT (frontend/src/dataservices/content/portfolioContent.ts)

INSERT INTO portfolio_landing_page_content (
    availability_badge,
    headline_accent,
    headline_muted,
    intro,
    primary_action_label,
    role_words,
    secondary_action_label
) VALUES (
    'Open to senior Fullstack opportunities',
    'Builds Things',
    'That Matter.',
    'Senior Fullstack Engineer with 9+ years building scalable SPAs and micro-frontends across e-commerce, retail, and telecom — focused on React, Next.js, performance, and WCAG 2.1 AA accessibility.',
    'View my work',
    '["Senior Fullstack", "React / Next.js", "Micro-Frontends"]'::jsonb,
    'Hire me'
);
