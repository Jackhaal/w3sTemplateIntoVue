import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import Product from './components/Product.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

const app = createApp(App)
app.component("Product",Product)
app.use(router)
app.mount('#app')
app.use(VueAxios, axios)