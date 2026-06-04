-- Maps to React: PORTFOLIO_CONTACT_CONTENT + PortfolioContactPage.

CREATE TABLE portfolio_contact_content (
    id BIGSERIAL PRIMARY KEY,
    footer_copyright TEXT NOT NULL,
    form_fields JSONB NOT NULL DEFAULT '{}'::jsonb,
    heading_accent VARCHAR(255) NOT NULL,
    heading_primary VARCHAR(255) NOT NULL,
    heading_suffix VARCHAR(64) NOT NULL,
    intro TEXT NOT NULL,
    section_label VARCHAR(128) NOT NULL,
    social_links JSONB NOT NULL DEFAULT '[]'::jsonb,
    success_message TEXT NOT NULL,
    success_title VARCHAR(128) NOT NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

COMMENT ON TABLE portfolio_contact_content IS 'PortfolioContactPage — mirrors PORTFOLIO_CONTACT_CONTENT in portfolioContent.ts.';
COMMENT ON COLUMN portfolio_contact_content.footer_copyright IS 'React: PORTFOLIO_CONTACT_CONTENT.footerCopyright';
COMMENT ON COLUMN portfolio_contact_content.form_fields IS 'React: PORTFOLIO_CONTACT_CONTENT.form';
COMMENT ON COLUMN portfolio_contact_content.heading_accent IS 'React: PORTFOLIO_CONTACT_CONTENT.headingAccent';
COMMENT ON COLUMN portfolio_contact_content.heading_primary IS 'React: PORTFOLIO_CONTACT_CONTENT.headingPrimary';
COMMENT ON COLUMN portfolio_contact_content.heading_suffix IS 'React: PORTFOLIO_CONTACT_CONTENT.headingSuffix';
COMMENT ON COLUMN portfolio_contact_content.intro IS 'React: PORTFOLIO_CONTACT_CONTENT.intro';
COMMENT ON COLUMN portfolio_contact_content.section_label IS 'React: PORTFOLIO_CONTACT_CONTENT.sectionLabel';
COMMENT ON COLUMN portfolio_contact_content.social_links IS 'React: PORTFOLIO_CONTACT_CONTENT.socialLinks';
COMMENT ON COLUMN portfolio_contact_content.success_message IS 'React: PORTFOLIO_CONTACT_CONTENT.successMessage';
COMMENT ON COLUMN portfolio_contact_content.success_title IS 'React: PORTFOLIO_CONTACT_CONTENT.successTitle';
