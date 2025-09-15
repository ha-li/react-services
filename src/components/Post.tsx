import type { Post } from '../types';

type Props =  {
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