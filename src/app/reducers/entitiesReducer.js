import { createReducer } from "common/utils/reducerUtils";
import schema from 'app/schema';
import { DATA_LOADED } from 'features/tools/toolConstants';

const initialState = schema.getDefaultState();

export function loadData(state, { pilots, designs, mechs }) {
  const session = schema.from(state);
  const { Pilot, MechDesign, Mech } = session;

  pilots.forEach(pilot => Pilot.parse(pilot));
  designs.forEach(design => MechDesign.parse(design));
  mechs.forEach(mech => Mech.parse(mech));

  return session.reduce();
}

export default createReducer(initialState, {
  [DATA_LOADED]: loadData,
});
