<script setup lang="ts">
import TheWelcome from "./components/TheWelcome.vue";
</script>

<template>
  <header>
    <div class="wrapper">Add a new user</div>
  </header>

  <main>
    <TheWelcome />
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

header {
  width: 100%;
  height: 220px;
  margin: 0 auto;
  padding: 12px 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #e5e5e5;
}

header .wrapper {
  max-width: 864px;
  font-size: 24px;
  display: flex;
  color: #bfbfbf;
}
</style>
