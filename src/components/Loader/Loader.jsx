import React from 'react';
import { CircularProgress } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import  styles  from './styles';

const Loader = ({classes}) => (
  <CircularProgress  className={classes.loader}/>
);

export default withStyles(styles)(Loader);
