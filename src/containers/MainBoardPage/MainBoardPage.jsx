import React, { Component } from 'react';
import { connect } from 'react-redux';
import Container from '@material-ui/core/Container';
import { handlePostDelete } from '../../store/actions';
import { PostItem } from '../../components/PostItem';
import { FetchPosts } from '../../store/actions';
import { withStyles } from '@material-ui/styles';
import  styles  from './styles';

class MainBoardPage extends Component {

  componentDidMount() {
    const { fetchPosts } = this.props;
    fetchPosts();
  }
  handleDelete(id){
    const { onDelete } = this.props;
    onDelete(id);
  }
  render() {
    const { posts, classes } = this.props;

    return (
      <Container  maxWidth="xl" className={classes.container}>
        {posts.map(post => (
          <PostItem post={post} key={post.id} handleDelete={id => this.handleDelete(id)} />
        ))}
      </Container>
    );
  }
}

const mapStateToProps = ({ LatestPosts }) => ({
  posts: LatestPosts.latestPosts,
});


const mapDispatchToProps = dispatch => ({
  onDelete: id => dispatch(handlePostDelete(id)),
  fetchPosts: () => dispatch(FetchPosts()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withStyles(styles)(MainBoardPage));
