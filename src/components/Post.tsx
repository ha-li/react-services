import type { Post } from '../types';

interface Props {
  post: Post;
};

export function Post( {post} : Props) {
  return (
    <li>
      <h3>{post.title}</h3>
      <p>{post.description}</p>
    </li>
  )
}