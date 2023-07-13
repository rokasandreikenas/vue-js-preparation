<script setup lang="ts">
import { ref } from 'vue'
import { type Todo } from '../types'

const todos = ref<Todo[]>([{ id: 1, title: 'Learn Vue.js', isDone: false }])
const todoInput = ref('')

const addNewTodo = () => {
  if (!todoInput.value) return

  todos.value.push({ id: Date.now(), isDone: false, title: todoInput.value })
  todoInput.value = ''
}

const toggleTodoCompletion = (todo: Todo) => {
  todo.isDone = !todo.isDone
}
</script>

<template>
  <div class="todo">
    <h1>Todos</h1>
    <ul>
      <li v-for="(todo, index) in todos" v-bind:key="todo.id" @click="toggleTodoCompletion(todo)">
        {{ index + 1 }}. {{ todo.title }}.
        {{ todo.isDone ? "Yes, it's " : "No, it's " }}
        <span v-if="todo.isDone">Done</span>
        <span v-else>Not Done</span>
      </li>
    </ul>
    <form @submit.prevent="addNewTodo" class="input-container">
      <input type="text" placeholder="Enter todo..." v-model="todoInput" required />
      <button type="submit" class="add-button">Add to list</button>
    </form>
  </div>
</template>

<style scoped lang="scss">
.todo {
  padding: 2rem;
}

.input-container {
  margin-top: 1rem;

  .add-button {
    margin-left: 0.5rem;
  }
}
</style>
