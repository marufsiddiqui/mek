import { createReducer } from 'common/utils/reducerUtils';

import { DATA_LOADED } from 'features/tools/toolConstants';


const initialState = {
  name: 'N/A',
  affiliation: '',
};

const dataLoaded = (state, { unit }) => unit;

export default createReducer(initialState, {
  [DATA_LOADED]: dataLoaded,
});
