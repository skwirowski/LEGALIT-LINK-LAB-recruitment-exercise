import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ReactPaginate from 'react-paginate';

import LinkButton from 'components/Buttons/LinkButton';
import Loader from 'components/Loader';
import fetchSchools from 'redux/thunk/schoolsThunk';
import { School, SchoolsState } from 'static/ts/schoolsTypes';
import ROUTES from 'static/routes';
import './css/styles.css';

interface ReduxStore {
  courts: {},
  schools: SchoolsState,
};

const Schools: React.FC = () => {
  const dispatch = useDispatch();
  const schoolsState = useSelector((state: ReduxStore) => state.schools);
  const [schoolsList, setSchoolsList] = useState<School[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(0);

  useEffect(() => {
    dispatch(fetchSchools(''));
  }, [dispatch]);

  const { schoolsLoading, schoolsData } = schoolsState;
  const { count, results } = schoolsData;
  const resultsPerPage: number = 20;

  useEffect(() => {
    if (results.length !== 0) {
      setSchoolsList(results);
    }
  }, [results]);

  const handlePageClick = (data: any) => {
    let selected = data.selected;

    if (currentPage !== selected) {
      setCurrentPage(selected);
      dispatch(fetchSchools(`?page=${selected + 1}`));
    }
  }

  return (
    <section className='schools-page'>
      <LinkButton
        customCssClass='schools-page__home-button'
        route={ROUTES.homepage}
        content='Go home'
      />
      <h1>Schools data table</h1>
      <div className='schools-page__table-wrapper'>
        <table className='schools-page__table'>
          <thead>
            <tr>
              <th className='table-name'>Name</th>
              <th className='table-link'>Resource URL</th>
              <th>ID</th>
              <th className='table-link'>Is alias of</th>
              <th className='table-date_created'>Date created</th>
              <th className='table-date_modified'>Date modified</th>
              <th>EIN</th>
            </tr>
          </thead>
          <tbody>
            {schoolsLoading ?
            (
              <tr>
                <th className='table-loader' colSpan={17}>
                  <Loader customCssClass='table-loader__roller' />
                </th>
              </tr>
            ) : (
              schoolsList.map(item => (
                <tr key={item.id}>
                  <th className='table-name'>{item.name}</th>
                  <th className='table-link'>
                    <a className='table-link__anchor' href={item.resource_uri}>
                      {item.resource_uri}
                    </a>
                  </th>
                  <th>{item.id}</th>
                  <th className='table-link'>
                    <a className='table-link__anchor' href={item.is_alias_of}>
                      {item.is_alias_of}
                    </a>
                  </th>
                  <th className='table-date_created'>{new Date(item.date_created).toUTCString()}</th>
                  <th className='table-date_modified'>{new Date(item.date_modified).toUTCString()}</th>
                  <th>{item.ein || 'None'}</th>
                </tr>
              ))
            )}
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

export default Schools;
