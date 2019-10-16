import Network from 'utils/network';

const api = {};

api.getCalendar = type => Network.get('api/calendar/' + type);

export default api;
