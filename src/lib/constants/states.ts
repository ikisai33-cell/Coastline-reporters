import { NigerDeltaStateConfig, NigerDeltaState } from '@/types';

export const NIGER_DELTA_STATES: NigerDeltaStateConfig[] = [
  { id: 'rivers', name: 'Rivers', capital: 'Port Harcourt', code: 'RV' },
  { id: 'bayelsa', name: 'Bayelsa', capital: 'Yenagoa', code: 'BY' },
  { id: 'delta', name: 'Delta', capital: 'Asaba', code: 'DT' },
  { id: 'akwa-ibom', name: 'Akwa Ibom', capital: 'Uyo', code: 'AK' },
  { id: 'cross-river', name: 'Cross River', capital: 'Calabar', code: 'CR' },
  { id: 'edo', name: 'Edo', capital: 'Benin City', code: 'ED' },
  { id: 'ondo', name: 'Ondo', capital: 'Akure', code: 'OD' },
  { id: 'abia', name: 'Abia', capital: 'Umuahia', code: 'AB' },
  { id: 'imo', name: 'Imo', capital: 'Owerri', code: 'IM' },
];

export function getStateConfig(stateId: string): NigerDeltaStateConfig | undefined {
  return NIGER_DELTA_STATES.find(
    (s) => s.id === stateId.toLowerCase() || s.name.toLowerCase() === stateId.toLowerCase()
  );
}
