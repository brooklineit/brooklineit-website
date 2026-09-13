export default function sitemap() {
  const baseUrl = 'https://www.brooklineit.com';
  
  const routes = [
    '', '/about', '/what-we-build', '/contact',
    '/managed-it', '/cloud', '/cybersecurity',
    '/network', '/on-premises', '/voice', '/marketing', '/marketing/restoration', '/market-review',
  ];

  return routes.map(route => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: route === '' ? 1 : ['/what-we-build', '/marketing', '/marketing/restoration'].includes(route) ? 0.9 : 0.8,
  }));
}
