ALTER TABLE portfolio_landing_page_content
ADD COLUMN IF NOT EXISTS headline_display_name VARCHAR(255);

UPDATE portfolio_landing_page_content
SET
    headline_display_name = 'Mr.Moguloju',
    updated_at = NOW()
WHERE headline_display_name IS NULL;

ALTER TABLE portfolio_landing_page_content
ALTER COLUMN headline_display_name SET NOT NULL;
