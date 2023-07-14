import { fetchPosts } from '@/api/post'
import { useQuery } from '@tanstack/vue-query'

export const usePosts = () => {
  return useQuery(['Posts'], fetchPosts)
}
