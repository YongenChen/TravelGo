import {
  FAVORITES_UPDATE,
  FAVORITES_CREATE,
  FAVORITES_SAVE_SUCCESS,
} from '../actions/types';

const INITIAL_STATE = {
  place: '',
  distance: '',
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FAVORITES_UPDATE:
      // action.payload === { prop: 'name', value: 'jane' }
      return {...state, [action.payload.prop]: action.payload.value};
    case FAVORITES_CREATE:
      return INITIAL_STATE;
    case FAVORITES_SAVE_SUCCESS:
      return INITIAL_STATE;
    default:
      return state;
  }
};
