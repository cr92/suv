import axios from 'axios';

export const FETCH_ITEMS = 'FETCH_ITEMS';
export const FETCH_ITEM = 'FETCH_ITEM';
export const CREATE_ITEM = 'CREATE_ITEM';
export const DELETE_ITEM = 'DELETE_ITEM';
export const EDIT_ITEM = 'EDIT_ITEM';


const BASE_URL = 'http://localhost:9090/api/items';

export function fetchItems() {
  const request = axios.get(`${BASE_URL}`);

  return {
    type: FETCH_ITEMS,
    payload: request
  }
}

export function createItem(values, callback) {
  const request = axios.post(`${BASE_URL}`, values)
    .then(() => callback());

  return {
    type: CREATE_ITEM,
    payload: request
  };
}

export function fetchItem(_id) {
  const request = axios.get(`${BASE_URL}/${_id}`);

  return {
    type: FETCH_ITEM,
    payload: request
  };
}

export function deleteItem(_id, callback) {
  const request = axios.delete(`${BASE_URL}/${_id}`).then(() => callback());

  return {
    type: DELETE_ITEM,
    payload: _id
  }
}

export function editItem(_id, values, callback) {
  const request = axios.put(`${BASE_URL}/${_id}`, values).then(() => callback());

  return {
    type: EDIT_ITEM,
    payload: _id
  }
}