import apiToken from 'static/apiToken';

const fetchDataRequest: (baseUrl: string, query: string) => Promise<Response> =
  (baseUrl: string, query: string): Promise<Response> => {
  return fetch(baseUrl + query, {
    headers: {
      Authorization: `Token ${apiToken}`
    }
  })
};

export default fetchDataRequest;
