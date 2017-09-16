import React from 'react';

const posts = [
  {'title': 'some title', 'id': '1'},
  {'title': 'some title 2', 'id': '2'},
];

const style = {
  postsList: {
    margin: 10,
    width: 200,
    backgroundColor: 'antiquewhite',
    padding: 10
  }
}

const Home = () => {
  const postComponent = posts.map((post) =>
      <Post key={post.id} post={post}/>
  );

  return (
      <div style={style.postsList}>
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
