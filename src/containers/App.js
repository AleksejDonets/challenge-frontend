import React from 'react';
import {  Switch, Route } from 'react-router-dom';

import { ConnectedRouter } from 'connected-react-router';
import { history } from '../store';
import { AppHeader } from '../components/AppHeader';
import { MainBoardPage } from './MainBoardPage';
import { PostPage } from './PostPage';
import { CreatePostPage } from './CreatePostPage';
import { EditPostPage } from './EditPostPage';

const App = () => {
  return (
    <ConnectedRouter history={history}>
      <AppHeader />
      <Switch>
        <Route exact path='/' component={MainBoardPage} />
        <Route path='/post/:id' component={PostPage} />
        <Route path='/create-post' component={CreatePostPage} />
        <Route path='/edit-post/:id' component={EditPostPage}/>
      </Switch>
    </ConnectedRouter>
  );
}

export default App;
