import Network from 'utils/network';

const api = {};

api.getAll = offset => Network.get('api/photos/all/' + offset);

api.getAlbums = offset => Network.get('api/photos/albums/' + offset);

api.getPhotos = id => Network.get('api/photos/album/' + id);

api.updateAlbum = data => Network.put('api/photos/albums/' + data.id, {
  title: data.title,
});

api.addAlbum = data => Network.post('api/photos/albums', {
  title: data.title,
});

api.addPhotos = data => Network.post('api/photos/photos', {
  albumId: data.albumId,
  images: data.images,
});

api.deleteAlbum = id => Network.delete('api/photos/albums/' + id);

api.deletePhoto = id => Network.delete('api/photos/photos/' + id);

export default api;
