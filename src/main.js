import { createApp } from 'vue'
import App from './App.vue'
import store from './store/index';

const app=createApp(App);

import BaseButton from './components/UI/BaseButton'
import BaseCard from './components/UI/BaseCard'

app.use(store)

app.component('base-button',BaseButton)
app.component('base-card',BaseCard)

app.mount('#app')
