import {
  FETCH_ITEMS,
  FETCH_ITEM,
  DELETE_ITEM
} from '../actions/index';
import _ from 'lodash';

export default function (state = {}, action) {
  switch (action.type) {
    case FETCH_ITEMS:
      return _.mapKeys(action.payload.data, '_id');

    case FETCH_ITEM:
      return {
        ...state,
        [action.payload.data[0]._id]: action.payload.data[0]
      }

    case DELETE_ITEM:
      return _.omit(state, action.payload);

    default:
      return state;
  }
}