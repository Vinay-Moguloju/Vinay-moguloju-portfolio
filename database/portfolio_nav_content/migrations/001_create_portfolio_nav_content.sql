-- Maps to React: PORTFOLIO_NAV_CONTENT + PortfolioNav component.
-- Does not include landing page or brand fields (those live elsewhere in the UI).

CREATE TABLE portfolio_nav_content (
    id BIGSERIAL PRIMARY KEY,
    nav_brand_name VARCHAR(255) NOT NULL,
    section_links JSONB NOT NULL DEFAULT '[]'::jsonb,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

COMMENT ON TABLE portfolio_nav_content IS 'PortfolioNav — mirrors PORTFOLIO_NAV_CONTENT; contact CTA label is PORTFOLIO_NAV_CONTACT_CTA_LABEL in React.';
COMMENT ON COLUMN portfolio_nav_content.nav_brand_name IS 'React: PORTFOLIO_BRAND.fullName — nav brand title';
COMMENT ON COLUMN portfolio_nav_content.section_links IS 'React: PORTFOLIO_NAV_CONTENT.sectionLinks — [{ label, sectionId }, ...]';
