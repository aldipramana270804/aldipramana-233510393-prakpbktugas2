<template>
  <div class="app-container">
    <h1>TUGAS 2 DAN 3</h1>

    <div class="menu-box">
      <ul class="menu-list">
        <li><router-link to="/declarative-rendering">DeclarativeRendering</router-link></li>
        <li><router-link to="/atributs-binding">AtributsBinding</router-link></li>
        <li><router-link to="/event-listeners">EventListeners</router-link></li>
        <li><router-link to="/from-bindings">FromBindings</router-link></li>
        <li><router-link to="/conditional-rendering">ConditionalRendering</router-link></li>
        <li><router-link to="/list-rendering">ListRendering</router-link></li>
        <li><router-link to="/computed-property">ComputedProperty</router-link></li>
        <li><router-link to="/lifecycle-hook">LifecycleHook</router-link></li>
        <li><router-link to="/watchers">Watchers</router-link></li>
      </ul>
    </div>

    <div class="content-box">
      <router-view />
    </div>
  </div>
</template>

<script setup>

</script>

<style scoped>
.app-container {
  max-width: 1000px;
  margin: 0 auto;
  padding: 20px;
  font-family: 'Segoe UI', sans-serif;
}

h1 {
  text-align: center;
  margin-bottom: 20px;
}

.menu-box {
  background-color: #f8f8f8;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  margin-bottom: 30px;
}

.menu-list {
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
}

.menu-list li {
  background: #001f3f;
  border-radius: 8px;
  padding: 10px 16px;
  transition: background 0.3s ease;
}

.menu-list li:hover {
  background: #003366;
}

.menu-list li a {
  color: white;
  text-decoration: none;
  font-weight: bold;
}

.content-box {
  background-color: #fff;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
  min-height: 300px;
}
</style>
