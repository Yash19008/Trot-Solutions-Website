import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.trotsolutions.com'
  
  const staticRoutes = [
    '',
    '/blog',
    '/careers',
    '/contact',
    '/resale-equipments',
    '/tech-talks',
    '/brokerage-resale',
    '/bromma',
    '/documentation-compliance',
    '/dutch-lanka',
    '/end-of-life-assessment-engineering-studies',
    '/end-of-life-services',
    '/engineering-products',
    '/health-assessment-diagnostics',
    '/heavy-lift-transport-logistics',
    '/lifecycle-cost-optimization',
    '/modernization-upgrades',
    '/optional-value-recovery-services',
    '/preventive-predictive-maintenance',
    '/safety-enhancements',
    '/scrap-management-recycling',
    '/structural-life-extension',
    '/sustainability-enhancements',
    '/technical-consulting-services',
    '/terms-and-privacy'
  ]

  return staticRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'daily' : 'weekly',
    priority: route === '' ? 1.0 : (['/contact', '/careers', '/resale-equipments', '/blog'].includes(route) ? 0.9 : 0.8),
  }))
}
