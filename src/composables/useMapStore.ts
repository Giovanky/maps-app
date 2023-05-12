import { computed } from "vue"
import { useStore } from 'vuex'
import { StateInterface } from "../store"
import Mapboxgl from "mapbox-gl"

export const useMapStore = () => {
    const store = useStore<StateInterface>()

    return {
        map: computed(() => store.map.map),
        setMap: (map: Mapboxgl.Map) => store.commit('map/setMap', map),
    }
}