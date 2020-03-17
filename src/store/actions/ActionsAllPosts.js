import axios from '../axios';
import { POSTS_LOAD, POSTS_LOAD_SUCCESS, POSTS_LOAD_ERROR } from './ActionTypes';

export const LoadPosts = () => ({
  type: POSTS_LOAD,
});

export const LoadPostsSuccess = data => ({
  type: POSTS_LOAD_SUCCESS,
  posts: data,
  isLoad: true,
});

export const LoadPostsError = () => ({
  type: POSTS_LOAD_ERROR,
  isLoad: false,
});

export const FetchPosts = () => dispatch => {
  dispatch(LoadPosts());
  axios
    .get('/posts')
    .then(response => dispatch(LoadPostsSuccess(response.data)))
    .catch(error => console.log(error));
};
