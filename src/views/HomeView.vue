<template>
    <MapView />
    <LocationBtn />
    <SearchBar />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { usePlacesStore } from '../composables'
import MapView from '../components/mapview/MapView.vue'
import SearchBar from '../components/searchbar/SearchBar.vue'
import LocationBtn from '../components/location-btn/LocationBtn.vue'

export default defineComponent({
    name: 'HomeView',
    components: {
        MapView,
        LocationBtn,
        SearchBar
    },
    setup() {
        usePlacesStore()
    }
})
</script>