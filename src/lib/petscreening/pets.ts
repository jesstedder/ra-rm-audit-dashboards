import { createPsClient } from './client.js';

export interface PsProfile {
  id: number;
  name: string;
  species: string;
  kind: string;
  status: string;
  pawScore: number;
  score: number;
  publicToken: string;
  ownerName: string;
  unitAddress: string | null;
  unitNumber: string | null;
  createdAt: string;
  sharedAt: string | null;
  assistanceType: string | null;
  archived: boolean;
  archiveReason: string | null;
  highlights: string[];
  missingRequiredFields: string[];
}

interface RawPsProfile {
  id: number;
  name: string;
  species: string;
  kind: string;
  status: string;
  public_token: string;
  created_at?: string;
  archived?: boolean;
  archive_reason?: string | null;
  assistance_type?: string | null;
  user?: { full_name?: string };
  property_manager?: {
    shared_at?: string;
    unit?: { address_1?: string };
    screening_info?: {
      paw_score?: number;
      score?: number;
      highlights?: string[];
      missing_required_fields?: string[];
    };
  };
}

interface PsProfilesResponse {
  pet_profiles: RawPsProfile[];
  meta?: { total_pages?: number; current_page?: number };
}

function parseUnitNumber(address: string | null | undefined): string | null {
  if (!address) return null;
  const match = address.match(/^(\d+)/);
  return match?.[1] ?? null;
}

export async function getAllPsProfiles(env: {
  PETSCREENING_USERNAME: string;
  PETSCREENING_PASSWORD: string;
  PETSCREENER_PMID: string;
}): Promise<PsProfile[]> {
  const client = await createPsClient({
    username: env.PETSCREENING_USERNAME,
    password: env.PETSCREENING_PASSWORD,
  });

  const pmid = env.PETSCREENER_PMID;
  const PAGE_SIZE = 25;
  const all: PsProfile[] = [];
  let page = 1;

  while (true) {
    const qs = `q%5Bwith_status_for_manager%5D=all&q%5Bsorted_by%5D=shared_at&page=${page}`;
    const data = await client.get<PsProfilesResponse>(
      `/web_api/v1/property_managers/${pmid}/pet_profiles?${qs}`,
    );

    const profiles = data.pet_profiles ?? [];
    for (const p of profiles) {
      const unitAddress = p.property_manager?.unit?.address_1 ?? null;
      const si = p.property_manager?.screening_info;
      all.push({
        id: p.id,
        name: p.name,
        species: p.species,
        kind: p.kind,
        status: p.status,
        pawScore: si?.paw_score ?? 0,
        score: si?.score ?? 0,
        publicToken: p.public_token,
        ownerName: p.user?.full_name ?? '',
        unitAddress: unitAddress ?? null,
        unitNumber: parseUnitNumber(unitAddress ?? null),
        createdAt: p.created_at ?? '',
        sharedAt: p.property_manager?.shared_at ?? null,
        assistanceType: p.assistance_type ?? null,
        archived: p.archived ?? false,
        archiveReason: p.archive_reason ?? null,
        highlights: si?.highlights ?? [],
        missingRequiredFields: si?.missing_required_fields ?? [],
      });
    }

    if (profiles.length < PAGE_SIZE) break;
    page++;
  }

  return all;
}
