const fetchDataRequest: (baseUrl: string, query: string) => Promise<Response> =
  (baseUrl: string, query: string): Promise<Response> => {
  return fetch(baseUrl + query)
};

export default fetchDataRequest;
