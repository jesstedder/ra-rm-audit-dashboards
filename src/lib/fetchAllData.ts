import { createClient } from './rm/client.js';
import { config } from '../config.js';
import { getAllPets, type Pet } from './rm/pets.js';
import { getAllUnits, type Unit } from './rm/units.js';
import { getAllTenants, type Tenant } from './rm/tenants.js';
import { getAllLeases, type Lease } from './rm/leases.js';
import { getAllPsProfiles, type PsProfile } from './petscreening/pets.js';
import { getCached, setCached } from './cache.js';

const CACHE_TTL = config.cache.ttlSeconds;

export interface AllData {
  psProfiles: PsProfile[];
  rmPets: Pet[];
  rmUnits: Unit[];
  rmTenants: Tenant[];
  rmLeases: Lease[];
}

interface RmEnv {
  RM_BASEURL: string;
  RM_USERNAME: string;
  RM_PASSWORD: string;
  RM_LOCATIONID: string;
}

interface PsEnv {
  PETSCREENING_USERNAME: string;
  PETSCREENING_PASSWORD: string;
  PETSCREENER_PMID: string;
}

export async function fetchPsProfiles(env: PsEnv): Promise<PsProfile[]> {
  const cached = await getCached<PsProfile[]>('ps-profiles');
  if (cached) return cached;
  return fetchPs(env);
}

export async function fetchAllData(env: RmEnv & PsEnv): Promise<AllData> {
  const [cachedPs, cachedRm] = await Promise.all([
    getCached<PsProfile[]>('ps-profiles'),
    getCached<{ pets: Pet[]; units: Unit[]; tenants: Tenant[]; leases: Lease[] }>('rm-data'),
  ]);

  const [psProfiles, rmBundle] = await Promise.all([
    cachedPs ?? fetchPs(env),
    cachedRm ?? fetchRm(env),
  ]);

  return {
    psProfiles,
    rmPets: rmBundle.pets,
    rmUnits: rmBundle.units,
    rmTenants: rmBundle.tenants,
    rmLeases: rmBundle.leases,
  };
}

async function fetchPs(env: PsEnv): Promise<PsProfile[]> {
  const profiles = await getAllPsProfiles(env);
  await setCached('ps-profiles', profiles, CACHE_TTL);
  return profiles;
}

async function fetchRm(env: RmEnv) {
  const client = createClient({
    baseUrl: env.RM_BASEURL,
    username: env.RM_USERNAME,
    password: env.RM_PASSWORD,
    locationId: parseInt(env.RM_LOCATIONID, 10),
  });

  const [pets, units, tenants, leases] = await Promise.all([
    getAllPets(client),
    getAllUnits(client),
    getAllTenants(client),
    getAllLeases(client),
  ]);

  const bundle = { pets, units, tenants, leases };
  await setCached('rm-data', bundle, CACHE_TTL);
  return bundle;
}
