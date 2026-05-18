export const config = {
  rm: {
    webUrl: 'https://rollinga.rmx.rentmanager.com',
    propertyId: 1,
  },
  ps: {
    baseUrl: 'https://rolling-acres.petscreening.com',
  },
  cfAccess: {
    domain: 'https://432milton.cloudflareaccess.com',
  },
  cache: {
    baseUrl: 'https://cache.internal',
    ttlSeconds: 600,
  },
} as const;
