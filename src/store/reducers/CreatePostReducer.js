import {
  CREATE_POST,
  CREATE_POST_SUCCESS,
  CREATE_POST_ERROR,
} from '../actions/ActionTypes';

const initialState = {
  newPost: {},
  isCreated: false,
  error: '',
};

export default ( state = initialState, action) => {
  switch( action.type ){
    case CREATE_POST: 
      return Object.assign({}, state, {isCreated: action.created});
    case CREATE_POST_SUCCESS:
      return Object.assign({}, state, {newPost: action.post, isCreated: action.created});
    case CREATE_POST_ERROR: 
      return Object.assign({}, state, {error: action.error});
    default:
      return state;
  }
};
