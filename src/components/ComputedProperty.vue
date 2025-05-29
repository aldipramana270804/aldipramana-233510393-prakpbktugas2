<script setup>
import { ref } from 'vue'

let id = 0

const newTodo = ref('')
const hideCompleted = ref(false)
const todos = ref([
  { id: id++, text: 'Learn HTML', done: true },
  { id: id++, text: 'Learn JavaScript', done: true },
  { id: id++, text: 'Learn Vue', done: false }
])

function addTodo() {
  todos.value.push({ id: id++, text: newTodo.value, done: false })
  newTodo.value = ''
}

function removeTodo(todo) {
  todos.value = todos.value.filter((t) => t !== todo)
}
</script>

<template>
  <div id="wrapper">
    <form @submit.prevent="addTodo">
      <input v-model="newTodo" required placeholder="new todo" />
      <button>Add Todo</button>
    </form>
    <ul>
      <li v-for="todo in todos" :key="todo.id">
        <input type="checkbox" v-model="todo.done" />
        <span :class="{ done: todo.done }">{{ todo.text }}</span>
        <button @click="removeTodo(todo)">X</button>
      </li>
    </ul>
    <button @click="hideCompleted = !hideCompleted">
      {{ hideCompleted ? 'Show all' : 'Hide completed' }}
    </button>
  </div>
</template>

<style>
html, body {
  height: 100%;
  margin: 0;
}

#wrapper {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center; 
  align-items: center;     
  gap: 1.5rem;
  font-family: system-ui, sans-serif;
  padding: 0 1rem;
  box-sizing: border-box;
  max-width: 420px; 
  margin: 0 auto;
}

form {
  display: flex;
  gap: 0.5rem;
  width: 100%;
}

form input {
  flex-grow: 1;
  padding: 0.5rem 0.75rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 6px;
}

form button {
  padding: 0.5rem 1rem;
  cursor: pointer;
  background-color: #4a90e2;
  color: white;
  border: none;
  border-radius: 6px;
  transition: background-color 0.3s ease;
}

form button:hover {
  background-color: #357ABD;
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
  width: 100%;
}

li {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  background-color: #e6f0ff;
  padding: 0.5rem 0.75rem;
  border-radius: 6px;
}

li input[type="checkbox"] {
  width: 18px;
  height: 18px;
  cursor: pointer;
}

li span {
  flex-grow: 1;
  user-select: none;
}

li button {
  background: transparent;
  border: none;
  color: #d9534f;
  font-weight: 700;
  cursor: pointer;
  padding: 0 0.5rem;
  transition: color 0.3s ease;
}

li button:hover {
  color: #b52b27;
}

.done {
  text-decoration: line-through;
  color: #6c757d;
}

button:last-of-type {
  padding: 0.5rem 1rem;
  cursor: pointer;
  background-color: #4a90e2;
  color: white;
  border: none;
  border-radius: 6px;
  transition: background-color 0.3s ease;
  width: 100%;
  max-width: 420px;
}

button:last-of-type:hover {
  background-color: #357ABD;
}
</style>
