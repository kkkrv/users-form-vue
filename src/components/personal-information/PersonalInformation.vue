<template>
  <h2>Personal information</h2>

  <a-form-item
    label="Username"
    name="username"
    :rules="[{ required: true, message: 'Please input your username.' }]"
  >
    <AppInput
      :value="username"
      @input="$emit('update:username', $event.target.value)"
      placeholder="Your username"
    />
  </a-form-item>

  <a-form-item
    label="Name"
    name="name"
    :rules="[{ required: true, message: 'Please input your name.' }]"
  >
    <AppInput
      :value="name"
      @input="$emit('update:name', $event.target.value)"
      placeholder="Your name"
    />
  </a-form-item>

  <a-form-item
    label="E-mail"
    name="email"
    :rules="[
      { required: true, message: 'Please input your e-mail.' },
      { type: 'email', message: 'Enter a valid e-mail address.' },
    ]"
  >
    <AppInput
      :value="email"
      @input="$emit('update:email', $event.target.value)"
      placeholder="example@mail.com"
    />
  </a-form-item>

  <a-form-item
    label="Phone number"
    name="phone"
    :rules="[
      { required: true, message: 'Please input your phone.' },
      {
        pattern: /^[+49][0-9 ]{13}/,
        message: 'Enter a valid phone number.',
      },
    ]"
  >
    <AppPhoneInput
      :value="phone"
      @input="$emit('update:phone', $event.target.value)"
      :maxlength="16"
    />
  </a-form-item>
</template>

<script setup lang="ts">
import AppInput from "@/library/input/AppInput.vue";
import AppPhoneInput from "@/library/phone-input/AppPhoneInput.vue";

defineProps(["username", "name", "email", "phone"]);
defineEmits(["update:username", "update:name", "update:email", "update:phone"]);
</script>

<style scoped></style>
