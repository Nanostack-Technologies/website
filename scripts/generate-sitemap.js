/**
 * Dynamic Sitemap Generator for NanoStack Technologies
 * 
 * This script generates a sitemap.xml file dynamically based on your routes.
 * Use this when you add more pages or want to automate sitemap generation.
 * 
 * To run: node scripts/generate-sitemap.js
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuration
const DOMAIN = 'https://nanostacktechnologies.com';
const OUTPUT_PATH = path.join(__dirname, '../public/sitemap.xml');

// Define your routes with metadata
const routes = [
    {
        path: '/',
        priority: 1.0,
        changefreq: 'weekly',
        lastmod: new Date().toISOString().split('T')[0],
        image: {
            loc: `${DOMAIN}/og-image.png`,
            title: 'NanoStack Technologies - Web Development & Automation Experts',
            caption: 'Transform your business with modern Web Development and Automation solutions'
        }
    },
    {
        path: '/open-source',
        priority: 0.8,
        changefreq: 'monthly',
        lastmod: new Date().toISOString().split('T')[0]
    }
];

// Homepage sections
const sections = [
    { id: 'hero', priority: 0.9, changefreq: 'monthly' },
    { id: 'expertise', priority: 0.9, changefreq: 'monthly' },
    { id: 'projects', priority: 0.8, changefreq: 'weekly' },
    { id: 'testimonials', priority: 0.7, changefreq: 'monthly' },
    { id: 'contact', priority: 0.8, changefreq: 'monthly' }
];

// Helper function to generate URL entry
function generateUrlEntry(url, priority, changefreq, lastmod, imageData = null) {
    const lastModDate = lastmod || new Date().toISOString().split('T')[0];

    let entry = `  <url>
    <loc>${DOMAIN}${url}</loc>
    <lastmod>${lastModDate}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>`;

    if (imageData) {
        entry += `
    <image:image>
      <image:loc>${imageData.loc}</image:loc>
      <image:title>${imageData.title}</image:title>
      <image:caption>${imageData.caption}</image:caption>
    </image:image>`;
    }

    entry += `
  </url>`;

    return entry;
}

// Generate sitemap XML
function generateSitemap() {
    let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
                           http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
  
  <!-- Main Routes -->
`;

    // Add main routes
    routes.forEach(route => {
        sitemap += generateUrlEntry(
            route.path,
            route.priority,
            route.changefreq,
            route.lastmod,
            route.image
        ) + '\n  \n';
    });

    sitemap += `  <!-- Homepage Sections -->
`;

    // Add homepage sections
    sections.forEach(section => {
        sitemap += generateUrlEntry(
            `/#${section.id}`,
            section.priority,
            section.changefreq,
            new Date().toISOString().split('T')[0]
        ) + '\n  \n';
    });

    sitemap += `</urlset>`;

    return sitemap;
}

// Write sitemap to file
function writeSitemap() {
    try {
        const sitemapContent = generateSitemap();
        fs.writeFileSync(OUTPUT_PATH, sitemapContent, 'utf8');
        console.log('✅ Sitemap generated successfully!');
        console.log(`📄 Location: ${OUTPUT_PATH}`);
        console.log(`🌐 URL: ${DOMAIN}/sitemap.xml`);
        console.log(`📊 Total URLs: ${routes.length + sections.length}`);
    } catch (error) {
        console.error('❌ Error generating sitemap:', error);
        process.exit(1);
    }
}

// Ping search engines about sitemap update
async function pingSitemapUpdate() {
    const sitemapUrl = encodeURIComponent(`${DOMAIN}/sitemap.xml`);
    const pingUrls = [
        `https://www.google.com/ping?sitemap=${sitemapUrl}`,
        `https://www.bing.com/ping?sitemap=${sitemapUrl}`
    ];

    console.log('\n🔔 Pinging search engines...');

    for (const url of pingUrls) {
        try {
            const engine = url.includes('google') ? 'Google' : 'Bing';
            console.log(`   Notifying ${engine}...`);
            // Uncomment below to actually ping (requires fetch or axios)
            // await fetch(url);
            console.log(`   ✅ ${engine} notified`);
        } catch (error) {
            console.log(`   ❌ Failed to notify ${url}`);
        }
    }
}

// Main execution
console.log('🚀 Generating sitemap for NanoStack Technologies...\n');
writeSitemap();

// Optionally ping search engines (uncomment when ready)
// pingSitemapUpdate();

console.log('\n📝 Next Steps:');
console.log('1. Deploy updated sitemap to production');
console.log('2. Submit to Google Search Console');
console.log('3. Submit to Bing Webmaster Tools');
console.log('4. Monitor indexing status\n');
