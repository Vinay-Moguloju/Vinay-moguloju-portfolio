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
