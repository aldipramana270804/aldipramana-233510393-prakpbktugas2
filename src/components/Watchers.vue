<script setup>
import { ref, watch } from 'vue'

const todoId = ref(1)
const todoData = ref(null)

async function fetchData() {
  todoData.value = null
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${todoId.value}`
  )
  todoData.value = await res.json()
}

fetchData()

watch(todoId, () => {
  fetchData()
})
</script>

<template>
  <div class="container">
    <p>Todo id: {{ todoId }}</p>
    <button @click="todoId++" :disabled="!todoData">Fetch next todo</button>
    <p v-if="!todoData">Loading...</p>
    <pre v-else>{{ todoData }}</pre>
  </div>
</template>

<style>
html, body {
  height: 100%;
  margin: 0;
}

.container {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 1rem;
  padding-top: 5vh;
  padding-left: 1rem;
  padding-right: 1rem;
  font-family: system-ui, sans-serif;
  text-align: center;
}

button {
  padding: 0.5rem 1rem;
  cursor: pointer;
  background-color: #4a90e2;
  color: white;
  border: none;
  border-radius: 6px;
  transition: background-color 0.3s ease;
}

button:disabled {
  background-color: #a0c4f7;
  cursor: not-allowed;
}

button:hover:not(:disabled) {
  background-color: #357ABD;
}

pre {
  background: #f0f0f0;
  padding: 1rem;
  border-radius: 6px;
  max-width: 350px;
  overflow-x: auto;
}
</style>
