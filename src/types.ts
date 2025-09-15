export interface Post {
  id: string;
  title: string;
  description: string;
}

export type PostData = Post;

export interface NewPost {
  title: string;
  description: string;
}

export interface SavedPost {
  id: string;
}

