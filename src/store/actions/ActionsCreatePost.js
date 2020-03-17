import { push } from 'connected-react-router';
import axios from '../axios';
import {
  CREATE_POST,
  CREATE_POST_SUCCESS,
  CREATE_POST_ERROR,
} from './ActionTypes';

export const createPost = () => ({
  type: CREATE_POST,
  created: false,
});

export const createPostSuccess = data => ({
  type: CREATE_POST_SUCCESS,
  created: true,
  post: data,
});

export const createPostError = error => ({
  type: CREATE_POST_ERROR,
  created:false,
  error: error,
});


export const CreateNewPost = data => dispatch => {
  dispatch(createPost());
  axios.post('/posts', data)
  .then(response =>{
    dispatch(createPostSuccess(response.data))
    dispatch(push(`/post/${response.data.id}`))
  })
  .catch(error => dispatch(createPostError(error)))
};
