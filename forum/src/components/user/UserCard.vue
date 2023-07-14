<script setup lang="ts">
import { onMounted } from 'vue'
import type { User } from '../../types/user'

interface Props {
  user: User
  selectUser: (user: User) => void
}

const props = defineProps<Props>()

onMounted(() => {
  console.log(props.user.address.city)
})
</script>

<template>
  <div @click="selectUser(user)">
    <h2>{{ user.name }}</h2>
    <p>{{ user.email }}</p>
  </div>
</template>
