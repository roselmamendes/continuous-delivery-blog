import React from 'react';

const Home = (props) => {
  const postComponent = props.posts.map((post) =>
    <Post key={post.id} post={post}/>
  );
  return (
    <div>
      {postComponent}
    </div>);
}

const Post = () => {
  return (<div></div>);
}

export {Home, Post};
