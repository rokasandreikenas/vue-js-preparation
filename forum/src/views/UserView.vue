<script setup lang="ts">
interface Props {
  id: string
}

const props = defineProps<Props>()
</script>

<template>
  <main>
    <h2>User {{ props.id }}</h2>
  </main>
</template>

<style lang="scss"></style>
