import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import store from './store'
import mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"
 
mapboxgl.accessToken = 'pk.eyJ1IjoiZ2lvdmFubnlnYXJ6b24iLCJhIjoiY2txc3hlcXNmMDFhdTJ3bXRjZnAyZjJjciJ9.ekWHrI0YvRzPkcoxVxeuAw';

if(!navigator.geolocation){
    alert('Tu navegador no soporta el geolocator')
    throw new Error('Tu navegador no soporta el geolocator')
}

createApp(App).use(store).use(router).mount('#app')
