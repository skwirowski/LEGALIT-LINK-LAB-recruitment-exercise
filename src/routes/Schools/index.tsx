import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import fetchSchools from 'redux/thunk/schoolsThunk';
import { School, SchoolsState } from 'static/ts/schoolsTypes';

interface ReduxStore {
  courts: {},
  schools: SchoolsState,
};

const Schools: React.FC = () => {
  const dispatch = useDispatch();
  const schoolsData = useSelector((state: ReduxStore) => state.schools);
  const [schoolsList, setSchoolsList] = useState<School[]>([]);

  useEffect(() => {
    dispatch(fetchSchools());
  }, [dispatch]);

  console.log('SCHOOLS', schoolsData.schoolsData);

  return (
    <div>This is SCHOOLS component</div>
  );
}

export default Schools;
