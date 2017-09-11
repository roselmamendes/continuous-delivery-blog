import React from 'react';

class PostForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {author: '', title: ''};
  }

  render(){
    return (
      <form>
        <label id="author-label">
        Author:
          <input id="author" type="text" value={this.state.author} />
        </label>
        <label id="title-label">
          Title:
          <input id="title" type="text" value={this.state.title} />
        </label>
        <label id="post-label">
          Post:
          <input id="post" type="text" value={this.state.post} />
        </label>
      </form>
    );
  }
}

export default PostForm;
