import type {PostData} from '../types';
import { Post } from './Post'

type Props = {
  posts: PostData[];
};

export function PostsList ({ posts }: Props) {
  return (
    <ul>
      { posts.map( (post) => (
        <Post key={post.id} post={post} />
      ))}
    </ul>
  );
}