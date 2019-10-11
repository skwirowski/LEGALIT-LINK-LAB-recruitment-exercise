import { combineReducers } from 'redux';

import courtsReducer from './courtsReducer';
import schoolsReducer from './schoolsReducer';

const rootReducer = combineReducers({
  courts: courtsReducer,
  schools: schoolsReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
