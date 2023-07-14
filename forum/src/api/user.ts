import type { User } from '@/types/user'
import axios from 'axios'

export const fetchUsers = async (): Promise<User[]> => {
  const response = await axios.get('https://jsonplaceholder.typicode.com/users')
  return response.data
}
