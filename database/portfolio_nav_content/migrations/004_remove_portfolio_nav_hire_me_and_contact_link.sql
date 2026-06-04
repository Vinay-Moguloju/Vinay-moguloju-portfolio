-- Nav contact CTA is fixed in React (PORTFOLIO_NAV_CONTACT_CTA_LABEL); remove duplicate hire_me_label + Contact link.

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
