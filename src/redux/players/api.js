import Network from 'utils/network';

const api = {};

api.getPlayers = type => Network.get('api/players/unordered/' + type);

api.updatePlayer = data => Network.put('api/players/' + data.id, {
  name: data.name,
  subtitle: data.subtitle,
  image: data.imageName
});

api.addPlayer = data => Network.post('api/players/', {
  type: data.type,
  name: data.name,
  subtitle: data.subtitle,
  image: data.imageName
});

api.deletePlayer = id => Network.delete('api/players/' + id).then(() => ({ id }));

export default api;
