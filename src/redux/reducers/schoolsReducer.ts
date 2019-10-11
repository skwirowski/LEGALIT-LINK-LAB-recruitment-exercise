import types from 'redux/reduxTypes';
import { SchoolsState, SchoolsAction } from 'redux/ts/schoolsTypes';

const INITIAL_STATE: SchoolsState = {
  schoolsLoading: false,
  schoolsData: {
    count: 0,
    next: '',
    previous: '',
    results: [],
  },
  error: '',
}

const reducer = (state = INITIAL_STATE, action: SchoolsAction): SchoolsState => {
  switch (action.type) {
    case types.SCHOOLS_FETCH_REQUESTED:
      return {
        ...state,
        schoolsLoading: true,
      };
    case types.SCHOOLS_FETCH_SUCCEEDED:
      return {
        ...state,
        schoolsLoading: false,
        schoolsData: action.payload,
      };
    case types.SCHOOLS_FETCH_FAILED:
      return {
        ...state,
        schoolsLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
