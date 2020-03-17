import { push } from 'connected-react-router';
import axios from '../axios';
import {
  EDIT_POST,
  EDIT_POST_SUCCESS,
  EDIT_POST_ERROR,
} from './ActionTypes';

export const editPost = data => ({
  type: EDIT_POST,
  isEdit: false,
  post: data,
  isLoad: true,
});

export const editPostSuccess = data => ({
  type: EDIT_POST_SUCCESS,
  isEdit: true,
  post: data
});

export const editPostError = error => ({
  type: EDIT_POST_ERROR,
  isEdit: false,
  error: error,
});

export const handleEditPost =(data, id) => dispatch => {
  
  axios.put(`/posts/${id}`, data)
  .then(response => {
    dispatch(editPostSuccess(response.data))
    dispatch(push('/'))
  })
  .catch(error => dispatch(editPostError(error)))
};

export const loadEditablePost = id => dispatch => {
  axios.get(`/posts/${id}`)
  .then(response => dispatch(editPost(response.data)))
}