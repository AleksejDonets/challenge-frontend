import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Card, CardContent, Typography } from '@material-ui/core';
import { PostItem } from '../../components/PostItem';
import { PostComments } from '../../components/PostComments';
import { Loader } from '../../components/Loader';
import { CommentCreateForm } from '../../components/CommentCreateForm';
import { 
  FetchSelectedPost,
  createNewComment,
} from '../../store/actions';
import { withStyles } from '@material-ui/styles';
import  styles  from './styles';

class PostPage extends Component {
  constructor(props){
    super(props);
    this.sendComment = this.sendComment.bind(this);

  }
  componentDidMount() {
    const {
      match: {
        params: { id },
      },
      loadPost,
    } = this.props;
    loadPost(id);
  }

  sendComment({text}){
    const {
      match: {
        params: { id },
      },
      createComment
    } = this.props;
    createComment({"postId":+id,"body":text});
    console.log(text, id)
  }

  render() {
    const {
      post,
      post: { comments },
      isLoad,
      classes
    } = this.props;
    if(!isLoad) {
      return(
        <Loader />
      )
    } 
    return (
      <Fragment>
        <PostItem post={post} postPage/>
        <Card>
          <CardContent>
            <Typography variant="h5">
              Comments
            </Typography>
            <PostComments comments={comments} />
          </CardContent>
          <CardContent className={classes.wrapCommentForm}>
            <CommentCreateForm onSubmitHandler={this.sendComment}/>
          </CardContent>
        </Card>
      </Fragment>
    );
    
   
  }
}

const mapStateToProps = ({ SelectedPost }) => ({
  post: SelectedPost.selectedPost,
  isLoad: SelectedPost.loadStatus,
});

const mapDispatchToProps = dispatch => ({
  loadPost: id => dispatch(FetchSelectedPost(id)),
  createComment: data =>dispatch(createNewComment(data))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withStyles(styles)(PostPage));
