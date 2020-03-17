import {
  SELECTED_POST,
  SELECTED_POST_LOAD_SUCCESS,
  SELECTED_POST_LOAD_ERROR,
} from '../actions/ActionTypes';

const initialState = {
  selectedPost: {},
  postComments:{},
  loadStatus: false,
  error: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SELECTED_POST:
      return Object.assign({}, state, { loadStatus: action.loadStatus });
    case SELECTED_POST_LOAD_SUCCESS:
      return Object.assign({}, state, { selectedPost: action.post, loadStatus: action.loadStatus });
    case SELECTED_POST_LOAD_ERROR:
      return Object.assign({}, state, { loadStatus: action.loadStatus });
    default:
      return state;
  }
};
