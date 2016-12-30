import { createSelector } from 'reselect';

export const selectPilots = ({ pilots }) => pilots;

export const selectCurrentPilot = createSelector(
  selectPilots,
  pilots => pilots.currentPilot,
);
