<script setup lang="ts">
import { Form } from 'vee-validate'
import * as yup from 'yup'
import StyledButton from '../common/StyledButton.vue'
import StyledField from '../common/StyledField.vue'
import { createPost } from '@/api/post'

const props = defineProps<{
  onConfirm: () => void
}>()

type FormValues = {
  title: string
  body: string
}

const schema = yup.object().shape({
  title: yup.string().required('Required'),
  body: yup.string().required('Required')
})

const onSubmit = (values: Record<string, unknown>) => {
  const typedValues = values as FormValues
  const post = { ...typedValues, userId: 1 }
  createPost(post)
    .then(() => {
      props.onConfirm()
      console.log('success')
    })
    .catch((err) => {
      console.error('failed to create post', err)
    })
}
</script>

<template>
  <Form :validation-schema="schema" @submit="onSubmit">
    <StyledField name="title" label="Title" class="field" />
    <StyledField name="body" label="Body" class="field" as="textarea" rows="4" />
    <StyledButton type="submit">Submit</StyledButton>
  </Form>
</template>

<style scoped lang="scss">
form {
  display: flex;
  flex-direction: column;
  padding: 1rem;
}

.field {
  margin-bottom: 1rem;
}
</style>
