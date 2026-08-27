import { resources } from './catalog.js';

const search = document.querySelector('#search');
const category = document.querySelector('#category');
const grid = document.querySelector('#grid');
const count = document.querySelector('#count');

[...new Set(resources.map((resource) => resource.category))]
  .sort()
  .forEach((name) => category.add(new Option(name, name)));

function resourceCard(resource) {
  const formats = resource.formats.map((format) => `<span>${format}</span>`).join('');
  return `<article class="card">
    <div class="meta">${resource.category}</div>
    <h2>${resource.name}</h2>
    <div class="chips">${formats}</div>
    <p>${resource.note}</p>
    <div class="check">Before shipping: verify source, version, identifiers, and license.</div>
  </article>`;
}

function render() {
  const query = search.value.trim().toLowerCase();
  const selectedCategory = category.value;
  const matches = resources.filter((resource) => {
    const matchesCategory = selectedCategory === 'all' || resource.category === selectedCategory;
    const searchable = `${resource.name} ${resource.category} ${resource.note}`.toLowerCase();
    return matchesCategory && (!query || searchable.includes(query));
  });

  count.textContent = `${matches.length} resource type${matches.length === 1 ? '' : 's'}`;
  grid.innerHTML = matches.length
    ? matches.map(resourceCard).join('')
    : '<p class="empty">No resource types match those filters. Try a broader search.</p>';
}

search.addEventListener('input', render);
category.addEventListener('change', render);
render();
