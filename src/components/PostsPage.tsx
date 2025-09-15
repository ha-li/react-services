import { useEffect, useState } from 'react';
import { getPosts, savePost } from '../service';
import type { PostData, NewPost } from '../types';
import { PostsList } from './PostList';
import { NewPostForm } from './NewPostForm';

export function PostsPage () {
  const [isLoading, setIsLoading] = useState(true);
  const [posts, setPosts] = useState<PostData[]>([]);

  useEffect( () => {
    let cancel = false;
    getPosts().then( (data) => {
      if (!cancel) {
        setPosts(data);
        setIsLoading(false);
      }
    });

    return () => {
      cancel = true;
    };
  }, []);  // end useEffect

  async function handleSave(newPostData: NewPost) {
    const newPost = await savePost(newPostData);
    setPosts([newPost, ...posts]);
  }

  if (isLoading) {
    return (
      <div>Loading ...</div>
    );
  } // end isLoading


  return (
    <>
      <div>
        <h2>Posts</h2>
        <PostsList posts={posts} />
      </div>
      <div>
        <NewPostForm onSave={handleSave} />
      </div>
    </>
  );
}