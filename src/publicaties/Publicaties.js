import React from 'react';
import './publicaties.scss';

class Publicaties extends React.Component {
  state = {
    kranten: [
      'Spinnakerkrant 2014-2015',
      'Spinnakerkrant 2015-2016',
      'Spinnakerkrant 2016-2017',
      'Spinnakerkrant 2017-2018',
      'Spinnakerkrant 2018-2019'
    ],
    folders: [
      'Spinnaker Boccia',
      'Spinnaker Powerchairhockey',
      'Spinnaker Algemeen',
    ]
  };

  render() {
    return (
      <div className="publicaties content ui container">
        <h2>Publicaties</h2>
        <h3>Spinnakerkrant</h3>
        {this.state.kranten.map(krant => (
          <a href={process.env.REACT_APP_API_HOST + "/example.pdf"} target="_blank" rel="noopener noreferrer" key={krant}>{krant}</a>
        ))}
        <h3>Folders</h3>
        {this.state.folders.map(folder => (
          <a href={process.env.REACT_APP_API_HOST + "/example.pdf"} target="_blank" rel="noopener noreferrer" key={folder}>{folder}</a>
        ))}
      </div>
    );
  }
}

export default Publicaties;
