import Network from 'utils/network';

const api = {};

api.getNews = offset => Network.get('api/news/all/' + offset);

api.getLatest = () => Network.get('api/news/latest');

api.updateArticle = data => Network.put('api/news/' + data.id, {
  title: data.title,
  body: data.body,
  image: data.imageName,
});

api.addArticle = data => Network.post('api/news', {
  title: data.title,
  body: data.body,
  image: data.imageName,
});

api.deleteArticle = id => Network.delete('api/news/' + id).then(() => ({ id }));

export default api;
