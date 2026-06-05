UPDATE portfolio_contact_content
SET
    footer_copyright = '© 2014 Vinay Kumar Moguloju · Senior Fullstack Engineer · Built with React + TypeScript · React native · Mobile Apps · Next js · HTML · CSS · SASS · Cursor · Gen AI',
    updated_at = NOW()
WHERE footer_copyright LIKE '© 2026%';
