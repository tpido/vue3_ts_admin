import { createApp } from 'vue';
import 'normalize.css';
import './assets/less/index.less';
import App from './App.vue';
import router from './router';
import store from './store';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';

const app = createApp(App);

app.use(store).use(router).use(ElementPlus).mount('#app');
