import axios from 'axios'
import type { User } from '@/types/user'
import { API_URI } from './consts'

export const fetchUsers = async (): Promise<User[]> => {
  const response = await axios.get(`${API_URI}/users`)
  return response.data
}

export const fetchUser = async (id: User['id']): Promise<User> => {
  const response = await axios.get(`${API_URI}/users/${id}`)
  return response.data
}
