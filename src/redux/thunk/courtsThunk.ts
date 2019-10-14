import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';

import { AppState } from 'redux/reducers';
import types from 'redux/reduxTypes';
import courtsActions from 'redux/actions/courtsActions';
import fetchDataRequest from 'static/services';
import { courtsURL } from 'static/api';

const fetchCourts = (query: string): ThunkAction<void, AppState, null, Action<string>> => {
  const { resolveCourtsFetch, errorCourtsFetch } = courtsActions;

  return async (dispatch) => {
    dispatch({ type: types.COURTS_FETCH_REQUESTED });

    try {
      const response = await fetchDataRequest(courtsURL, query);

      if (response.ok) {
        const payload = await response.json();
        return dispatch(resolveCourtsFetch(payload))
      }
      throw new Error('Fetch courts data failed');
    } catch (error) {
      return dispatch(errorCourtsFetch(error))
    }
  };
};

export default fetchCourts;
