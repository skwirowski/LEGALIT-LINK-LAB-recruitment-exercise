import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';

import { AppState } from 'redux/reducers';
import types from 'redux/reduxTypes';
import schoolsActions from 'redux/actions/schoolsActions';
import fetchDataRequest from 'static/services';
import { schoolsURL } from 'static/api';

const fetchSchools = (query: string): ThunkAction<void, AppState, null, Action<string>> => {
  const { resolveSchoolsFetch, errorSchoolsFetch } = schoolsActions;

  return async (dispatch) => {
    dispatch({ type: types.SCHOOLS_FETCH_REQUESTED });

    try {
      const response = await fetchDataRequest(schoolsURL, query);

      if (response.ok) {
        const payload = await response.json();
        return dispatch(resolveSchoolsFetch(payload))
      }
      throw new Error('Fetch schools data failed');
    } catch (error) {
      return dispatch(errorSchoolsFetch(error))
    }
  };
};

export default fetchSchools;
