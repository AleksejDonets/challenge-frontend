import {
  POSTS_LOAD_SUCCESS,
  POSTS_LOAD_ERROR,
} from '../actions/ActionTypes';

const initialState = {
  latestPosts: [],
  isLoad: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case POSTS_LOAD_SUCCESS:
      return Object.assign({}, state, { latestPosts: action.posts, isLoad: action.isLoad });
    case POSTS_LOAD_ERROR:
      return Object.assign({}, state, { isLoad: action.isLoad });
    default:
      return state;
  }
};
