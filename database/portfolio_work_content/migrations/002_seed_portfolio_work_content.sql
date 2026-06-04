-- Seed: PORTFOLIO_PROJECTS_CONTENT (frontend/src/dataservices/content/portfolioContent.ts)

INSERT INTO portfolio_work_content (
    action_labels,
    heading,
    projects,
    section_label
) VALUES (
    '{"caseStudy":"Case study","code":"Code","live":"Live"}'::jsonb,
    'Selected work & innovations',
    '[
      {"accentColorKey":"primary","category":"E-Commerce / MFE","description":"Customer-facing micro-frontend powering product listing, product detail, cart, checkout, and account experiences for Abercrombie & Fitch and Hollister. Delivered accessible UI with Next.js SSR/SSG, Redux Toolkit, GraphQL, Storybook, and Core Web Vitals optimization.","id":1,"imageUrl":"https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?w=800&h=500&fit=crop&auto=format","stack":["React 18","Next.js","TypeScript","Redux Toolkit","GraphQL","Storybook"],"tagline":"Customer storefront micro-frontend","title":"Customer MFE","year":"2023–Present"},
      {"accentColorKey":"purple","category":"Platform Migration","description":"Owned the Associate Discount repository end-to-end — bootstrapped the React 18 codebase from scratch and migrated from vanilla JavaScript to improve reusability, developer experience, and performance using Vite, testing harnesses, and shared UI patterns.","id":2,"imageUrl":"https://images.unsplash.com/photo-1650661926447-9efb2610f64c?w=800&h=500&fit=crop&auto=format","stack":["React 18","Vite","TypeScript","Redux Saga","ESLint","Prettier"],"tagline":"Vanilla JS to React 18 migration","title":"Associate Discount","year":"2023–Present"},
      {"accentColorKey":"amber","category":"Innovation / AI","description":"Hackathon project: built a Gemini-powered AI chatbot anchored on the storefront so customers can ask policy and FAQ questions and receive concise, helpful summaries — improving self-service support on customer-facing pages.","id":3,"imageUrl":"https://images.unsplash.com/photo-1675334758735-5f989ff8237f?w=800&h=500&fit=crop&auto=format","stack":["React","Gemini API","Node.js","Feature Flags","TypeScript"],"tagline":"Gemini-powered storefront chatbot","title":"AI Storefront Chatbot","year":"Hackathon"},
      {"accentColorKey":"coral","category":"Retail / POS","description":"Built React/Redux POS screens for Verizon store associates — including in-store pickup, same-day delivery, store appointments, and order lookup — with Storybook-documented components, WCAG 2.1 AA accessibility, and AWS S3/CloudFront deployment.","id":4,"imageUrl":"https://images.unsplash.com/photo-1549317336-206569e8475c?w=800&h=500&fit=crop&auto=format","stack":["React","Redux","TypeScript","Storybook","AWS S3","CloudFront"],"tagline":"Associate point-of-sale platform","title":"Verizon POS","year":"2019–2021"}
    ]'::jsonb,
    '02 / Work'
);
