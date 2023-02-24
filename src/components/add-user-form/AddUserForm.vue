<template>
  <div :class="styles.wrapper">
    <a-form
      ref="formRef"
      name="user"
      :model="formState"
      v-bind="layout"
      validateTrigger="blur"
      @finish="handleFinish"
      @change="resetStatus"
      :class="styles.userForm"
    >
      <PersonalInformation
        v-model:name="formState.name"
        v-model:username="formState.username"
        v-model:email="formState.email"
        v-model:phone="formState.phone"
      />

      <CompanyInformation
        v-model:company-name="formState.companyName"
        v-model:company-catch-phrase="formState.companyCatchPhrase"
      />

      <a-form-item :wrapper-col="{ span: 24 }">
        <AppButton
          type="primary"
          html-type="submit"
          :loading="userStore.isLoading"
        >
          Add
        </AppButton>
      </a-form-item>
    </a-form>

    <StatusNotification
      :is-success="userStore.success"
      :error="userStore.error"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import type { FormInstance } from "ant-design-vue";

import PersonalInformation from "@/components/personal-information/PersonalInformation.vue";
import CompanyInformation from "@/components/company-information/CompanyInformation.vue";
import AppButton from "@/library/button/AppButton.vue";
import { useUserStore } from "@/stores/users";
import type { FormStateModel } from "@/models/form.model";
import styles from "./add-user-form.module.less";
import StatusNotification from "@/components/status-notification/StatusNotification.vue";

const userStore = useUserStore();

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

async function handleFinish() {
  await userStore.createUser(formState.value);
  formRef.value?.resetFields();
}

function resetStatus() {
  (userStore.success || userStore.error) && userStore.resetStatus();
}

const formRef = ref<FormInstance>();

const formState = ref<FormStateModel>({
  username: "",
  name: "",
  email: "",
  phone: "",
  companyName: "",
  companyCatchPhrase: "",
});
</script>
