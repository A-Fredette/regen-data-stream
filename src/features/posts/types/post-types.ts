export type PostT = {
  id: string;
  createdAt: string;
  projectId: string;
  title: string;
  comment: string;
}

export interface PostProps {
  post: PostT;
  projectName: string;
}
