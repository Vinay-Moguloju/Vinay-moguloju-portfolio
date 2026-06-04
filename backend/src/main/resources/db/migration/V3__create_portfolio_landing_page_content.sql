-- Maps to React: PORTFOLIO_LANDING_PAGE_CONTENT + PortfolioLandingPage component.

CREATE TABLE portfolio_landing_page_content (
    id BIGSERIAL PRIMARY KEY,
    availability_badge TEXT NOT NULL,
    headline_accent VARCHAR(255) NOT NULL,
    headline_display_name VARCHAR(255) NOT NULL,
    headline_muted VARCHAR(255) NOT NULL,
    intro TEXT NOT NULL,
    primary_action_label VARCHAR(128) NOT NULL,
    role_words JSONB NOT NULL DEFAULT '[]'::jsonb,
    secondary_action_label VARCHAR(128) NOT NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
