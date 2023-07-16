<script setup lang="ts">
import { Field, ErrorMessage } from 'vee-validate'

interface FieldProps {
  name: string
  label: string
}

const props = withDefaults(defineProps<FieldProps>(), {
  name: '',
  label: ''
})
</script>

<template>
  <div>
    <label :for="props.name" class="field-label">
      {{ label }}
    </label>
    <Field v-bind="$attrs" :id="props.name" :name="props.name" class="field-input">
      <template #default="{ field, meta }">
        <input
          v-bind="field"
          class="field-input"
          :class="{ 'field-input--error': !meta.valid && meta.touched }"
        />
      </template>
    </Field>
    <ErrorMessage :name="props.name">
      <template #default="{ message }">
        <p class="field-error" v-if="message">{{ message }}</p>
      </template>
    </ErrorMessage>
  </div>
</template>

<style scoped>
.field-label {
  font-weight: bold;
}

.field-input {
  display: block;
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.field-input--error {
  border-color: red;
}

.field-error {
  color: red;
  margin-top: 0.25rem;
  font-size: 0.9rem;
}
</style>
