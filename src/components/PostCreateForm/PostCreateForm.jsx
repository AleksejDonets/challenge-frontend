import React from 'react';
import { connect } from 'react-redux';
import { Card, CardContent, CardActions , Button, Typography } from '@material-ui/core';
import { Field, reduxForm } from 'redux-form';
import { CustomInput } from '../CustomInput';
import { withStyles } from '@material-ui/styles';
import  styles  from './styles';

let PostCreateForm = ({ handleSubmit, onSubmitHandler, editPost, classes }) => (
  <form onSubmit={handleSubmit(onSubmitHandler)}>
    <Card className={classes.containerForm}>
      <CardContent>
        <Typography component="div" className={classes.containerFieldWrap}>
          <Field 
            name="title"
            component={CustomInput}
            type="text"
            label="Header"
            className={classes.containerField}
          />
        </Typography>
        <Typography component="div" className={classes.containerFieldWrap}>
          <Field 
            name="body"
            component={CustomInput}
            type="text"
            label="Text Post"
            className={classes.containerField}
          />
        </Typography>
      </CardContent>
      <CardActions className={classes.containerButton}>
        {
          editPost ? (
            <Button type="submit">
              Save Post
            </Button> 
          ) : (
            <Button type="submit">
              Create post
            </Button>
          )
        }
        
      </CardActions>
    </Card>
  </form>
);

PostCreateForm = reduxForm({
  form: 'CreatePostForm',
})(PostCreateForm);

PostCreateForm = connect(
  state => ({
    initialValues: state.EditPost.post, 
  })
)(PostCreateForm);



export default withStyles(styles)(PostCreateForm);
