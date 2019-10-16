import Network from 'utils/network';

const api = {};

api.getStandings = type => Network.get('api/standings/' + type);

export default api;
