INSERT INTO portfolio_contact_content (
    footer_copyright,
    form_fields,
    heading_accent,
    heading_primary,
    heading_suffix,
    intro,
    section_label,
    social_links,
    success_message,
    success_title
) VALUES (
    '© 2026 Vinay Kumar Moguloju · Senior Fullstack Engineer · Built with React + TypeScript',
    '{"emailLabel":"Email","emailPlaceholder":"you@example.com","messageLabel":"Message","messagePlaceholder":"Tell me about the role, project, or team...","nameLabel":"Name","namePlaceholder":"Your name","submitLabel":"Send message","title":"Send a message"}'::jsonb,
    ' Senior Fullstack teams',
    'Let''s connect for',
    '.',
    'I am open to Senior Fullstack engineer roles, contract work, and strong product/engineering collaborations. Based in Melissa, TX and experienced working remotely with distributed Agile teams across e-commerce, retail, and telecom.',
    '04 / Contact',
    '[
      {"handle":"mogulojuvinaykumar@gmail.com","href":"mailto:mogulojuvinaykumar@gmail.com","label":"Email","profileKey":"email"},
      {"handle":"571-295-8383","href":"tel:+15712958383","label":"Phone","profileKey":"phone"},
      {"handle":"Vinay Kumar Moguloju","href":"https://www.linkedin.com/in/vinay-kumar-moguloju-033267192","label":"LinkedIn","profileKey":"linkedIn"},
      {"handle":"@vinaymoguloju","href":"https://github.com/dashboard","label":"GitHub","profileKey":"github"}
    ]'::jsonb,
    'Thanks for reaching out. I''ll review your message and get back to you within 24 hours.',
    'Message sent!'
);
