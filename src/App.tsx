import React from 'react';
import { StyledH1 } from './components/H1/H1.style';
import { GlobalStyle } from './Global.style';
import PostCard, { Post } from './components/PostCard/PostCard';

const App = () => {
  let post1: Post = {
    id: 1,
    title: 'Hello',
    content: 'qwerty',
    image: <img src="https://picsum.photos/id/237/200/300" alt="" />,
  }
  let post2: Post = {
    id: 2,
    title: 'Hello2',
    content: 'qwerty2',
    image: <img src="https://picsum.photos/id/233/200/300" alt="" />,
  }
  let postList: Post[] = [];
  postList.push(post1, post2);
  return (
    <>
      <GlobalStyle/>
      <StyledH1>  
        Hello world!
      </StyledH1>
      <div style={{display: 'flex', flexWrap: 'wrap'}}>
        {postList.map((post: Post) => {
          return post.id%2 ===0?  <PostCard post={post}/>:<PostCard post={post} style={{marginRight:'10px'}}/>
        })}
      </div>
    </>
  );
}

export default App;
