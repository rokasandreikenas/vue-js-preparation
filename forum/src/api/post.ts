import type { Post } from '@/types/post'
import axios from 'axios'
import { API_URI } from './consts'

export const fetchPosts = async (): Promise<Post[]> => {
  const response = await axios.get(`${API_URI}/posts`)
  return response.data
}
