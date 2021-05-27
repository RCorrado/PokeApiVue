import App from "./App.vue";
import router from "./router";
import { createApp } from "vue";
import "./registerServiceWorker";

//Styles
import './index.css';

createApp(App).use(router).mount("#app");
