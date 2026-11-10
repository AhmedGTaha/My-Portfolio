import assert from 'node:assert/strict';
import { readFile, stat } from 'node:fs/promises';

const page = await readFile(new URL('../index.html', import.meta.url), 'utf8');
const readme = await readFile(new URL('../README.md', import.meta.url), 'utf8');

assert.match(page, /experience\.paralympic\.role/);
assert.match(page, /Bahrain Paralympic Committee/);
assert.match(page, /Sep 2026 - Oct 2026/);
assert.match(page, /data-gallery="ilumis"/);
assert.match(page, /projects\.ilumis\.scope/);
assert.match(page, /gallery\.ilumis\.title/);
assert.match(page, /ilumis:\s*\{[\s\S]*?github:\s*null,[\s\S]*?live:\s*null/);
assert.match(page, /images\/ilumis\/dashboard-redesigned\.jpg/);
assert.match(page, /images\/ilumis\/visa-management-redesigned\.jpg/);
assert.match(page, /images\/ilumis\/support-tickets-redesigned\.jpg/);
assert.match(page, /images\/ilumis\/ilumis-logo\.png/);
assert.match(page, /class="product-link-row ilumis-product-row"/);
assert.match(page, /data-gallery="ilumis" data-i18n-text="actions\.viewGallery"/);
assert.doesNotMatch(page, /projects\.ilumis\.scope[\s\S]{0,500}ilumis-logo\.png/);
assert.match(page, /'experience\.paralympic\.role':\s*'متدرب مهندس برمجيات'/);
assert.match(readme, /ILUMIS/);

const imagePaths = [
  'dashboard-redesigned.jpg',
  'customers-redesigned.jpg',
  'events-list-redesigned.jpg',
  'bookings-list-redesigned.jpg',
  'hotels-list-redesigned.jpg',
  'transportation-redesigned.jpg',
  'visa-management-redesigned.jpg',
  'support-tickets-redesigned.jpg',
  'ilumis-logo.png'
];

for (const imagePath of imagePaths) {
  const image = await stat(new URL(`../images/ilumis/${imagePath}`, import.meta.url));
  assert.ok(image.size > 0, `${imagePath} should not be empty`);
}
