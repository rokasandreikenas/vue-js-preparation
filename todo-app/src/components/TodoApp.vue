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
  if (todo.isDone) {
    removeTodo(todo)
  }
  todo.isDone = !todo.isDone
}

const removeTodo = (todo: Todo) => {
  const index = todos.value.findIndex((t) => t.id === todo.id)
  if (index !== -1) {
    todos.value.splice(index, 1)
  }
}
</script>

<template>
  <div class="todo">
    <h1>Todos</h1>
    <ul>
      <li
        v-for="(todo, index) in todos"
        v-bind:key="todo.id"
        @click="toggleTodoCompletion(todo)"
        class="todo-item"
      >
        {{ index + 1 }}. {{ todo.title }}
        <span v-if="todo.isDone" class="material-icons done">done</span>
        <span v-else class="material-icons not-done">close</span>
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
  width: 500px;
  margin: 80px auto;
  box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
  border-radius: 5px;
  padding: 2rem;

  h1 {
    text-align: center;
  }

  ul {
    padding: 0;
  }

  &-item {
    display: flex;
    gap: 0.25rem;
  }
}

.input-container {
  margin-top: 1rem;

  .add-button {
    margin-left: 0.5rem;
  }
}

.done {
  color: green;
}
.not-done {
  color: red;
}
</style>
