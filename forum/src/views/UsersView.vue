<script setup lang="ts">
import { fetchUsers } from '@/api/user'
import type { User } from '@/types/user'
import { onMounted, ref } from 'vue'
import UserCard from '../components/user/UserCard.vue'

const users = ref<User[]>([])
const isLoading = ref(false)
const error = ref('')
const selectedUser = ref<User>()

onMounted(async () => {
  try {
    isLoading.value = true
    const response = await fetchUsers()
    users.value = response
    isLoading.value = false
  } catch (err) {
    console.error(err)
    error.value = 'Failed to fetch users. Please try again later.'
  } finally {
    isLoading.value = false
  }
})

const selectUser = (user: User) => {
  if (selectedUser.value?.id === user.id) {
    selectedUser.value = undefined
  } else {
    selectedUser.value = user
  }
}
</script>

<template>
  <main>
    <h1>Users</h1>
    <h2 v-if="selectedUser">You selected {{ selectedUser.name }}</h2>
    <h2 v-else>&nbsp;</h2>
    <div v-if="error">{{ error }}</div>
    <div v-else-if="isLoading">Loading...</div>
    <div v-else>
      <UserCard v-for="user in users" :key="user.id" :user="user" :selectUser="selectUser" />
    </div>
  </main>
</template>

<style scoped>
h1 {
  text-align: center;
}

h2 {
  text-align: center;
  color: green;
}
</style>
