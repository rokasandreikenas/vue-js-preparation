import type { Post } from '@/types/post'
import axios from 'axios'

export const fetchPosts = async (): Promise<Post[]> => {
  const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
  return response.data
}
