import React from 'react';
import { 
  Card, 
  CardActions, 
  CardContent, 
  Typography, 
  Button, 
  IconButton  
} from '@material-ui/core';
import { Edit, Delete } from '@material-ui/icons';
import { NavLink } from 'react-router-dom';
import { withStyles } from '@material-ui/styles';
import  styles  from './styles';

const PostItem = ({ post, postPage, handleDelete, classes }) => (
  <Card className={classes.card}>
    <CardContent>
      <Typography variant="h5" component="h2" gutterBottom>
        {post.title}
      </Typography>
      <Typography component="p">{post.body}</Typography>
    </CardContent>
    {postPage ? (
      <CardActions>
        <IconButton onClick={()=>handleDelete(post.id)}>
          <Delete />
        </IconButton>
        <IconButton >
          <NavLink to={`/edit-post/${post.id}`} className={classes.noDecoration}>
            <Edit />
          </NavLink>
        </IconButton>
      </CardActions>
    ) : (
      <CardActions>
        <Button>
          <NavLink to={`/post/${post.id}`} className={classes.noDecoration}>Read more</NavLink>
        </Button>
        <IconButton onClick={()=>handleDelete(post.id)}>
          <Delete />
        </IconButton>
        <IconButton >
          <NavLink to={`/edit-post/${post.id}`} className={classes.noDecoration}>
            <Edit />
          </NavLink>
        </IconButton>
      </CardActions>
    )}
  </Card>
);

export default withStyles(styles)(PostItem);
