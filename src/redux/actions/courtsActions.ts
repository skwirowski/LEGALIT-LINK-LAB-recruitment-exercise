import types from 'redux/reduxTypes';
import { CourtsState } from 'redux/ts/courtsTypes';

const requestCourtsFetch = () => ({
  type: types.COURTS_FETCH_REQUESTED,
});

const resolveCourtsFetch = (payload: CourtsState['courtsData']) => ({
  type: types.COURTS_FETCH_SUCCEEDED,
  payload,
});

const errorCourtsFetch = (payload: CourtsState['error']) => ({
  type: types.COURTS_FETCH_FAILED,
  payload,
});

export default {
  requestCourtsFetch,
  resolveCourtsFetch,
  errorCourtsFetch,
};
