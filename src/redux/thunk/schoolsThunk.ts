import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';

import { AppState } from 'redux/reducers';
import { schoolsURL } from 'static/api';
import types from 'redux/reduxTypes';
import schoolsActions from 'redux/actions/schoolsActions';

const fetchSchools = (): ThunkAction<void, AppState, null, Action<string>> => {
  const { resolveSchoolsFetch, errorSchoolsFetch } = schoolsActions;

  return async (dispatch) => {
    dispatch({ type: types.SCHOOLS_FETCH_REQUESTED });

    try {
      const response = await fetch(schoolsURL);

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
