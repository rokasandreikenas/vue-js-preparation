<script setup>
import CounterComponent from './components/CounterComponent.vue'
</script>

<template>
  <header>
    <nav class="navigation">
      <a>One</a>
      <a>Two</a>
      <a>Three</a>
    </nav>
  </header>
  <main>
    <CounterComponent />
  </main>
</template>

<style>
.navigation {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
}
</style>
