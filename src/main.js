import { createApp } from "vue";
import App from "./App.vue";
import TasksContainer from "./components/TasksContainer.vue";

import "./assets/main.css";

const app = createApp(App);

app.component("tasks-container", TasksContainer);

app.mount("#app");
