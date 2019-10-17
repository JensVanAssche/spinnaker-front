import Network from 'utils/network';

const api = {};

api.getResults = type => Network.get('api/results/' + type);

api.updatePdfResult = data => Network.uploadPdf('api/results/pdf/' + data.id, {
  title: data.title,
  pdfData: data.pdfData,
  pdfName: data.pdfName,
});

api.updateTournamentResult = data => Network.put('api/results/tournament/' + data.id, {
  title: data.title,
  date: data.date,
});

api.updateScoreResult = data => Network.put('api/results/score/' + data.id, {
  team1: data.team1,
  team1Score: data.team1Score,
  team2: data.team2,
  team2Score: data.team2Score
});

api.addPdfResult = data => Network.uploadPdf('api/results/pdf', {
  type: data.type,
  title: data.title,
  pdfData: data.pdfData,
  pdfName: data.pdfName,
});

api.addTournamentResult = data => Network.post('api/results/tournament', {
  type: data.type,
  title: data.title,
  date: data.date,
});

api.addScoreResult = data => Network.post('api/results/score', {
  tournamentId: data.tournamentId,
  team1: data.team1,
  team1Score: data.team1Score,
  team2: data.team2,
  team2Score: data.team2Score
});

api.deletePdfResult = id => Network.delete('api/results/pdf/' + id).then(() => ({ id }));

api.deleteTournamentResult = id => Network.delete('api/results/tournament/' + id).then(() => ({ id }));

api.deleteScoreResult = id => Network.delete('api/results/score/' + id).then(() => ({ id }));

export default api;
