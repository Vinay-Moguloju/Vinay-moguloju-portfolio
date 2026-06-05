UPDATE portfolio_contact_content
SET
    footer_copyright = 'Built with React + TypeScript · React native · Mobile Apps · Next Js · HTML · CSS · SASS · Cursor · Gen AI',
    updated_at = NOW()
WHERE footer_copyright LIKE '© %'
   OR footer_copyright LIKE 'Built with React + TypeScript · React native · Mobile Apps · Next js%';
