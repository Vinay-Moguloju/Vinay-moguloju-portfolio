CREATE TABLE portfolio_work_content (
    id BIGSERIAL PRIMARY KEY,
    action_labels JSONB NOT NULL DEFAULT '{}'::jsonb,
    heading VARCHAR(255) NOT NULL,
    projects JSONB NOT NULL DEFAULT '[]'::jsonb,
    section_label VARCHAR(128) NOT NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
