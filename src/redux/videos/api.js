import Network from 'utils/network';

const api = {};

api.getVideos = () => Network.get('api/videos');

api.updateVideo = data => Network.put('api/videos/' + data.id, {
  title: data.title,
  url: data.url
});

api.addVideo = data => Network.post('api/videos', {
  title: data.title,
  url: data.url
});

api.deleteVideo = id => Network.delete('api/videos/' + id).then(() => ({ id }));

export default api;
