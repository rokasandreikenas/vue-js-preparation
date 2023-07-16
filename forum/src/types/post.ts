export type NewPost = {
  userId: number
  title: string
  body: string
}

export interface Post extends NewPost {
  id: number
}
