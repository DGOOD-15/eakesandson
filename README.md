Eakes & Son Excavation Website
A professional, responsive website for Eakes & Son Excavation, showcasing excavation services, project gallery, and contact information. Built with React and Tailwind CSS, the site is designed to highlight the company's expertise in land clearing, demolition, grading, drain tiles, driveways, and bush hogging, with a rugged yet polished aesthetic.
Table of Contents

Features
Tech Stack
Project Structure
Setup and Installation
Updating Content
Deployment
Maintenance

Features

About Section: Introduces the company with a "100% Licensed and Insured" stamp on a featured image.
Services Section: Displays services in a horizontal scroll (desktop) or vertical stack (mobile) with hover effects and a "Get Your Free Estimate" CTA.
Gallery Section: Showcases project photos from Facebook posts in a 3-column grid (desktop) or single-column stack (mobile), with carousels for multi-image posts.
Contact Section: Provides clickable phone, email, and address details with a prominent CTA button.
Responsive Design: Optimized for desktop, tablet, and mobile using Tailwind CSS.
Accessibility: Includes alt text, focus states, and ARIA labels for better usability.

Tech Stack

React: Frontend framework for building components.
Tailwind CSS: Utility-first CSS for styling.
react-slick: Carousel library for the Gallery section.
Node.js: Runtime for development and build processes.
Vite (or Create React App): Build tool (assumed; update if different).

Project Structure
eakes-son-excavation/
├── public/
│ ├── favicon.ico
│ └── index.html
├── src/
│ ├── assets/
│ │ ├── about.jpg
│ │ ├── stamp.png
│ │ ├── gallery/_.jpg
│ │ └── _.jpg (for Services images)
│ ├── components/
│ │ ├── About.jsx
│ │ ├── Services.jsx
│ │ ├── Gallery.jsx
│ │ └── Contact.jsx
│ ├── App.jsx
│ ├── index.css
│ └── main.jsx
├── package.json
├── vite.config.js
└── README.md

src/assets/: Contains images for About, Services, and Gallery.
src/components/: React components for each section.
index.css: Custom Tailwind styles (e.g., scrollbar-hide).

Setup and Installation

Clone the Repository:
git clone https://github.com/your-repo/eakes-son-excavation.git
cd eakes-son-excavation

Install Dependencies:Ensure Node.js (v16 or higher) is installed, then run:
npm install

This installs React, Tailwind CSS, react-slick, and slick-carousel.

Add Custom CSS:Ensure src/index.css includes:
@tailwind base;
@tailwind components;
@tailwind utilities;

.scrollbar-hide::-webkit-scrollbar {
display: none;
}
.scrollbar-hide {
-ms-overflow-style: none;
scrollbar-width: none;
}

Run the Development Server:
npm run dev

Open http://localhost:5173 (or port specified by Vite) to view the site.

Updating Content

Images:

Replace images in src/assets/ with high-resolution project photos (e.g., land-clearing.jpg, project1.jpg).
Optimize images (800-1200px wide, <200KB) using tools like TinyPNG.
Update image paths in About.jsx, Services.jsx, and Gallery.jsx:// Example in Services.jsx
const services = [
{ title: 'Land Clearing', image: '/src/assets/your-image.jpg' },
// ...
];

Contact Info:

Update Contact.jsx with your actual phone, email, and address:<a href="tel:+5551234567">(555) 123-4567</a>
<a href="mailto:contact@eakesandson.com">contact@eakesandson.com</a>

<p>456 Main St, Your City, ST 67890</p>

Gallery:

Add new projects to the projects array in Gallery.jsx:const projects = [
{ caption: "Your new caption", images: ["/src/assets/gallery/new-project-1.jpg", ...] },
// ...
];

Text:

Edit section headings, taglines, or captions in the respective .jsx files (e.g., "Our Services" in Services.jsx).

Deployment

Build the Project:
npm run build

This generates a dist/ folder with static files.

Hosting Options:

Netlify: Drag the dist/ folder to Netlify’s dashboard or use the CLI:npm install -g netlify-cli
netlify deploy --prod

Vercel: Connect your GitHub repo or run:npm install -g vercel
vercel --prod

Ensure your hosting platform serves the dist/ folder correctly.

Domain: Purchase a domain (e.g., via GoDaddy, Namecheap) and point it to your hosting provider.

Maintenance

Update Images: Regularly add new project photos to the Gallery section by updating src/assets/gallery/ and the projects array in Gallery.jsx.
Check Links: Verify phone and email links in Contact.jsx remain accurate.
Performance: Use Lighthouse (Chrome DevTools) to monitor site speed and SEO. Optimize images if load times increase.
Accessibility: Test with screen readers to ensure alt text and focus states work.

For questions or contributions, contact info@eakesandson.com.
