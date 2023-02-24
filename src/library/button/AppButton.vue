<template>
  <a-button :class="styles.button" v-bind="$attrs" size="large">
    <slot>Submit</slot>
  </a-button>
</template>

<script setup>
import styles from "./app-button.module.less";
</script>
