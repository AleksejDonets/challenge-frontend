import {
  EDIT_POST,
  EDIT_POST_SUCCESS,
  EDIT_POST_ERROR,
} from '../actions/ActionTypes';

const initialState = {
  post: {},
  isEdit: false,
  error: '',
  isLoad: false,
};

export default (state = initialState, action) => {
  switch(action.type) {
    case EDIT_POST:
      return Object.assign({}, state, {isEdit: action.isEdit, post: action.post, isLoad: action.isLoad});
    case EDIT_POST_SUCCESS:
      return Object.assign({}, state, {isEdit: action.isEdit, post: action.post});
    case EDIT_POST_ERROR:
      return Object.assign({}, state, {isEdit: action.isEdit, error: action.error});
    default:
      return state;
  }
};