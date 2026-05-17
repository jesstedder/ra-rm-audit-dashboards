import type { RMClient } from './client.js';

export interface ChargeType {
  ChargeTypeID: number;
  Name: string;
  DisplayName?: string;
  IsActive?: boolean;
}

export interface RecurringCharge {
  RecurringChargeID: number;
  TenantID: number;
  ChargeTypeID: number;
  Amount: number;
  UnitID?: number;
}

export async function getChargeTypes(client: RMClient): Promise<ChargeType[]> {
  return client.getAll<ChargeType>('/ChargeTypes');
}

const PET_FEE_NAMES = new Set(['pet fee', 'pf']);

export function findPetFeeChargeTypes(chargeTypes: ChargeType[]): ChargeType[] {
  return chargeTypes.filter(ct => PET_FEE_NAMES.has(ct.Name.toLowerCase()));
}

export async function getRecurringChargesByTypeIds(
  client: RMClient,
  chargeTypeIds: number[],
): Promise<RecurringCharge[]> {
  if (chargeTypeIds.length === 0) return [];

  const pages = await Promise.all(
    chargeTypeIds.map(id =>
      client.getAll<RecurringCharge>('/RecurringCharges', `filters=ChargeTypeID,eq,${id}`),
    ),
  );
  return pages.flat();
}
