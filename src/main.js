import { createApp } from "vue";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App.vue";

// // font-awesome
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";
library.add(faCircleNotch);

const app = createApp(App);

app.component("font-awesome-icon", FontAwesomeIcon);

app.mount("#app");
