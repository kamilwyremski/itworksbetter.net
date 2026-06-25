const fs = require('node:fs');
const path = require('node:path');

const rootDir = path.resolve(__dirname, '..');
const publicDir = path.join(rootDir, 'public');

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function writeFile(filePath, content) {
  fs.writeFileSync(filePath, content, 'utf8');
}

function buildFrontmatter({ title, url, updated, sources, licence }) {
  const sourceLines = sources.map((source) => `  - ${source}`).join('\n');

  return [
    '---',
    `title: ${title}`,
    `url: ${url}`,
    `updated: ${updated}`,
    'sources:',
    sourceLines,
    `licence: ${licence}`,
    '---',
    '',
  ].join('\n');
}

function generateScriptsMarkdown() {
  const scriptsJson = readJson(path.join(publicDir, 'api', 'scripts.json'));
  const scripts = scriptsJson.data || [];

  const frontmatter = buildFrontmatter({
    title: 'Website Scripts - IT Works Better',
    url: 'https://itworksbetter.net/scripts',
    updated: new Date().toISOString().slice(0, 10),
    sources: ['app/templates/scripts.hbs', 'public/api/scripts.json'],
    licence: 'All rights reserved',
  });

  const body = [
    '# Website Scripts',
    '',
    'We offer website scripts that enable you to quickly and affordably create your own portal. You can purchase them in the online shop, and older projects are available on GitHub.',
    '',
    '## Scripts',
    '',
    ...scripts.flatMap((script) => {
      const lines = [
        `### ${script.name}`,
        `- Description: ${script.description}`,
        `- Demo: ${script.demo}`,
        `- URL: ${script.url}`,
        `- Type: ${script.free ? 'Free download' : 'Commercial'}`,
        '',
      ];

      return lines;
    }),
  ].join('\n');

  writeFile(path.join(publicDir, 'scripts.md'), `${frontmatter}${body}`);
}

function generateProjectsMarkdown() {
  const projectsJson = readJson(path.join(publicDir, 'api', 'projects.json'));
  const projects = projectsJson.data || [];

  const frontmatter = buildFrontmatter({
    title: 'Projects of Web Applications - IT Works Better',
    url: 'https://itworksbetter.net/projects',
    updated: new Date().toISOString().slice(0, 10),
    sources: ['app/templates/projects.hbs', 'public/api/projects.json'],
    licence: 'All rights reserved',
  });

  const body = [
    '# Projects of Web Applications',
    '',
    'Portfolio of websites and applications created or co-created by IT Works Better.',
    '',
    '## Selected projects',
    '',
    ...projects.map((project) =>
      `- ${project.name} - https://${project.url} - Stack: ${project.stack}`
    ),
    '',
  ].join('\n');

  writeFile(path.join(publicDir, 'projects.md'), `${frontmatter}${body}`);
}

function htmlToMarkdown(html) {
  return html
    .replace(/\r\n/g, '\n')
    .replace(/<a[^>]*href="([^"]+)"[^>]*>([\s\S]*?)<\/a>/gi, '[$2]($1)')
    .replace(/<strong>([\s\S]*?)<\/strong>/gi, '**$1**')
    .replace(/<\/(h1|h2|h3|h4|h5|h6)>/gi, '\n\n')
    .replace(/<(h1|h2|h3|h4|h5|h6)[^>]*>/gi, '\n')
    .replace(/<\/p>/gi, '\n\n')
    .replace(/<p[^>]*>/gi, '')
    .replace(/<li[^>]*>/gi, '- ')
    .replace(/<\/li>/gi, '\n')
    .replace(/<\/?ol[^>]*>/gi, '\n')
    .replace(/<\/?ul[^>]*>/gi, '\n')
    .replace(/<\/?section[^>]*>/gi, '\n')
    .replace(/<\/?span[^>]*>/gi, '')
    .replace(/<[^>]+>/g, '')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/\n[ \t]+/g, '\n')
    .replace(/[ \t]{2,}/g, ' ')
    .replace(/\n{3,}/g, '\n\n')
    .trim();
}

function generatePrivacyPolicyMarkdown() {
  const templatePath = path.join(rootDir, 'app', 'templates', 'privacy-policy.hbs');
  const sourceHtml = fs.readFileSync(templatePath, 'utf8');

  const frontmatter = buildFrontmatter({
    title: 'Privacy Policy - IT Works Better',
    url: 'https://itworksbetter.net/privacy-policy',
    updated: new Date().toISOString().slice(0, 10),
    sources: ['app/templates/privacy-policy.hbs'],
    licence: 'All rights reserved',
  });

  let markdownBody = htmlToMarkdown(sourceHtml)
    .replace(/\n-\s*\n\*\*(.+?)\*\*/g, '\n## $1')
    .replace(/(^|\n)- \*\*(.+?)\*\*(?=\n|$)/g, '$1## $2')
    .replace(/^Privacy\s+Policy\s*\n?/i, '')
    .replace(/\n{3,}/g, '\n\n')
    .trim();

  markdownBody = `# Privacy Policy\n\n${markdownBody}`;

  writeFile(path.join(publicDir, 'privacy-policy.md'), `${frontmatter}${markdownBody}\n`);
}

function main() {
  generateScriptsMarkdown();
  generateProjectsMarkdown();
  generatePrivacyPolicyMarkdown();
  // eslint-disable-next-line no-console
  console.log(
    'Generated public/scripts.md, public/projects.md, and public/privacy-policy.md.'
  );
}

main();
