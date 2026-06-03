-- Maps to React: PORTFOLIO_NAV_CONTENT + PortfolioNav component.

CREATE TABLE portfolio_nav_content (
    id BIGSERIAL PRIMARY KEY,
    hire_me_label VARCHAR(128) NOT NULL,
    section_links JSONB NOT NULL DEFAULT '[]'::jsonb,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
