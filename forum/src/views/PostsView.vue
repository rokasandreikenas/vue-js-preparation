<script setup lang="ts">
import { usePosts } from '../hooks/post'
import { useModal } from 'vue-final-modal'
import CustomModal from '@/components/common/CustomModal.vue'
import StyledButton from '@/components/common/StyledButton.vue'
import CreatePostForm from '@/components/post/CreatePostForm.vue'
import PostCard from '@/components/post/PostCard.vue'

const { data: posts, isLoading } = usePosts()

const { open } = useModal({
  component: CustomModal,
  attrs: {
    title: 'Create Post'
  },
  slots: {
    default: CreatePostForm
  }
})
</script>

<template>
  <main>
    <header class="header">
      <div class="empty" />
      <h1>Posts</h1>
      <div class="button">
        <StyledButton @click="open">Create Post</StyledButton>
      </div>
    </header>
    <div v-if="isLoading">Loading...</div>
    <PostCard v-for="post in posts" :key="post.id" :post="post" />
  </main>
</template>

<style scoped>
.header {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  margin-bottom: 1rem;
}

h1 {
  text-align: center;
}

.button {
  display: flex;
  justify-content: flex-end;
}
</style>
