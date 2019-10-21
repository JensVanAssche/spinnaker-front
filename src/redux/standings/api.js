import Network from 'utils/network';

const api = {};

api.getStandings = type => Network.get('api/standings/' + type);

api.updatePdfStanding = data => Network.uploadPdf('api/standings/pdf/' + data.id, {
  type: data.type,
  title: data.title,
  pdfData: data.pdfData,
  pdfName: data.pdfName,
});

api.updateTournamentStanding = data => Network.put('api/standings/tournament/' + data.id, {
  type: data.type,
  title: data.title,
  subtitle: data.subtitle,
});

api.updateScoreStanding = data => Network.put('api/standings/score/' + data.id, {
  tournamentId: data.tournamentId,
  name: data.name,
  points1: data.points1,
  points2: data.points2,
  points3: data.points3
});

api.addPdfStanding = data => Network.uploadPdf('api/standings/pdf', {
  type: data.type,
  title: data.title,
  pdfData: data.pdfData,
  pdfName: data.pdfName,
});

api.addTournamentStanding = data => Network.post('api/standings/tournament', {
  type: data.type,
  title: data.title,
  subtitle: data.subtitle,
});

api.addScoreStanding = data => Network.post('api/standings/score', {
  tournamentId: data.tournamentId,
  name: data.name,
  points1: data.points1,
  points2: data.points2,
  points3: data.points3
});

api.deletePdfStanding = id => Network.delete('api/standings/pdf/' + id).then(() => ({ id }));

api.deleteTournamentStanding = id => Network.delete('api/standings/tournament/' + id).then(() => ({ id }));

api.deleteScoreStanding = id => Network.delete('api/standings/score/' + id).then(() => ({ id }));

export default api;
