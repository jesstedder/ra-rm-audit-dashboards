import type { RMClient } from './client.js';

export interface Unit {
  UnitID: number;
  Name: string;
}

export async function getAllUnits(client: RMClient): Promise<Unit[]> {
  return client.getAll<Unit>('/Units');
}

export function buildUnitNameMap(units: Unit[]): Map<number, string> {
  return new Map(units.map(u => [u.UnitID, u.Name]));
}
