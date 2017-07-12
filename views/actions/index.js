import axios from 'axios';

export const FETCH_ITEMS = 'FETCH_ITEMS';


const BASE_URL = 'http://localhost:9090/api/items';

export function fetchItems() {
  const request = axios.get(`${BASE_URL}`);

  return {type: FETCH_ITEMS, payload: request}
}

