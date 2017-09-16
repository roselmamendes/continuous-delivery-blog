import React from 'react';

const posts = [
  {'title': 'some title', 'id': '1'},
  {'title': 'some title 2', 'id': '2'},
];

const Home = () => {
  const postComponent = posts.map((post) =>
      <Post key={post.id} post={post}/>
  );

  return (
      <div>
        {postComponent}
      </div>
  );
}

const Post = (props) => {
  return (
    <div>
      { props.post.title }
    </div>
  );
}

export {Home, Post};
