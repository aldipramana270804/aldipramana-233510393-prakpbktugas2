<script setup>
import { ref } from 'vue'

const text = ref('')
</script>

<template>
  <div class="form-container">
    <input v-model="text" placeholder="Type here" />
    <p class="output-text">{{ text }}</p>
  </div>
</template>

<style scoped>
.form-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px;
  height: 100%;
}

input {
  padding: 10px 16px;
  font-size: 16px;
  border: 2px solid #001f3f;
  border-radius: 6px;
  outline: none;
  margin-bottom: 20px;
  width: 250px;
}

.output-text {
  font-size: 24px;
  font-weight: bold;
  color: #001f3f;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3); 
  transition: all 0.3s ease;
}
</style>
