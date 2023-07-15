<script setup lang="ts">
interface Props {
  color?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info'
}

withDefaults(defineProps<Props>(), {
  color: 'primary'
})

const emit = defineEmits<{ click: [e: MouseEvent] }>()

const handleClick = (event: MouseEvent) => {
  emit('click', event)
}
</script>

<template>
  <button class="btn" :class="color" @click="handleClick">
    <slot></slot>
  </button>
</template>

<style scoped>
.btn {
  padding: 0.5rem 1rem;
  font-size: 1rem;
  border-radius: 0.25rem;
  border: none;
  color: #fff;
  cursor: pointer;
}

.primary {
  background-color: #007bff;

  &:hover {
    background-color: #035ec0;
  }
}

.secondary {
  background-color: #6c757d;
}

.success {
  background-color: #28a745;
}

.danger {
  background-color: #dc3545;
}

.warning {
  background-color: #ffc107;
}

.info {
  background-color: #17a2b8;
}
</style>
