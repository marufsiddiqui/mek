import { combineReducers } from 'redux';
import tabReducer from 'features/tabs/tabReducer';
import unitInfoReducer from 'features/unitInfo/unitInfoReducer';

const rootReducer = combineReducers({
  tabs: tabReducer,
  unitInfo: unitInfoReducer,
});

export default rootReducer;
