import axios from 'axios';


const directionsApi = axios.create({
    baseURL: 'https://api.mapbox.com/directions/v5/mapbox/driving',
    params: {
        alternatives: false,
        geometries: 'geojson',
        overview: 'simplified',
        steps: false,
        access_token: 'pk.eyJ1IjoiZ2lvdmFubnlnYXJ6b24iLCJhIjoiY2txc3hlcXNmMDFhdTJ3bXRjZnAyZjJjciJ9.ekWHrI0YvRzPkcoxVxeuAw'
    }
});


export default directionsApi;

