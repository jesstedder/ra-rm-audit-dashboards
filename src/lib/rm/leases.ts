import type { RMClient } from './client.js';

export interface Lease {
  LeaseID: number;
  TenantID: number;
  UnitID: number;
  MoveInDate?: string;
  MoveOutDate?: string;
}

export async function getAllLeases(client: RMClient): Promise<Lease[]> {
  return client.getAll<Lease>('/Leases');
}

export function buildTenantUnitMap(leases: Lease[]): Map<number, number> {
  const map = new Map<number, number>();
  for (const lease of leases) {
    // Most recent lease wins if multiple — leases arrive in insertion order
    // Only map if no MoveOutDate (active lease) or fall back to any
    if (!map.has(lease.TenantID) || !lease.MoveOutDate) {
      map.set(lease.TenantID, lease.UnitID);
    }
  }
  return map;
}
