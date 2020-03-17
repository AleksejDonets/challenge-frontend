import React from 'react';
import { Card, CardContent, CardActions , Button } from '@material-ui/core';
import { Field, reduxForm } from 'redux-form';
import { CustomInput } from '../CustomInput';

let CommentCreateForm = ({ handleSubmit, onSubmitHandler,reset }) =>{
  return  (
    <form onSubmit={handleSubmit(onSubmitHandler)}>
      <Card>
        <CardContent>
          <Field 
            label='Write you comment'
            name="text"
            component={CustomInput}
          />
        </CardContent>
        <CardActions>
          <Button type="submit">
            Add comment
          </Button>
        </CardActions>
      </Card>
    </form>
  )
};

export default reduxForm({form: 'CommentCreateForm',})(CommentCreateForm);