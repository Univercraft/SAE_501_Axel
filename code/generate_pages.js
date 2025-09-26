// generate_pages.js
const fs = require('fs');
const path = require('path');
const pages = require('./pages.js').pages; // Assure-toi d'exporter pages dans pages.js

// dossier de sortie
const outputDir = path.join(__dirname, 'generated_pages');
if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir);

pages.forEach(page => {
  const htmlContent = `
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <title>${page.title}</title>
  <link rel="stylesheet" href="styles/global.css">
</head>
<body>
  <div class="page ${page.style}">
    <div class="illustration" style="background-image:url('${page.image}')"></div>
    <div class="text-zone">
      <h1>${page.title}</h1>
      <p>${page.text}</p>
    </div>
  </div>
  <div id="nav">
    ${page.id > 1 ? `<a href="page_${page.id-1}.html">◀ Page précédente</a>` : ''}
    ${page.id < pages.length ? `<a href="page_${page.id+1}.html">Page suivante ▶</a>` : ''}
  </div>
</body>
</html>
`;

  const filename = `page_${page.id}.html`;
  fs.writeFileSync(path.join(outputDir, filename), htmlContent);
  console.log(`Page créée : ${filename}`);
});

console.log('Toutes les pages ont été générées !');
