import Network from 'utils/network';

const api = {};

api.getLinks = () => Network.get('api/links');

api.updateLink = (data) => Network.put('api/links/' + data.id, {
  url: data.url,
  image: data.imageName,
  footer: data.footer
});

api.addLink = (data) => Network.post('api/links/', {
  url: data.url,
  image: data.imageName,
  footer: data.footer
});

api.deleteLink = (id) => Network.delete('api/links/' + id).then(() => ({ id }));

export default api;
