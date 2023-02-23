<template>
  <a-layout :class="styles.layout">
    <a-layout-header :class="styles.header">
      <h1 :class="styles.headerText">Add a new user</h1>
    </a-layout-header>
    <a-layout-content :class="styles.content">
      <AddUserForm />
    </a-layout-content>
    <a-layout-footer :class="styles.footer"> kkkrv ©2023</a-layout-footer>
  </a-layout>
</template>

<script setup lang="ts">
import AddUserForm from "@/components/add-user-form/AddUserForm.vue";
import styles from "./styles/layout.module.less";
</script>
