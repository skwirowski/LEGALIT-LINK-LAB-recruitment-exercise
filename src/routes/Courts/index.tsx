import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import fetchCourts from 'redux/thunk/courtsThunk';
import { Court, CourtsState } from 'redux/ts/courtsTypes';

interface ReduxStore {
  courts: CourtsState,
  schools: {},
};

const Courts: React.FC = () => {
  const dispatch = useDispatch();
  const courtsData = useSelector((state: ReduxStore) => state.courts);
  const [courtsList, setCourtsList] = useState<Court[]>([]);

  useEffect(() => {
    dispatch(fetchCourts());
  }, [dispatch]);

  console.log('COURTS', courtsData.courtsData);

  return (
    <div>This is COURTS component</div>
  );
}

export default Courts;
