import types from 'redux/reduxTypes';

export interface Court {
  resource_uri: string,
  id: string,
  pacer_court_id: number,
  pacer_has_rss_feed: boolean,
  fjc_court_id: string,
  date_modified: string,
  in_use: boolean,
  has_opinion_scraper: boolean,
  has_oral_argument_scraper: boolean,
  position: number,
  citation_string: string,
  short_name: string,
  full_name: string,
  url: string,
  start_date: string,
  end_date: string,
  jurisdiction: string,
};

export interface CourtsResponse {
  count: number,
  next: string,
  previous: string,
  results: Court[],
}

export interface CourtsState {
  courtsLoading: boolean,
  courtsData: CourtsResponse,
  error: string,
};

export interface CourtsAction {
  type: string,
  payload: any,
}

export interface RequestCourtsFetchAction {
  type: typeof types.COURTS_FETCH_REQUESTED,
};

export interface ResolveCourtsFetchAction {
  type: typeof types.COURTS_FETCH_SUCCEEDED,
  payload: CourtsState['courtsData'],
};

export interface ErrorCourtsFetchAction {
  type: typeof types.COURTS_FETCH_FAILED,
  payload: CourtsState['error'],
};

export type CourtsActionTypes = RequestCourtsFetchAction | ResolveCourtsFetchAction | ErrorCourtsFetchAction;
