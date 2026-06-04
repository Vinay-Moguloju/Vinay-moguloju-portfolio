ALTER TABLE portfolio_nav_content
ADD COLUMN IF NOT EXISTS nav_brand_name VARCHAR(255);

UPDATE portfolio_nav_content
SET
    nav_brand_name = 'Vinay Kumar Moguloju',
    updated_at = NOW()
WHERE nav_brand_name IS NULL;

ALTER TABLE portfolio_nav_content
ALTER COLUMN nav_brand_name SET NOT NULL;
