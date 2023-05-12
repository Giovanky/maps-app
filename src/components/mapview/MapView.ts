import mapboxgl from 'mapbox-gl'
import { defineComponent, onMounted, ref, watch } from 'vue'
import { useMapStore, usePlacesStore } from '../../composables'

export default defineComponent({
    name: 'MapView',
    setup() {
        const mapElement= ref<HTMLDivElement>()
        const { userLocation, isUserlocationReady } = usePlacesStore()
        const { setMap } = useMapStore()
        
        const initMap = async () => {
            if(!mapElement.value) return;
            if(!userLocation.value) return
            await Promise.resolve()

            const map = new mapboxgl.Map({
                container: mapElement.value, // container ID
                style: 'mapbox://styles/mapbox/streets-v12', // style URL
                center: userLocation.value, // starting position [lng, lat]
                zoom: 15, // starting zoom
            })

            const locationPopup = new mapboxgl.Popup()
                .setLngLat(userLocation.value)
                .setHTML(`<g4>Aqui estas</h4>`)

            new mapboxgl.Marker()
                .setLngLat(userLocation.value)
                .setPopup(locationPopup)
                .addTo(map)
            setMap(map)
        }
        
        onMounted(() => {
            if(isUserlocationReady.value) return initMap()
            console.log('No se ha cargado la localizacion aun')
        })

        watch(isUserlocationReady, () => {
            if(isUserlocationReady.value) initMap()
        })

        return {
            isUserlocationReady,
            userLocation,
            mapElement
        }
    }
})