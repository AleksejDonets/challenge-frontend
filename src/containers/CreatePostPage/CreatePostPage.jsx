import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PostCreateForm } from '../../components/PostCreateForm';
import { CreateNewPost } from '../../store/actions';

class CreatePostPage extends Component {
  constructor(props){
    super(props);

    this.handleCreatePost = this.handleCreatePost.bind(this);
  }

  handleCreatePost(data) {
    const { createPost } = this.props;
    createPost(data);
  }
  render() {
    return(
      <PostCreateForm onSubmitHandler={values => this.handleCreatePost(values)}/>
    )
  };
};

const mapDispatchToProps = dispatch => ({
  createPost: data => dispatch(CreateNewPost(data)),
});

export default connect(null, mapDispatchToProps)(CreatePostPage);