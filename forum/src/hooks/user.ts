import { fetchUser } from '@/api/user'
import type { User } from '@/types/user'
import { useQuery } from '@tanstack/vue-query'

const USER = 'USER'

export const useUser = (id: User['id']) => {
  return useQuery([USER], () => fetchUser(id))
}
