-- Maps to React: PORTFOLIO_LANDING_PAGE_CONTENT + PortfolioLandingPage component.
-- Does not include nav links or hire-me nav CTA (portfolio_nav_content).

CREATE TABLE portfolio_landing_page_content (
    id BIGSERIAL PRIMARY KEY,
    availability_badge TEXT NOT NULL,
    headline_accent VARCHAR(255) NOT NULL,
    headline_muted VARCHAR(255) NOT NULL,
    intro TEXT NOT NULL,
    primary_action_label VARCHAR(128) NOT NULL,
    role_words JSONB NOT NULL DEFAULT '[]'::jsonb,
    secondary_action_label VARCHAR(128) NOT NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

COMMENT ON TABLE portfolio_landing_page_content IS 'PortfolioLandingPage — mirrors PORTFOLIO_LANDING_PAGE_CONTENT in portfolioContent.ts.';
COMMENT ON COLUMN portfolio_landing_page_content.availability_badge IS 'React: PORTFOLIO_LANDING_PAGE_CONTENT.availabilityBadge';
COMMENT ON COLUMN portfolio_landing_page_content.headline_accent IS 'React: PORTFOLIO_LANDING_PAGE_CONTENT.headlineAccent';
COMMENT ON COLUMN portfolio_landing_page_content.headline_muted IS 'React: PORTFOLIO_LANDING_PAGE_CONTENT.headlineMuted';
COMMENT ON COLUMN portfolio_landing_page_content.intro IS 'React: PORTFOLIO_LANDING_PAGE_CONTENT.intro';
COMMENT ON COLUMN portfolio_landing_page_content.primary_action_label IS 'React: PORTFOLIO_LANDING_PAGE_CONTENT.primaryActionLabel';
COMMENT ON COLUMN portfolio_landing_page_content.role_words IS 'React: PORTFOLIO_LANDING_PAGE_CONTENT.roleWords — JSON string array';
COMMENT ON COLUMN portfolio_landing_page_content.secondary_action_label IS 'React: PORTFOLIO_LANDING_PAGE_CONTENT.secondaryActionLabel';
