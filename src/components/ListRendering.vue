<script setup>
import { ref } from 'vue'

let id = 0
const newTodo = ref('')
const todos = ref([
  { id: id++, text: 'Learn HTML' },
  { id: id++, text: 'Learn JavaScript' },
  { id: id++, text: 'Learn Vue' }
])

function addTodo() {
  if (newTodo.value.trim()) {
    todos.value.push({ id: id++, text: newTodo.value.trim() })
    newTodo.value = ''
  }
}

function removeTodo(todo) {
  todos.value = todos.value.filter(t => t.id !== todo.id)
}
</script>

<template>
  <div class="container">
    <form @submit.prevent="addTodo" class="todo-form">
      <input v-model="newTodo" required placeholder="new todo" />
      <button type="submit" class="add-button">Add Todo</button>
    </form>

    <ul class="todo-list">
      <li v-for="todo in todos" :key="todo.id" class="todo-item">
        {{ todo.text }}
        <button @click="removeTodo(todo)" class="remove-button" aria-label="Remove todo">
          Hapus
        </button>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.container {
  max-width: 400px;
  margin: 2rem auto;
  text-align: center;
  font-family: Arial, sans-serif;
}

.todo-form {
  display: flex;
  gap: 0.5rem;
  justify-content: center;
  margin-bottom: 1.5rem;
}

.todo-form input {
  flex-grow: 1;
  padding: 0.5rem 0.75rem;
  font-size: 1rem;
  border: 2px solid #1e3a8a;
  border-radius: 6px;
  outline-offset: 2px;
}

.todo-form input:focus {
  border-color: #374f9b;
}

.add-button {
  background-color: #1e3a8a;
  color: #f5f5dc;
  border: none;
  padding: 0.55rem 1rem;
  font-size: 1rem;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.add-button:hover {
  background-color: #374f9b;
}

.todo-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.todo-item {
  background-color: #f5f5dc;
  margin-bottom: 0.7rem;
  padding: 0.5rem 0.75rem;
  border-radius: 6px;
  font-weight: 600;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.remove-button {
  background-color: transparent;
  border: none;
  color: #b91c1c;
  font-weight: 700;
  cursor: pointer;
  padding: 0 0.5rem;
  transition: color 0.3s ease;
}

.remove-button:hover {
  color: #7f1d1d;
}
</style>
