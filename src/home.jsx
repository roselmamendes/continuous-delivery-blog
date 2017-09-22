import React from 'react';
import superagent from 'superagent';

const style = {
  postsList: {
    backgroundColor: 'antiquewhite',
    padding: 10,
    borderRadius: 5
  }
}

class Home extends React.Component {

  constructor(props){
    super(props);
    this.state = {posts: [], error: undefined};
    this.loadPosts = this.loadPosts.bind(this);
  }

  render(){
    if(this.state.error != undefined){
      return (<div>Error</div>);
    }else{
      const postComponent = this.state.posts.map((post) =>
          <Post key={post.slug} post={post}/>
      );

      return (
          <div style={style.postsList}>
            {postComponent}
          </div>
      );
    }
  }

  componentDidMount(){
    let postsresult;
    superagent
    .get('http://localhost:5000/posts')
    .end(this.loadPosts);
  }

  loadPosts(err, res){
    if(err){
      console.log(err);
      this.setState({error: err});
      console.error(this.state.error);
    }else{
      this.setState({posts: res.body});
    }
  }
}

const Post = (props) => {
  return (
    <div>
      { props.post.title }
    </div>
  );
}

export {Home, Post};
