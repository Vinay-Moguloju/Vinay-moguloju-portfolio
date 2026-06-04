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
