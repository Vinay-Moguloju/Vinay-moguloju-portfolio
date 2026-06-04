-- Seed: PORTFOLIO_NAV_CONTENT (frontend/src/dataservices/content/portfolioContent.ts)

INSERT INTO portfolio_nav_content (
    nav_brand_name,
    section_links
) VALUES (
    'Vinay Kumar Moguloju',
    '[
        {"label": "About", "sectionId": "about"},
        {"label": "Work", "sectionId": "work"},
        {"label": "Skills", "sectionId": "skills"}
    ]'::jsonb
);
