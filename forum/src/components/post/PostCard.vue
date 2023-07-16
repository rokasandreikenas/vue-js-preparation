<script setup lang="ts">
import { type Post } from '../../types/post'
interface Props {
  post: Post
}

defineProps<Props>()
</script>

<template>
  <div class="post">
    <h2>{{ post.title }}</h2>
    <p>{{ post.body }}</p>
  </div>
</template>

<style scoped lang="scss">
$post-box-color: #f5f5f5;
$header-color: #333;
$text-color: #666;

.post {
  width: 80%;
  margin: 1rem auto;
  padding: 1rem;
  border-radius: 10px;
  box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.1);
  background-color: $post-box-color;

  h2 {
    color: $header-color;
    margin-bottom: 1rem;
  }

  p {
    color: $text-color;
    line-height: 1.6;
  }
}
</style>
