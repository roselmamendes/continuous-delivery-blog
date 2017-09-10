import React from 'react';

class PostForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {author: '', title: ''};
  }

  render(){
    return (
      <form>
        <label>
        Author:
          <input type="text" value={this.state.author} />
        </label>
        <label>
          Title:
          <input type="text" value={this.state.title} />
        </label>
      </form>
    );
  }
}

export default PostForm;
