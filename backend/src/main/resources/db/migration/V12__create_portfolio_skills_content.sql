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
