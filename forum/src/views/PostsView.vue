<script setup lang="ts">
import PostCard from '@/components/post/PostCard.vue'
import { usePosts } from '../hooks/post'

const { data: posts, isLoading } = usePosts()
</script>

<template>
  <main>
    <h1>Posts</h1>
    <div v-if="isLoading">Loading...</div>
    <PostCard v-for="post in posts" :key="post.id" :post="post" />
  </main>
</template>

<style scoped>
h1 {
  text-align: center;
  margin-bottom: 1rem;
}
</style>
../hooks/post
