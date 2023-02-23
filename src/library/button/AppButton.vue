<template>
  <a-button :class="styles.button" v-bind="$attrs" size="large">{{
    label
  }}</a-button>
</template>

<script setup>
import styles from "./app-button.module.less";

defineProps(["label"]);
</script>
