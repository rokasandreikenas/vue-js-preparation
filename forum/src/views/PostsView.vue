<script setup lang="ts">
import { usePosts } from '../hooks/post'
const { data: posts, isLoading } = usePosts()
</script>

<template>
  <main>
    <h1>Posts</h1>
    <div v-if="isLoading">Loading...</div>
    <div v-for="post in posts" :key="post.id">
      {{ post.title }}
    </div>
  </main>
</template>

<style scoped>
h1 {
  text-align: center;
  margin-bottom: 1rem;
}
</style>
../hooks/post
