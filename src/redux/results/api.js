import Network from 'utils/network';

const api = {};

api.getResults = type => Network.get('api/results/' + type);

export default api;
