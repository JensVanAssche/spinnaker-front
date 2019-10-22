import Network from 'utils/network';

const api = {};

api.getPhotos = () => Network.get('api/photos/all');

api.updateAlbum = data => Network.put('api/photos/albums/' + data.id, {
  title: data.title,
});

api.addAlbum = data => Network.post('api/photos/albums', {
  title: data.title,
});

api.addPhoto = data => Network.post('api/photos/photos', {
  albumId: data.albumId,
  image: data.image,
});

api.deleteAlbum = id => Network.delete('api/photos/albums/' + id);

api.deletePhoto = id => Network.delete('api/photos/photos/' + id);

export default api;
