import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ReactPaginate from 'react-paginate';

import LinkButton from 'components/Buttons/LinkButton';
import Loader from 'components/Loader';
import fetchCourts from 'redux/thunk/courtsThunk';
import { Court, CourtsState } from 'static/ts/courtsTypes';
import ROUTES from 'static/routes';
import './css/styles.css';

interface ReduxStore {
  courts: CourtsState,
  schools: {},
};

const Courts: React.FC = () => {
  const dispatch = useDispatch();
  const courtsState = useSelector((state: ReduxStore) => state.courts);
  const [courtsList, setCourtsList] = useState<Court[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(0);

  useEffect(() => {
    dispatch(fetchCourts(''));
  }, [dispatch]);

  const { courtsLoading, courtsData } = courtsState;
  const { count, results } = courtsData;
  const resultsPerPage: number = 20;

  useEffect(() => {
    if (results.length !== 0) {
      setCourtsList(results);
    }
  }, [results ]);

  const handlePageClick = (data: any) => {
    let selected = data.selected;

    if (currentPage !== selected) {
      setCurrentPage(selected);
      dispatch(fetchCourts(`?page=${selected + 1}`));
    }
  }

  return (
    <section className='courts-page'>
      <LinkButton
        customCssClass='courts-page__home-button'
        route={ROUTES.homepage}
        content='Go home'
      />
      <h1>Courts data table</h1>
      <div className='courts-page__table-wrapper'>
        <table className='courts-page__table'>
          <thead>
            <tr>
              <th className='table-full-name'>Full name</th>
              <th className='table-link'>Resource URL</th>
              <th>ID</th>
              <th>Pacer court ID</th>
              <th>Pacer has rss feed</th>
              <th>FJC court ID</th>
              <th className='table-date-modified'>Date modified</th>
              <th>In use</th>
              <th>Has opinion scraper</th>
              <th>Has oral argument scraper</th>
              <th>Position</th>
              <th>Citation string</th>
              <th className='table-short-name'>Short name</th>
              <th className='table-link'>URL</th>
              <th className='table-start_date'>Start date</th>
              <th>End date</th>
              <th>Jurisdiction</th>
            </tr>
          </thead>
          <tbody>
            {courtsLoading ?
              (
                <tr>
                  <th className='table-loader' colSpan={17}>
                    <Loader customCssClass='table-loader__roller' />
                  </th>
                </tr>
              ) : (
                courtsList.map(item => (
                  <tr key={item.id}>
                    <th className='table-full-name'>{item.full_name}</th>
                    <th className='table-link'>
                      <a className='table-link__anchor' href={item.resource_uri}>
                        {item.resource_uri}
                      </a>
                    </th>
                    <th>{item.id}</th>
                    <th>{item.pacer_court_id || 'None'}</th>
                    <th>{item.pacer_has_rss_feed ? 'Yes' : 'No'}</th>
                    <th>{item.fjc_court_id || 'None'}</th>
                    <th className='table-date-modified'>{new Date(item.date_modified).toUTCString()}</th>
                    <th>{item.in_use ? 'Yes' : 'No'}</th>
                    <th>{item.has_opinion_scraper ? 'Yes' : 'No'}</th>
                    <th>{item.has_oral_argument_scraper ? 'Yes' : 'No'}</th>
                    <th>{item.position}</th>
                    <th>{item.citation_string}</th>
                    <th className='table-short-name'>{item.short_name}</th>
                    <th className='table-link'>
                      <a className='table-link__anchor' href={item.url}>
                        {item.url}
                      </a>
                    </th>
                    <th className='table-start_date'>{item.start_date || 'None'}</th>
                    <th>{item.end_date || 'None'}</th>
                    <th>{item.jurisdiction}</th>
                  </tr>
                ))
              )
            }
          </tbody>
        </table>
      </div>
      <ReactPaginate
        previousLabel={'previous'}
        nextLabel={'next'}
        breakClassName={'break-me'}
        pageCount={Math.ceil(count / resultsPerPage)}
        marginPagesDisplayed={2}
        pageRangeDisplayed={2}
        onPageChange={handlePageClick}
        containerClassName={'pagination'}
        activeClassName={'active'}
      />
    </section>
  );
}

export default Courts;
