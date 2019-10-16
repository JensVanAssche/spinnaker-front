import Network from 'utils/network';

const api = {};

api.getPhotos = () => Network.get('api/photos/all/');

export default api;
