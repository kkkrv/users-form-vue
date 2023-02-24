<template>
  <AppAlert
    v-if="isSuccess"
    message="User was added successfully"
    type="success"
  />
  <AppAlert v-else-if="error" :message="error" type="error" />
</template>

<script setup lang="ts">
import AppAlert from "@/library/alert/AppAlert.vue";

defineProps(["isSuccess", "error"]);
</script>
