import { createReducer } from "common/utils/reducerUtils";
import schema from 'app/schema';
import { DATA_LOADED } from 'features/tools/toolConstants';

const initialState = schema.getDefaultState();

export function loadData(state, { pilots }) {
  const session = schema.from(state);
  const { Pilot } = session;

  pilots.forEach(pilot => Pilot.parse(pilot));

  return session.reduce();
}

export default createReducer(initialState, {
  [DATA_LOADED]: loadData,
});
