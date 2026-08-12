const [,, baseUrl, slug] = process.argv;
if (!baseUrl || !slug) {
  console.error('Usage: node generate-subid-links.js <base_url> <slug>');
  process.exit(1);
}
const url = new URL(baseUrl);
url.searchParams.set('sub_id', slug);
console.log(url.toString());