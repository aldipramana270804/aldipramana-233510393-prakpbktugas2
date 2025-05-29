<script setup>
import { ref, onMounted } from 'vue'

const pElementRef = ref(null)

onMounted(() => {
  pElementRef.value.textContent = 'Silahkan!'
})
</script>

<template>
  <div class="container">
    <p ref="pElementRef">Hello Word</p>
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
  justify-content: center; 
  align-items: flex-start; 
  padding-top: 20vh;       
}

p {
  font-size: 2rem;
  font-weight: 600;
  color: #333;
}
</style>
