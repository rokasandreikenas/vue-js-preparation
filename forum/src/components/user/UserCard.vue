<script setup lang="ts">
import { onMounted } from 'vue'
import type { User } from '../../types/user'

interface Props {
  user: User
  isSelected: boolean
  selectUser: (user: User) => void
}

const props = defineProps<Props>()

onMounted(() => {
  console.log(props.user.address.city)
})
</script>

<template>
  <div @click="selectUser(user)" class="card" :class="{ active: isSelected }">
    <h2 :style="{ textDecoration: isSelected ? 'underline' : 'none' }">{{ user.name }}</h2>
    <p>{{ user.email }}</p>
  </div>
</template>

<style scoped>
.card {
  box-shadow: 2px 5px 10px 1px rgba(156, 155, 155, 0.34);
  margin-bottom: 1rem;
  padding: 1rem;
  border-radius: 4px;
}

.active {
  box-shadow: 2px 5px 10px 1px rgba(17, 103, 222, 0.34);
}
</style>
