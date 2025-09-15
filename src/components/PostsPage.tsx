import { useEffect, useState } from 'react';
import { getPosts } from '../service';
import type { PostData } from '../types';
import { PostsList } from './PostList';

export function PostsPage () {
  const [isLoading, setIsLoadging] = useState(true);
  const [posts, setPosts] = useState<PostData[]>([]);

  useEffect( () => {
    let cancel = false;
    getPosts().then( (data) => {
      if (!cancel) {
        setPosts(data);
        setIsLoadging(false);
      }
    });

    return () => {
      cancel = true;
    };
  }, []);  // end useEffect

  if (isLoading) {
    return (
      <div>Loading ...</div>
    );
  } // end isLoading


  return (
    <div>
      <h2>Posts</h2>
      <PostsList posts={posts} />
    </div>
  );
}