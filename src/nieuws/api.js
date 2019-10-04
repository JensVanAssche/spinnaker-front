import Network from 'utils/network';

const api = {};

api.getAll = () => Network.get('api/news');

export default api;
