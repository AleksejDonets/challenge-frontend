import React from 'react';
import { NavLink } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import  styles  from './styles';

const AppHeader = ({ classes }) => (
  <AppBar position="static" color="default" className={classes.root}>
    <Toolbar>
      <NavLink to='/' className={classes.noDecoration}>
      <Typography variant="h4">Test Task</Typography>
      </NavLink>
      <NavLink to='/create-post' className={classes.noDecoration}>
        <Button>
          Create Post
        </Button>
      </NavLink>
    </Toolbar>
  </AppBar>
);

export default withStyles(styles)(AppHeader);
