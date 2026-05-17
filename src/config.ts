export const config = {
  rm: {
    webUrl: 'https://rollinga.rmx.rentmanager.com',
  },
  ps: {
    baseUrl: 'https://rolling-acres.petscreening.com',
  },
  cfAccess: {
    domain: 'https://432milton.cloudflareaccess.com',
  },
  cache: {
    baseUrl: 'https://cache.internal',
    ttlSeconds: 300,
  },
} as const;
