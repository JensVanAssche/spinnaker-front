import Network from 'utils/network';

const api = {};

api.getVideos = () => Network.get('api/videos/');

export default api;
