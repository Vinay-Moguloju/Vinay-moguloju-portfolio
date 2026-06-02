-- Maps to React: PORTFOLIO_NAV_CONTENT + PortfolioNav component.
-- Does not include landing page or brand fields (those live elsewhere in the UI).

CREATE TABLE portfolio_nav_content (
    id BIGSERIAL PRIMARY KEY,
    hire_me_label VARCHAR(128) NOT NULL,
    section_links JSONB NOT NULL DEFAULT '[]'::jsonb,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

COMMENT ON TABLE portfolio_nav_content IS 'PortfolioNav — mirrors PORTFOLIO_NAV_CONTENT in portfolioContent.ts.';
COMMENT ON COLUMN portfolio_nav_content.hire_me_label IS 'React: PORTFOLIO_NAV_CONTENT.hireMeLabel';
COMMENT ON COLUMN portfolio_nav_content.section_links IS 'React: PORTFOLIO_NAV_CONTENT.sectionLinks — [{ label, sectionId }, ...]';
