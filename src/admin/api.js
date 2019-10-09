import Network from 'utils/network';

const api = {};

api.login = password =>
  Network.post('api/auth/login', {
    password,
  });

api.logout = () => Network.post('api/auth/logout');

api.me = () => Network.get('api/auth/me');

export default api;
