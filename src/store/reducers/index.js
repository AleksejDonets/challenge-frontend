import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { reducer as formReducer } from 'redux-form';
import LatestPosts from './PostsReducer';
import SelectedPost from './SelectedPostReducer';
import CreatePost from './CreatePostReducer';
import EditPost from './EditPostReducer';

export default history => combineReducers({
  router: connectRouter(history),
  LatestPosts,
  SelectedPost,
  CreatePost,
  EditPost,
  form: formReducer,
});
