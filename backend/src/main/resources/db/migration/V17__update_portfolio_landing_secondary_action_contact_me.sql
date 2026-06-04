UPDATE portfolio_landing_page_content
SET
    secondary_action_label = 'Contact Me',
    updated_at = NOW()
WHERE secondary_action_label IN ('Hire me', 'Contact');
