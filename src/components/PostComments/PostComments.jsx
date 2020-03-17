import React from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import  styles  from './styles';


const PostComments = ({ comments, classes }) => {
  const commentsList = () => {
    if(comments.length ){
      return (
        comments.map( comment => (
          <Card key={comment.id} className={classes.commentsWrap}>
            <CardContent>
              <Typography>UserId: {comment.id}</Typography>
              <Typography>{comment.body}</Typography>
            </CardContent>
          </Card>
        ))
      )
    } 
    if(comments.length === 1) {
      return(
        <Card className={classes.commentsWrap}>
        <CardContent>
          <Typography>UserId: {comments.id}</Typography>
          <Typography>{comments.body}</Typography>
        </CardContent>
      </Card>
      )
    }
    return (
      <Typography variant="subheading" >
        No comments
      </Typography>
    );
  }
  
  return(
    commentsList(comments)
  )
  
};

export default withStyles(styles)(PostComments);