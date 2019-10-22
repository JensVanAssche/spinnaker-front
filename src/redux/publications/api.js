import Network from 'utils/network';

const api = {};

api.getPublications = () => Network.get('api/publications');

api.updatePublication = data => Network.uploadPdf('api/publications/' + data.id, {
  type: data.type,
  title: data.title,
  pdfData: data.pdfData,
  pdfName: data.pdfName,
});

api.addPublication = data => Network.uploadPdf('api/publications', {
  type: data.type,
  title: data.title,
  pdfData: data.pdfData,
  pdfName: data.pdfName,
});

api.deletePublication = id => Network.delete('api/publications/' + id);

export default api;
