import Network from 'utils/network';

const api = {};

api.getAlbums = () => Network.get('api/photos/albums');

api.getPhotos = id => Network.get('api/photos/album/' + id);

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
