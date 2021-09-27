import { createApp } from 'vue'
import App from './App.vue'

<<<<<<< HEAD
import axios from 'axios'

axios.defaults.baseURL = "http://localhost:8000/api/";
axios.defaults.withCredentials = true;

createApp(App).use(router).mount('#app')
=======
createApp(App).mount('#app')
>>>>>>> parent of 7b40eea... routes and staff profile idea
