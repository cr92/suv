import {FETCH_ITEMS, FETCH_ITEM} from '../actions/index';
import _ from 'lodash';

export default function (state = {}, action) {
  switch (action.type) {
    case FETCH_ITEMS:
      console.log('action: ', action.payload.data);
      return _.mapKeys(action.payload.data, '_id');
  }
}