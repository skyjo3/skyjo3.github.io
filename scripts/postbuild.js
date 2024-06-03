const fs = require('fs');
const path = require('path');

const buildDir = path.join(__dirname, '..', 'build');  // Navigate up one directory, then to build

const indexHtml = fs.readFileSync(path.join(buildDir, 'index.html'), 'utf8');
const script = `
<script>
  if (window.location.pathname !== "/" && window.location.pathname !== "/404.html") {
    window.location.replace('/#' + window.location.pathname + window.location.search);
  }
</script>
`;

const modifiedHtml = indexHtml.replace('</body>', `${script}</body>`);
const filePath = path.join(buildDir, '404.html');

fs.writeFileSync(filePath, modifiedHtml);  // Corrected to write modified HTML content to 404.html
