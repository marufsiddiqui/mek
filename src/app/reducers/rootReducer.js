import { combineReducers } from 'redux';
import tabReducer from 'features/tabs/tabReducer';
import unitInfoReducer from 'features/unitInfo/unitInfoReducer';
import pilotsReducer from 'features/pilots/pilotsReducer';
import entitiesReducer from './entitiesReducer';

const rootReducer = combineReducers({
  tabs: tabReducer,
  unitInfo: unitInfoReducer,
  pilots: pilotsReducer,
  entities: entitiesReducer,
});

export default rootReducer;
