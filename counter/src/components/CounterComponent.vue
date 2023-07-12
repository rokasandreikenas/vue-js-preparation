<script setup>
import { ref } from 'vue'
const count = ref(0)
const increment = () => count.value++
const decrement = () => count.value--
</script>

<template>
  <div class="counter">
    <h1>Counter</h1>
    <h2 class="count">{{ count }}</h2>
    <div class="buttons">
      <button @click="increment" :disabled="count === 3">+1</button>
      <button @click="decrement" :disabled="count === -3">-1</button>
    </div>
  </div>
</template>

<style>
.counter {
  width: 1100px;
  margin: 0 auto;
  text-align: center;
  margin-top: 80px;
}

.counter .count {
  margin: 40px 0;
}

.counter .buttons {
  display: flex;
  gap: 2rem;
  justify-content: center;
  font-size: 24px;
}

button {
  padding: 10px 14px;
}
</style>
