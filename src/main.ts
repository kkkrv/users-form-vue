import { createApp } from "vue";
import { createPinia } from "pinia";
import "ant-design-vue/dist/antd.css";
import Antd from "ant-design-vue";
import App from "./App.vue";

import "./assets/main.less";

const app = createApp(App);

app.use(createPinia()).use(Antd);

app.mount("#app");
