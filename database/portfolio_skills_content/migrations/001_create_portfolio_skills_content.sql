-- Maps to React: PORTFOLIO_SKILLS_CONTENT + PortfolioSkillsPage.

CREATE TABLE portfolio_skills_content (
    id BIGSERIAL PRIMARY KEY,
    categories JSONB NOT NULL DEFAULT '[]'::jsonb,
    comment_label VARCHAR(255) NOT NULL,
    heading VARCHAR(255) NOT NULL,
    section_label VARCHAR(128) NOT NULL,
    tools JSONB NOT NULL DEFAULT '[]'::jsonb,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

COMMENT ON TABLE portfolio_skills_content IS 'PortfolioSkillsPage — mirrors PORTFOLIO_SKILLS_CONTENT in portfolioContent.ts.';
COMMENT ON COLUMN portfolio_skills_content.categories IS 'React: PORTFOLIO_SKILLS_CONTENT.categories';
COMMENT ON COLUMN portfolio_skills_content.comment_label IS 'React: PORTFOLIO_SKILLS_CONTENT.commentLabel';
COMMENT ON COLUMN portfolio_skills_content.heading IS 'React: PORTFOLIO_SKILLS_CONTENT.heading';
COMMENT ON COLUMN portfolio_skills_content.section_label IS 'React: PORTFOLIO_SKILLS_CONTENT.sectionLabel';
COMMENT ON COLUMN portfolio_skills_content.tools IS 'React: PORTFOLIO_SKILLS_CONTENT.tools — JSON string array';
