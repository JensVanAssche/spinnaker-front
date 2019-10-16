import Network from 'utils/network';

const api = {};

api.getNews = offset => Network.get('api/news/all/' + offset);

export default api;
