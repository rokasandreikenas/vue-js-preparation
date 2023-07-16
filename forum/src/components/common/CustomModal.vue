<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { VueFinalModal } from 'vue-final-modal'

defineProps<{
  title?: string
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', modelValue: boolean): void
}>()
</script>

<template>
  <VueFinalModal
    class="modal-container"
    content-class="modal-content"
    @update:model-value="(val) => emit('update:modelValue', val)"
  >
    <div class="header">
      <h1 v-if="title" class="title">
        {{ title }}
      </h1>
      <button class="close-button" @click="emit('update:modelValue', false)">
        <Icon icon="clarity:window-close-line" class="close-icon" />
      </button>
    </div>
    <slot />
  </VueFinalModal>
</template>

<style lang="scss">
.modal-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  display: flex;
  flex-direction: column;
  padding: 1rem;
  background-color: white;
  border-radius: 0.25rem;
  border: 1px solid #f7fafc;
  width: 35%;

  .dark & {
    background-color: black;
    border-color: #2d3748;
  }
}

.header {
  display: flex;
  align-items: center;
  height: 2.5rem;

  .title {
    font-size: 1.5rem;
  }

  .close-button {
    background: none;
    border: none;
    margin-left: auto;
    cursor: pointer;

    .close-icon {
      width: 2.5rem;
      height: 2.5rem;
    }
  }
}
</style>
