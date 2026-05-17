import type { RMClient } from '../client.js';
import { getChargeTypes, findPetFeeChargeTypes, getRecurringChargesByTypeIds } from '../charges.js';
import { getAllPets, getTenantIdsWithPets } from '../pets.js';
import { getTenantsByIds, tenantDisplayName } from '../tenants.js';
import { getAllUnits, buildUnitNameMap } from '../units.js';

export interface PetFeeAuditResult {
  tenantId: number;
  tenantName: string;
  unitId: number | undefined;
  unitName: string | undefined;
  chargeTypeName: string;
  amount: number;
  status: string;
  moveOutDate: string | undefined;
}

export async function findTenantsWithPetFeeButNoPet(
  client: RMClient,
): Promise<PetFeeAuditResult[]> {
  const chargeTypes = await getChargeTypes(client);
  const petFeeTypes = findPetFeeChargeTypes(chargeTypes);

  if (petFeeTypes.length === 0) {
    console.warn('Warning: No charge types matched "Pet Fee" or "PF". Check your ChargeTypes.');
    return [];
  }

  const matchedNames = petFeeTypes.map(ct => `"${ct.Name}" (ID: ${ct.ChargeTypeID})`).join(', ');
  console.log(`Matched pet fee charge types: ${matchedNames}`);

  const petFeeTypeIds = petFeeTypes.map(ct => ct.ChargeTypeID);
  const chargeTypeById = new Map(petFeeTypes.map(ct => [ct.ChargeTypeID, ct]));

  const [recurringCharges, pets, units] = await Promise.all([
    getRecurringChargesByTypeIds(client, petFeeTypeIds),
    getAllPets(client),
    getAllUnits(client),
  ]);

  const unitNameMap = buildUnitNameMap(units);
  const tenantIdsWithPets = getTenantIdsWithPets(pets);
  const chargesWithoutPet = recurringCharges.filter(c => !tenantIdsWithPets.has(c.TenantID));

  if (chargesWithoutPet.length === 0) return [];

  const tenantIds = new Set(chargesWithoutPet.map(c => c.TenantID));
  const tenants = await getTenantsByIds(client, tenantIds);
  const tenantById = new Map(tenants.map(t => [t.TenantID, t]));

  return chargesWithoutPet.map(charge => {
    const tenant = tenantById.get(charge.TenantID);
    const chargeType = chargeTypeById.get(charge.ChargeTypeID);
    return {
      tenantId: charge.TenantID,
      tenantName: tenant ? tenantDisplayName(tenant) : `Tenant #${charge.TenantID}`,
      unitId: charge.UnitID,
      unitName: charge.UnitID != null ? unitNameMap.get(charge.UnitID) : undefined,
      chargeTypeName: chargeType?.Name ?? `ChargeType #${charge.ChargeTypeID}`,
      amount: charge.Amount,
      status: tenant?.Status ?? 'Unknown',
      moveOutDate: tenant?.PostingEndDate,
    };
  });
}
