import Network from 'utils/network';

const api = {};

api.getCalendar = type => Network.get('api/calendar/' + type);

api.updateCalendar = data => Network.put('api/calendar/' + data.id, {
  type: data.type,
  day: data.day,
  month: data.month,
  year: data.year,
  title: data.title,
  location: data.location
});

api.addCalendar = data => Network.post('api/calendar/', {
  type: data.type,
  day: data.day,
  month: data.month,
  year: data.year,
  title: data.title,
  location: data.location
});

api.deleteCalendar = id => Network.delete('api/calendar/' + id).then(() => ({ id }));

export default api;
