import Network from 'utils/network';

const api = {};

api.getAll = () => Network.get('api/content/data');

api.updateContent = (apiUrl, data) => Network.put('api/' + apiUrl, data);

api.updateImage = (apiUrl, data) => Network.uploadImage('api/' + apiUrl, data);

api.updatePdf = (apiUrl, data) => Network.uploadPdf('api/' + apiUrl, data);

export default api;
