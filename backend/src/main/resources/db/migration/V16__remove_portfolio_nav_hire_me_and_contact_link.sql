ALTER TABLE portfolio_nav_content
DROP COLUMN IF EXISTS hire_me_label;

UPDATE portfolio_nav_content
SET
    section_links = '[
        {"label": "About", "sectionId": "about"},
        {"label": "Work", "sectionId": "work"},
        {"label": "Skills", "sectionId": "skills"}
    ]'::jsonb,
    updated_at = NOW()
WHERE section_links::text LIKE '%"sectionId": "contact"%';

UPDATE portfolio_landing_page_content
SET
    secondary_action_label = 'Contact Me',
    updated_at = NOW()
WHERE secondary_action_label IN ('Hire me', 'Contact');
