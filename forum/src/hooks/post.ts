import { createPost, fetchPosts } from '@/api/post'
import { useQuery, useMutation } from '@tanstack/vue-query'

export const usePosts = () => {
  return useQuery(['Posts'], fetchPosts)
}

export const useCreatePost = () => {
  return useMutation(createPost)
}
