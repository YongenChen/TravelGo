import {FEEDBACK_UPDATE, FEEDBACK_SEND} from '../actions/types';

const INITIAL_STATE = {
  name: '',
  subject: '',
  comment: '',
  rating: '',
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FEEDBACK_UPDATE:
      // action.payload === { prop: 'name', value: 'jane' }
      return {...state, [action.payload.prop]: action.payload.value};
    case FEEDBACK_SEND:
      return INITIAL_STATE;
    default:
      return state;
  }
};
