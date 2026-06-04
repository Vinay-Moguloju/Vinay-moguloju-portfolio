-- Maps to React: PORTFOLIO_PROJECTS_CONTENT + PortfolioWorkPage.

CREATE TABLE portfolio_work_content (
    id BIGSERIAL PRIMARY KEY,
    action_labels JSONB NOT NULL DEFAULT '{}'::jsonb,
    heading VARCHAR(255) NOT NULL,
    projects JSONB NOT NULL DEFAULT '[]'::jsonb,
    section_label VARCHAR(128) NOT NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

COMMENT ON TABLE portfolio_work_content IS 'PortfolioWorkPage — mirrors PORTFOLIO_PROJECTS_CONTENT in portfolioContent.ts.';
COMMENT ON COLUMN portfolio_work_content.action_labels IS 'React: PORTFOLIO_PROJECTS_CONTENT.actionLabels';
COMMENT ON COLUMN portfolio_work_content.heading IS 'React: PORTFOLIO_PROJECTS_CONTENT.heading';
COMMENT ON COLUMN portfolio_work_content.projects IS 'React: PORTFOLIO_PROJECTS_CONTENT.projects';
COMMENT ON COLUMN portfolio_work_content.section_label IS 'React: PORTFOLIO_PROJECTS_CONTENT.sectionLabel';
