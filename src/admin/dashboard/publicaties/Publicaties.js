import React from 'react';
import { Tab, Button, Icon } from 'semantic-ui-react';
import Network from 'utils/network';

class Publicaties extends React.Component {
  state = {
    publicaties: null,
  }

  componentDidMount() {
    Network.get('api/publications').then((res) => 
      this.setState({ publicaties: res })
    );
  }

  render() {
    const { publicaties } = this.state;
    const { openPdfModal } = this.props;

    if (!publicaties) return null;

    return <Tab.Pane>
      <h1>Publicaties</h1>
      <div className="dashboard-item">
        <div className="dashboard-flex">
          <h2>Spinnaker Kranten</h2>
          <Button icon primary className="small-button" onClick={() => openPdfModal('Krant toevoegen')} >
            <span>Krant</span>
            <Icon name="add" />
          </Button>
        </div>
        {!publicaties.kranten.length && ( <p>Geen kranten</p> )}
        {publicaties.kranten.map(krant => (
          <div className="dashboard-flex" key={krant.id}>
            <div>
              <p>{krant.title}</p>
              <a href={process.env.REACT_APP_API_HOST + krant.pdf} target="_blank" rel="noopener noreferrer">{krant.pdf}</a>
            </div>
            <Button icon className="small-button" onClick={() => openPdfModal('Krant aanpassen', krant)}>
              <Icon name="edit" />
            </Button>
          </div>
        ))}
      </div>
      <div className="dashboard-item">
        <div className="dashboard-flex">
          <h2>Folders</h2>
          <Button icon primary className="small-button" onClick={() => openPdfModal('Folder toevoegen')} >
            <span>Folder</span>
            <Icon name="add" />
          </Button>
        </div>
        {!publicaties.folders.length && ( <p>Geen folders</p> )}
        {publicaties.folders.map(folder => (
          <div className="dashboard-flex" key={folder.id}>
            <div>
              <p>{folder.title}</p>
              <a href={process.env.REACT_APP_API_HOST + folder.pdf} target="_blank" rel="noopener noreferrer">{folder.pdf}</a>
            </div>
            <Button icon className="small-button" onClick={() => openPdfModal('Folder aanpassen', folder)}>
              <Icon name="edit" />
            </Button>
          </div>
        ))}
      </div>
    </Tab.Pane>;
  }
}

export default Publicaties;
