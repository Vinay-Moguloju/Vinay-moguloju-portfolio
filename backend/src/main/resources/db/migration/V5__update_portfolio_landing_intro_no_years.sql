-- Remove years-of-experience wording from landing intro (existing rows).

UPDATE portfolio_landing_page_content
SET
    intro = 'Senior Fullstack Engineer building scalable SPAs and micro-frontends across e-commerce, retail, and telecom — focused on React, Next.js, performance, and WCAG 2.1 AA accessibility.',
    updated_at = NOW()
WHERE intro LIKE '%9+%';
