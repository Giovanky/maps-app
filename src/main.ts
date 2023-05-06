import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import store from './store'

if(!navigator.geolocation){
    alert('Tu navegador no soporta el geolocator')
    throw new Error('Tu navegador no soporta el geolocator')
}

createApp(App).use(store).use(router).mount('#app')
