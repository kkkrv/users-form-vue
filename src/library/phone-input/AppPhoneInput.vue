<template>
  <a-input
    v-maska
    data-maska-eager
    data-maska="+49 ### ########"
    placeholder="+49 000 00000000"
    :class="styles.input"
    v-bind="$attrs"
  />
</template>

<script setup>
import { vMaska } from "maska";
import styles from "./app-phone-number.module.less";
</script>

<style scoped></style>
