import types from 'redux/reduxTypes';
import { SchoolsState } from 'static/ts/schoolsTypes';

const requestSchoolsFetch = () => ({
  type: types.SCHOOLS_FETCH_REQUESTED,
});

const resolveSchoolsFetch = (payload: SchoolsState['schoolsData']) => ({
  type: types.SCHOOLS_FETCH_SUCCEEDED,
  payload,
});

const errorSchoolsFetch = (payload: SchoolsState['error']) => ({
  type: types.SCHOOLS_FETCH_FAILED,
  payload,
});

export default {
  requestSchoolsFetch,
  resolveSchoolsFetch,
  errorSchoolsFetch,
};
