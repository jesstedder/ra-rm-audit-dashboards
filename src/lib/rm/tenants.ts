import type { RMClient } from './client.js';

export interface Tenant {
  TenantID: number;
  FirstName: string;
  LastName: string;
  UnitID?: number;
}

export async function getAllTenants(client: RMClient): Promise<Tenant[]> {
  return client.getAll<Tenant>('/Tenants');
}

export async function getTenantsByIds(client: RMClient, ids: Set<number>): Promise<Tenant[]> {
  if (ids.size === 0) return [];
  const all = await getAllTenants(client);
  return all.filter(t => ids.has(t.TenantID));
}

export function tenantDisplayName(tenant: Tenant): string {
  return `${tenant.FirstName} ${tenant.LastName}`;
}
