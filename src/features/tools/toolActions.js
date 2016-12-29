import { fetchData } from 'data/mockAPI';

import { DATA_LOADED } from './toolConstants';

export function loadUnitData() {
  return (dispatch) => {
    fetchData()
      .then(data => dispatch({
        type: DATA_LOADED,
        payload: data,
      }));
  };
}
