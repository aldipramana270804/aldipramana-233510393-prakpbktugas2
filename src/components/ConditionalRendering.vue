<script setup>
import { ref } from 'vue'

const awesome = ref(true)

function toggle() {
  awesome.value = !awesome.value
}
</script>

<template>
  <div class="container">
    <button @click="toggle">KLIK BANG</button>
    <div class="text-wrapper">
      <h1 v-if="awesome" class="text-blue">YOK LAH BELAJAR VUE</h1>
      <h1 v-else class="text-cream">NAH GITU DONG 😢</h1>
    </div>
  </div>
</template>

<style scoped>
.container {
  text-align: center; 
  margin-top: 2rem;
}

button {
  background-color: #1e3a8a; 
  color: #f5f5dc; 
  border: none;
  padding: 0.6rem 1.2rem;
  font-size: 1.1rem;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #374f9b; 
}

.text-wrapper {
  margin-top: 1.5rem; 
  min-height: 3rem; 
}

.text-blue {
  color: #1e3a8a; 
  font-weight: 700;
}

.text-cream {
  color: #f5f5dc; 
  font-weight: 700;
  background-color: #1e3a8a;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  display: inline-block;
}
</style>
