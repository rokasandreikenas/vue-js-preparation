<script setup lang="ts">
import { Form } from 'vee-validate'
import * as yup from 'yup'
import StyledButton from '../common/StyledButton.vue'
import StyledField from '../common/StyledField.vue'
import { useCreatePost } from '@/hooks/post'
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

const { mutateAsync, isLoading } = useCreatePost()

const onSubmit = async (values: Record<string, unknown>) => {
  try {
    const typedValues = values as FormValues
    const post = { ...typedValues, userId: 1 }
    await mutateAsync(post)
    props.onConfirm()
  } catch (error) {
    console.error('failed to create post', error)
  }
}
</script>

<template>
  <Form :validation-schema="schema" @submit="onSubmit">
    <StyledField name="title" label="Title" class="field" />
    <StyledField name="body" label="Body" class="field" as="textarea" rows="4" />
    <StyledButton type="submit" :disabled="isLoading">Submit</StyledButton>
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
