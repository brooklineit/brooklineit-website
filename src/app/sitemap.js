export default function sitemap() {
  const baseUrl = 'https://brooklineit.com';
  
  const routes = [
    '', '/about', '/what-we-build', '/contact',
    '/managed-it', '/cloud', '/cybersecurity',
    '/network', '/on-premises', '/voice',
  ];

  return routes.map(route => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: route === '' ? 1 : route === '/what-we-build' ? 0.9 : 0.8,
  }));
}
