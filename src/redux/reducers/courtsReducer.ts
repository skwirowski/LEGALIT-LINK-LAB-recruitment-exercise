import types from 'redux/reduxTypes';
import { CourtsState, CourtsAction } from 'redux/ts/courtsTypes';

const INITIAL_STATE: CourtsState = {
  courtsLoading: false,
  courtsData: {
    count: 0,
    next: '',
    previous: '',
    results: []
  },
  error: '',
}

const reducer = (state = INITIAL_STATE, action: CourtsAction): CourtsState => {
  switch (action.type) {
    case types.COURTS_FETCH_REQUESTED:
      return {
        ...state,
        courtsLoading: true,
      };
    case types.COURTS_FETCH_SUCCEEDED:
      return {
        ...state,
        courtsLoading: false,
        courtsData: action.payload,
      };
    case types.COURTS_FETCH_FAILED:
      return {
        ...state,
        courtsLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
