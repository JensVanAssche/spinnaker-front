import React from 'react';
import Network from 'utils/network';
import './publicaties.scss';

class Publicaties extends React.Component {
  state = { loading: true, data: null };

  componentDidMount() {
    Network.get('api/publications/').then((res) =>  
      this.setState({ loading: false, data: res })
    );
  }

  render() {
    const { loading, data } = this.state;

    if (loading) return null;
    
    return (
      <div className="publicaties content ui container">
        <h2>Publicaties</h2>
        <h3>Spinnakerkrant</h3>
        {!data.kranten.length && (
          <p>Geen kranten gevonden</p>
        )}
        {data.kranten.map(krant => (
          <a href={process.env.REACT_APP_API_HOST + krant.pdf} target="_blank" rel="noopener noreferrer" key={krant.id}>{krant.title}</a>
        ))}
        <h3>Folders</h3>
        {!data.kranten.length && (
          <p>Geen folders gevonden</p>
        )}
        {data.folders.map(folder => (
          <a href={process.env.REACT_APP_API_HOST + folder.pdf} target="_blank" rel="noopener noreferrer" key={folder.id}>{folder.title}</a>
        ))}
      </div>
    );
  }
}

export default Publicaties;
