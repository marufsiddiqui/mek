import { combineReducers } from 'redux';
import tabReducer from 'features/tabs/tabReducer';
import unitInfoReducer from 'features/unitInfo/unitInfoReducer';
import entitiesReducer from './entitiesReducer';

const rootReducer = combineReducers({
  tabs: tabReducer,
  unitInfo: unitInfoReducer,
  entities: entitiesReducer,
});

export default rootReducer;
