import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import CourtElement from 'components/CourtElement';
import fetchCourts from 'redux/thunk/courtsThunk';
import { Court, CourtsState } from 'static/ts/courtsTypes';

interface ReduxStore {
  courts: CourtsState,
  schools: {},
};

const Courts: React.FC = () => {
  const dispatch = useDispatch();
  const courtsState = useSelector((state: ReduxStore) => state.courts);
  const [courtsList, setCourtsList] = useState<Court[]>([]);

  useEffect(() => {
    dispatch(fetchCourts());
  }, [dispatch]);

  const { courtsLoading, courtsData } = courtsState;
  const { count, next, previous, results } = courtsData;

  useEffect(() => {
    if (results.length !== 0) {
      setCourtsList(results);
    }
  }, [courtsData]);

  console.log('COURTS', courtsData);

  return (
    <table>
      <thead>
        <tr>
          <th>Full name</th>
          <th>Resource URL</th>
          <th>ID</th>
          <th>Pacer court ID</th>
          <th>Pacer has rss feed</th>
          <th>FJC court ID</th>
          <th>Date modified</th>
          <th>In use</th>
          <th>Has opinion scraper</th>
          <th>Has oral argument scraper</th>
          <th>Position</th>
          <th>Citation string</th>
          <th>Short name</th>
          <th>URL</th>
          <th>Start date</th>
          <th>End date</th>
          <th>Jurisdiction</th>
        </tr>
      </thead>
      <tbody>
        {courtsLoading ?
          (
            <tr>
              <th colSpan={17}>Loading...</th>
            </tr>
          ) : (
            courtsList.map(item => (
              <tr key={item.id}>
                <th>{item.full_name}</th>
                <th>{item.resource_uri}</th>
                <th>{item.id}</th>
                <th>{item.pacer_court_id || 'None'}</th>
                <th>{item.pacer_has_rss_feed ? 'Yes' : 'No'}</th>
                <th>{item.fjc_court_id || 'None'}</th>
                <th>{new Date(item.date_modified).toUTCString()}</th>
                <th>{item.in_use ? 'Yes' : 'No'}</th>
                <th>{item.has_opinion_scraper ? 'Yes' : 'No'}</th>
                <th>{item.has_oral_argument_scraper ? 'Yes' : 'No'}</th>
                <th>{item.position}</th>
                <th>{item.citation_string}</th>
                <th>{item.short_name}</th>
                <th>{item.url}</th>
                <th>{item.start_date}</th>
                <th>{item.end_date || 'None'}</th>
                <th>{item.jurisdiction}</th>
              </tr>
            ))
          )
        }
      </tbody>
    </table>
  );
}

export default Courts;
