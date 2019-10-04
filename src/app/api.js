import Network from 'utils/network';

const api = {};

api.getAll = () => Network.get('content');

export default api;
