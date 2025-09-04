// generate-sitemap.js
const fs = require('fs');
const path = require('path');

// Базовый URL сайта
const BASE_URL = 'https://debian-nginx-nodejs.qucu.ru';

// Массив страниц сайта
const pages = [
  { url: '/', changefreq: 'weekly', priority: 1.0 },
  { url: '/about', changefreq: 'monthly', priority: 0.8 },
  { url: '/services', changefreq: 'weekly', priority: 0.9 },
  { url: '/contact', changefreq: 'monthly', priority: 0.7 },
];

// Функция для генерации sitemap.xml
function generateSitemap() {
  const now = new Date().toISOString().split('T')[0]; // YYYY-MM-DD
  const urls = pages.map(page => `
  <url>
    <loc>${BASE_URL}${page.url}</loc>
    <lastmod>${now}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('');

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

  fs.writeFileSync(path.join(__dirname, 'sitemap.xml'), sitemap, 'utf8');
  console.log('sitemap.xml успешно сгенерирован!');
}

// Запуск генерации
generateSitemap();
