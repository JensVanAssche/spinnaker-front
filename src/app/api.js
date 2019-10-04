import Network from 'utils/network';

const api = {};

api.getAll = () => Network.get('api/content');

export default api;
