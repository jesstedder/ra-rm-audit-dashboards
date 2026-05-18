import type { RMClient } from './client.js';

export interface ViolationStage {
  ViolationStageID: number;
  ViolationID: number;
  StageNumber: number;
  Name?: string;
  IsCommunicationSent: boolean;
  DueDate?: string;
  ConcurrencyID: number;
  IsCurrentStage: boolean;
}

export interface ViolationCode {
  ViolationCodeID: number;
  Code: string;
  Description: string;
  ResolveAction?: string;
}

export interface Tenant {
  TenantID: number;
  FirstName: string;
  LastName: string;
}

export interface Unit {
  UnitID: number;
  Name: string;
}

export interface Violation {
  ViolationID: number;
  PropertyID: number;
  TenantID: number;
  UnitID: number;
  ViolationCodeID: number;
  ViolationDate: string;
  Description?: string;
  ResolveAction?: string;
  IsClosed: boolean;
  ViolationStages: ViolationStage[];
  ViolationCode?: ViolationCode;
  Tenant?: Tenant;
  Unit?: Unit;
}

export interface CreateViolationItem {
  tenantId: number;
  unitId: number;
  violationCodeId: number;
  violationDate: string;
  dueDate: string;
  resolveAction?: string;
  description?: string;
  imageId?: number;
}

export interface ImageModel {
  ImageID: number;
}

export interface StageNotifyItem {
  violationId: number;
  stageId: number;
  concurrencyId: number;
}

export interface StageNotifyResult {
  violationId: number;
  stageId: number;
  success: boolean;
  error?: string;
}

export async function getViolations(client: RMClient, propertyId: number): Promise<Violation[]> {
  const qs = [
    `embeds=ViolationStages,ViolationCode,Tenant,Unit`,
    `fields=ViolationID,PropertyID,TenantID,UnitID,ViolationCodeID,ViolationDate,Description,ResolveAction,IsClosed,ViolationStages(ViolationStageID,ViolationID,StageNumber,Name,IsCommunicationSent,DueDate,ConcurrencyID,IsCurrentStage),ViolationCode(ViolationCodeID,Code,Description),Tenant(TenantID,FirstName,LastName),Unit(UnitID,Name)`,
    `filters=PropertyID,eq,${propertyId}`,
  ].join('&');
  const all = await client.getAll<Violation>('/Violations', qs);
  return all.filter(v => !v.IsClosed);
}

export async function getViolationCodes(client: RMClient): Promise<ViolationCode[]> {
  return client.getAll<ViolationCode>('/ViolationCodes', 'fields=ViolationCodeID,Code,Description,ResolveAction');
}

export async function createViolations(
  client: RMClient,
  propertyId: number,
  items: CreateViolationItem[],
): Promise<Violation[]> {
  const body = items.map(item => ({
    PropertyID: propertyId,
    TenantID: item.tenantId,
    UnitID: item.unitId,
    ViolationCodeID: item.violationCodeId,
    ViolationDate: item.violationDate,
    ...(item.resolveAction ? { ResolveAction: item.resolveAction } : {}),
    ...(item.description ? { Description: item.description } : {}),
    ...(item.imageId ? { ImageID: item.imageId } : {}),
    ViolationStages: [{
      StageNumber: 1,
      Name: 'Door Hanger',
      StageDate: item.violationDate,
      DueDate: item.dueDate,
      IsCurrentStage: true,
      IsStageCreated: true,
      IsCommunicationSent: false,
      ViolationStageAction: { Action: '' },
    }],
  }));
  return client.post<Violation[]>('/Violations?embeds=ViolationStages,ViolationStages.ViolationStageAction', body);
}

export async function uploadViolationImage(
  client: RMClient,
  violationId: number,
  imageFile: File,
): Promise<ImageModel> {
  const form = new FormData();
  form.append('file', imageFile);
  return client.postMultipart<ImageModel>(`/Violations/${violationId}/Image`, form);
}

export async function markStagesCommunicated(
  client: RMClient,
  stages: StageNotifyItem[],
): Promise<StageNotifyResult[]> {
  return Promise.all(
    stages.map(async (s): Promise<StageNotifyResult> => {
      try {
        await client.post('/ViolationStages', [{
          ViolationStageID: s.stageId,
          ViolationID: s.violationId,
          IsCommunicationSent: true,
          ConcurrencyID: s.concurrencyId,
        }]);
        return { violationId: s.violationId, stageId: s.stageId, success: true };
      } catch (err) {
        return {
          violationId: s.violationId,
          stageId: s.stageId,
          success: false,
          error: err instanceof Error ? err.message : 'Unknown error',
        };
      }
    }),
  );
}
