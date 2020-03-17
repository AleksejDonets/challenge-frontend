import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PostCreateForm } from '../../components/PostCreateForm';
import { Loader } from '../../components/Loader';
import { handleEditPost, loadEditablePost } from '../../store/actions';

class EditPostPage extends Component {
  constructor(props) {
    super(props);

    this.handleEditPost = this.handleEditPost.bind(this);
  }

  componentDidMount(){
    const {
      match: {
        params: { id },
      },
      loadCurrent,
    } = this.props
    loadCurrent(id)
  }

  
  handleEditPost(data) {
    const { 
      match: {
        params: { id },
      }, 
      onEdit,
    } = this.props;
    onEdit(data, id);
  }

  render(){
    const { isLoad } = this.props;
    if(!isLoad)  {
      return (
        <Loader />
      )
    }
    return(
      <PostCreateForm onSubmitHandler={values => this.handleEditPost(values)} editPost/>
    )
  }
};

const mapStateToProps = ({EditPost}) => ({
  isLoad: EditPost.isLoad,
})

const mapDispatchToProps = dispatch => ({
  onEdit: (data, id )=> dispatch(handleEditPost(data, id)),
  loadCurrent: id => dispatch(loadEditablePost(id)),
});
export default connect(mapStateToProps, mapDispatchToProps)(EditPostPage);