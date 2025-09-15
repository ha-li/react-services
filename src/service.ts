import type { PostData, Post } from './types';

export async function getPosts() {
  const response = await fetch("http://localhost:3001/posts/");
  
  /* if (!response.ok) {
    throw new Error(`Failed to fetch posts: ${response.status}`);
  } */
  
  //const body: Post[] = await response.json();
  const body = (await response.json()) as unknown;
  assertIsPosts(body);
  return body;
}

export function getPost(postsData: PostData[], index: number): Post {
  return postsData[index];
}

export function assertIsPosts (postsData: unknown): asserts postsData is PostData[] {
  if (!Array.isArray(postsData)) {
    throw new Error("posts isn't an array");
  }

  if (postsData.length === 0) {
    return;
  }

  postsData.forEach( (post) => {
    if (!('id' in post)) {
      throw new Error("post doesn't ctonain id");
    }

  });
}