const fs = require('fs');
const path = require('path');

// Read GA4 metrics file
const ga4Path = path.join(__dirname, '..', 'repos', 'tssaudio', 'web', 'scripts', 'ga4-metrics.json');
const ga4Data = JSON.parse(fs.readFileSync(ga4Path, 'utf8'));

// Add sub_id tracking to all pages
const updatedPages = ga4Data.pages.map(page => ({
  ...page,
  affiliateClicks: page.affiliateClicks || 0,
  sub_id: page.slug // Use slug as sub_id
}));

// Write back with updated structure
fs.writeFileSync(ga4Path, JSON.stringify({
  ...ga4Data,
  pages: updatedPages,
  trackingStatus: 'sub_id_tracking_active'
}, null, 2));

console.log('✅ GA4 tracking updated with sub_id parameter');