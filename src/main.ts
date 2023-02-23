import { createApp } from "vue";
import { createPinia } from "pinia";
import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css";
import App from "./App.vue";

import "./assets/main.less";

const app = createApp(App);

app.use(createPinia()).use(Antd);

app.mount("#app");
