import { MECH_SELECT } from './mechConstants';

export function selectMech(mechId) {
  return {
    type: MECH_SELECT,
    payload: { currentMech: mechId },
  };
}
