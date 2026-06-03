-- Seed: PORTFOLIO_NAV_CONTENT

INSERT INTO portfolio_nav_content (
    hire_me_label,
    section_links
) VALUES (
    'Hire me',
    '[
        {"label": "About", "sectionId": "about"},
        {"label": "Work", "sectionId": "work"},
        {"label": "Skills", "sectionId": "skills"},
        {"label": "Contact", "sectionId": "contact"}
    ]'::jsonb
);
