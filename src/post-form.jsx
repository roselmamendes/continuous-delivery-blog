import React from 'react';

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
      <form onSubmit={this.handleSubmit}>
        <label id="author-label">
        Author:
          <input id="author" type="text" value={this.state.author} onChange={this.handleChangeAuthor} />
        </label>
        <label id="title-label">
          Title:
          <input id="title" type="text" value={this.state.title} onChange={this.handleChangeTitle}/>
        </label>
        <label id="post-label">
          Post:
          <input id="post" type="text" value={this.state.post} onChange={this.handleChangePost}/>
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default PostForm;
