import React from 'react';
const style = {
  postForm: {
    display: 'inline-grid',
    marginLeft: 18,
    backgroundColor: 'antiquewhite',
    padding: 10
  },
  postField: {
    paddingBottom: 10
  },
  postInput: {
    marginLeft: 5,
    float: 'right'
  },
  button: {
    backgroundColor: 'hotpink',
    borderRadius: 5,
    borderStyle: 'none',
    color: 'white'
  }
}
class PostForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {author: '', title: '', post: ''};

    this.handleChangeAuthor = this.handleChangeAuthor.bind(this);
    this.handleChangeTitle = this.handleChangeTitle.bind(this);
    this.handleChangePost = this.handleChangePost.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeAuthor(event) {
    this.setState({author: event.target.value});
  }

  handleChangeTitle(event) {
    this.setState({title: event.target.value});
  }

  handleChangePost(event) {
    this.setState({post: event.target.value});
  }

  handleSubmit(event) {
    alert('Author: ' + this.state.author + ' | Title:' + this.state.title + ' | Post: ' + this.state.post);
    event.preventDefault();
  }

  render(){
    return (
      <form onSubmit={this.handleSubmit} style={style.postForm}>
        <label id="author-label" style={style.postField}>
        Author:
          <input style={style.postInput} id="author" type="text" value={this.state.author} onChange={this.handleChangeAuthor} />
        </label>
        <label id="title-label" style={style.postField}>
          Title:
          <input style={style.postInput} id="title" type="text" value={this.state.title} onChange={this.handleChangeTitle}/>
        </label>
        <label id="post-label" style={style.postField}>
          Post:
          <input style={style.postInput} id="post" type="text" value={this.state.post} onChange={this.handleChangePost}/>
        </label>
        <input style={style.button} type="submit" value="Submit" />
      </form>
    );
  }
}

export default PostForm;
