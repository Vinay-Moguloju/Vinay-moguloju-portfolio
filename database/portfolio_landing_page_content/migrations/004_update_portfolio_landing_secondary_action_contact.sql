-- Landing secondary CTA opens contact modal — label matches PORTFOLIO_NAV_CONTACT_CTA_LABEL.

UPDATE portfolio_landing_page_content
SET
    secondary_action_label = 'Contact Me',
    updated_at = NOW()
WHERE secondary_action_label IN ('Hire me', 'Contact');
