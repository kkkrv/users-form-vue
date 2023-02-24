<template>
  <h2>Company information</h2>

  <a-form-item
    label="Company name"
    name="companyName"
    :rules="[{ required: true, message: 'Please input company name.' }]"
  >
    <AppInput
      :value="companyName"
      @input="$emit('update:companyName', $event.target.value)"
      placeholder="Company name"
    />
  </a-form-item>

  <a-form-item label="Catch phrase" name="companyCatchPhrase">
    <AppInput
      :value="companyCatchPhrase"
      @input="$emit('update:companyCatchPhrase', $event.target.value)"
      placeholder="Some phrase..."
    />
  </a-form-item>
</template>

<script setup lang="ts">
import AppInput from "@/library/input/AppInput.vue";

defineProps(["companyCatchPhrase", "companyName"]);
defineEmits(["update:companyCatchPhrase", "update:companyName"]);
</script>
