import { createStore } from 'vuex';

import placesModule from './places';
import mapModule from './map';
import { PlacesState } from './places/state';
import { MapState } from './map/state';


export interface StateInterface {
  places: PlacesState,
  map: MapState
}

export default createStore<StateInterface>({
  modules: {
    places: placesModule,
    map: mapModule
  }
})
