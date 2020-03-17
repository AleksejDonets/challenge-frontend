import axios from '../axios';
import { 
  SELECTED_POST, 
  SELECTED_POST_LOAD_SUCCESS, 
  SELECTED_POST_LOAD_ERROR,
  UPDATE_COMMENT,
} from './ActionTypes';

export const selectedPost = () => ({
  type: SELECTED_POST,
  loadStatus: false,
});

export const selectedPostSuccess = data => ({
  type: SELECTED_POST_LOAD_SUCCESS,
  post: data,
  loadStatus: true,
});

export const selectedPostError = error => ({
  type: SELECTED_POST_LOAD_ERROR,
  error: error,
  loadStatus: false,
});

export const FetchSelectedPost = id => dispatch => {
  dispatch(selectedPost())
  axios.get(`/posts/${id}?_embed=comments`)
    .then(response => dispatch(selectedPostSuccess(response.data)))
    .catch(error => dispatch(selectedPostError(error)));
};

export const updateComment = () => ({
  type: UPDATE_COMMENT,
  isUpdate: true,
});


export const createNewComment = (data) => dispatch => {
  axios.post('/comments', data)
  .then(response => dispatch(updateComment()))
} 