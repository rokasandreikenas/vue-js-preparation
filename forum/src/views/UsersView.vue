<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import UserCard from '@/components/user/UserCard.vue'
import StyledButton from '@/components/common/StyledButton.vue'
import { fetchUsers } from '@/api/user'
import type { User } from '@/types/user'
import { RouteNames } from '@/router'

const users = ref<User[]>([])
const isLoading = ref(false)
const error = ref('')
const selectedUser = ref<User>()

const router = useRouter()

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

const visitProfile = () => {
  router.push({ name: RouteNames.User, params: { id: selectedUser.value?.id } })
}
</script>

<template>
  <main>
    <h1>Users</h1>
    <div v-if="selectedUser" class="selected">
      <h2>You selected {{ selectedUser.name }}</h2>
      <StyledButton @click="visitProfile">Visit profile</StyledButton>
    </div>
    <div v-else class="selected"><h2>&nbsp;</h2></div>
    <div v-if="error">{{ error }}</div>
    <div v-else-if="isLoading">Loading...</div>
    <div v-else>
      <UserCard
        v-for="user in users"
        :key="user.id"
        :user="user"
        :isSelected="user.id === selectedUser?.id"
        :selectUser="selectUser"
      />
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

.selected {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
}
</style>
