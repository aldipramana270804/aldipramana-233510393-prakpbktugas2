<script setup>
import { ref } from 'vue'

const count = ref(0)
const isClicked = ref(false)

function increment() {
  isClicked.value = true
  count.value++

  setTimeout(() => {
    isClicked.value = false
  }, 300)
}
</script>

<template>
  <div class="event-container">
    <button
      @click="increment"
      :class="{ clicked: isClicked }"
    >
      Count is: {{ count }}
    </button>
  </div>
</template>

<style scoped>
.event-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 20px;
}

button {
  background-color: #001f3f;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
  transition: transform 0.3s ease, background-color 0.3s ease;
}

button:hover {
  background-color: #004080;
}

button.clicked {
  transform: scale(1.1) translateY(-5px);
}
</style>
