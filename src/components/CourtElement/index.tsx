import React from 'react';
import { Court } from 'static/ts/courtsTypes';

const CourtElement: React.FC<Court> = ({
  full_name,
  resource_uri,
  id,
  pacer_court_id,
  pacer_has_rss_feed,
  fjc_court_id,
  date_modified,
  in_use,
  has_opinion_scraper,
  has_oral_argument_scraper,
  position,
  citation_string,
  short_name,
  url,
  start_date,
  end_date,
  jurisdiction
}) => (
  <tr>
    <th>{full_name}</th>
    <th>{resource_uri}</th>
    <th>{id}</th>
    <th>{pacer_court_id || 'None'}</th>
    <th>{pacer_has_rss_feed ? 'Yes' : 'No'}</th>
    <th>{fjc_court_id || 'None'}</th>
    <th>{date_modified}</th>
    <th>{in_use ? 'Yes' : 'No'}</th>
    <th>{has_opinion_scraper ? 'Yes': 'No'}</th>
    <th>{has_oral_argument_scraper ? 'Yes' : 'No'}</th>
    <th>{position}</th>
    <th>{citation_string}</th>
    <th>{short_name}</th>
    <th>{url}</th>
    <th>{start_date}</th>
    <th>{end_date || 'None'}</th>
    <th>{jurisdiction}</th>
  </tr>
);

export default CourtElement;
