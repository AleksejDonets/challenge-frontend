import axios from '../axios';
import {
  DELETE_POST,
  DELETE_POST_SUCCESS,
  DELETE_POST_ERROR,
} from './ActionTypes';

export const deletePost = () => ({
  type: DELETE_POST,
  deleted: false,
});

export const deletePostSuccess = () => ({
  type:DELETE_POST_SUCCESS,
  deleted: true,
});

export const deletePostError = error => ({
  type: DELETE_POST_ERROR,
  deleted: false,
  error: error,
});

export const handlePostDelete = id => dispatch => {
  dispatch(deletePost())
  axios.delete(`/posts/${id}`)
  .then(response => dispatch(deletePostSuccess()))
  .catch(error => dispatch(deletePostError(error)))
}