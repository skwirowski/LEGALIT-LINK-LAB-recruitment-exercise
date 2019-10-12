import types from 'redux/reduxTypes';

export interface School {
  resource_uri: string,
  id: number,
  is_alias_of: string,
  date_created: string,
  date_modified: string,
  name: string,
  ein: number,
};

export interface SchoolsResponse {
  count: number,
  next: string,
  previous: string,
  results: School[],
}

export interface SchoolsState {
  schoolsLoading: boolean,
  schoolsData: SchoolsResponse,
  error: string,
};

export interface SchoolsAction {
  type: string,
  payload: any,
}

export interface RequestSchoolsFetchAction {
  type: typeof types.SCHOOLS_FETCH_REQUESTED,
};

export interface ResolveSchoolsFetchAction {
  type: typeof types.SCHOOLS_FETCH_REQUESTED,
  payload: SchoolsState['schoolsData'],
};

export interface ErrorSchoolsFetchAction {
  type: typeof types.SCHOOLS_FETCH_FAILED,
  payload: SchoolsState['error'],
};

export type SchoolsActionTypes = RequestSchoolsFetchAction | ResolveSchoolsFetchAction | ErrorSchoolsFetchAction;