import { ActionTree } from 'vuex';
import { PlacesState } from './state';
import { StateInterface } from '../index';

const actions: ActionTree<PlacesState, StateInterface> = {
    getInitialLocation({commit}, payload) {
        navigator.geolocation
            .getCurrentPosition(({coords}) => commit('setLngLat', coords),
            (err) => {
                console.error(err)
                throw new Error('No Geolocation')
            })
    }
}

export default actions;