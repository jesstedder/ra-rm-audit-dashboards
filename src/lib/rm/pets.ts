import type { RMClient } from './client.js';

export interface Pet {
  PetID: number;
  TenantID: number;
  Name?: string;
  PetTypeID?: number;
  Breed?: string;
  Description?: string;
}

export async function getAllPets(client: RMClient): Promise<Pet[]> {
  return client.getAll<Pet>('/Pets');
}

export function getTenantIdsWithPets(pets: Pet[]): Set<number> {
  return new Set(pets.map(p => p.TenantID));
}
