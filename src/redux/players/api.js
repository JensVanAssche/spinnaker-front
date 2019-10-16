import Network from 'utils/network';

const api = {};

api.getPlayers = type => Network.get('api/players/' + type);

export default api;
