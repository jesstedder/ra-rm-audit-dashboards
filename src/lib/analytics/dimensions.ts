export type DimensionType = 'categorical' | 'temporal' | 'boolean';
export type DimensionGroup = 'petProfile' | 'time' | 'rentManager' | 'screeningFlags';

export interface DimensionConfig {
  id: string;
  label: string;
  type: DimensionType;
  group: DimensionGroup;
}

export interface MeasureConfig {
  id: string;
  label: string;
}

export const STATIC_DIMENSIONS: DimensionConfig[] = [
  // Pet Profile
  { id: 'species', label: 'Species', type: 'categorical', group: 'petProfile' },
  { id: 'kind', label: 'Kind', type: 'categorical', group: 'petProfile' },
  { id: 'status', label: 'PS Status', type: 'categorical', group: 'petProfile' },
  { id: 'paw_score', label: 'Paw Score', type: 'categorical', group: 'petProfile' },
  { id: 'paw_score_bucket', label: 'Paw Score Range', type: 'categorical', group: 'petProfile' },
  { id: 'assistance_type', label: 'Assistance Type', type: 'categorical', group: 'petProfile' },
  { id: 'archived', label: 'Archived', type: 'boolean', group: 'petProfile' },
  // Time
  { id: 'shared_at_month', label: 'Submission Month', type: 'temporal', group: 'time' },
  { id: 'snapshot_date_month', label: 'Snapshot Month', type: 'temporal', group: 'time' },
  // RentManager
  { id: 'unit_name', label: 'Unit', type: 'categorical', group: 'rentManager' },
  { id: 'tenant_status', label: 'Tenant Status', type: 'categorical', group: 'rentManager' },
  { id: 'has_rm_pet', label: 'Has RM Pet', type: 'boolean', group: 'rentManager' },
  { id: 'has_gap', label: 'Has Gap (PS, no RM pet)', type: 'boolean', group: 'rentManager' },
];

export const MEASURES: MeasureConfig[] = [
  { id: 'count_profiles', label: '# Pet Profiles' },
  { id: 'count_distinct_units', label: '# Units' },
  { id: 'avg_paw_score', label: 'Avg Paw Score' },
  { id: 'avg_score', label: 'Avg Raw Score' },
];

export const VALID_DIMENSION_IDS = new Set(STATIC_DIMENSIONS.map(d => d.id));
export const VALID_MEASURE_IDS = new Set(MEASURES.map(m => m.id));

export function highlightDimension(label: string): DimensionConfig {
  return {
    id: `highlight:${label}`,
    label: `Flag: ${label}`,
    type: 'boolean',
    group: 'screeningFlags',
  };
}
