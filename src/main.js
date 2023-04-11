import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import scrollDirective from '../directives/scrollDirective';

const app = createApp(App);

app.directive('scroll', scrollDirective);

app.mount('#app');

