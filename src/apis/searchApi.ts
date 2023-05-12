import axios from 'axios';

const searchApi = axios.create({
    baseURL: 'https://api.mapbox.com/geocoding/v5/mapbox.places',
    params: {
        limit: 3,
        language: 'es',
        access_token: 'pk.eyJ1IjoiZ2lvdmFubnlnYXJ6b24iLCJhIjoiY2txc3hlcXNmMDFhdTJ3bXRjZnAyZjJjciJ9.ekWHrI0YvRzPkcoxVxeuAw'
    }
});

export default searchApi;

