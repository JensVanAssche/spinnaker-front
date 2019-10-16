import Network from 'utils/network';

const api = {};

api.getPublications = () => Network.get('api/publications/');

export default api;
