-- Maps to React: PORTFOLIO_ABOUT_CONTENT + PortfolioAboutPage.

CREATE TABLE portfolio_about_content (
    id BIGSERIAL PRIMARY KEY,
    heading TEXT NOT NULL,
    image_alt TEXT NOT NULL,
    paragraphs JSONB NOT NULL DEFAULT '[]'::jsonb,
    section_label VARCHAR(128) NOT NULL,
    stats JSONB NOT NULL DEFAULT '[]'::jsonb,
    status_chip TEXT NOT NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

COMMENT ON TABLE portfolio_about_content IS 'PortfolioAboutPage — mirrors PORTFOLIO_ABOUT_CONTENT in portfolioContent.ts.';
COMMENT ON COLUMN portfolio_about_content.heading IS 'React: PORTFOLIO_ABOUT_CONTENT.heading';
COMMENT ON COLUMN portfolio_about_content.image_alt IS 'React: PORTFOLIO_ABOUT_CONTENT.imageAlt';
COMMENT ON COLUMN portfolio_about_content.paragraphs IS 'React: PORTFOLIO_ABOUT_CONTENT.paragraphs — JSON string array';
COMMENT ON COLUMN portfolio_about_content.section_label IS 'React: PORTFOLIO_ABOUT_CONTENT.sectionLabel';
COMMENT ON COLUMN portfolio_about_content.stats IS 'React: PORTFOLIO_ABOUT_CONTENT.stats — [{ label, value }]';
COMMENT ON COLUMN portfolio_about_content.status_chip IS 'React: PORTFOLIO_ABOUT_CONTENT.statusChip';
