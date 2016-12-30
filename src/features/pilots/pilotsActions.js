import { PILOT_SELECT } from './pilotsConstants';

export function selectPilot(pilotId) {
  return {
    type: PILOT_SELECT,
    payload: { currentPilot: pilotId },
  };
}
