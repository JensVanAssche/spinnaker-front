import React from 'react';
import { connect } from 'react-redux';
import { selectPublications } from "redux/publications/selectors";
import { getPublications } from "redux/publications/actions";
import { Tab, Button, Icon, Dimmer, Loader } from 'semantic-ui-react';

class Publicaties extends React.Component {
  state = {
    loading: true,
  }

  async componentDidMount() {
    await this.props.getPublications();
    this.setState({ loading: false })
  }

  render() {
    const { openPdfModal, publicaties } = this.props;

    if (this.state.loading) return (
      <Dimmer active inverted>
        <Loader inverted />
      </Dimmer>);

    if (!publicaties) return (
      <Dimmer active inverted>
        <Loader inverted />
      </Dimmer>);

    return <Tab.Pane>
      <h1>Publicaties</h1>
      <div className="dashboard-item">
        <div className="dashboard-flex">
          <h2>Spinnaker Kranten</h2>
          <Button icon primary className="small-button" onClick={() => openPdfModal('Krant toevoegen', "publications", null, "krant")} >
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
            <Button icon className="small-button" onClick={() => openPdfModal('Krant aanpassen', "publications", krant, null)}>
              <Icon name="edit" />
            </Button>
          </div>
        ))}
      </div>
      <div className="dashboard-item">
        <div className="dashboard-flex">
          <h2>Folders</h2>
          <Button icon primary className="small-button" onClick={() => openPdfModal('Folder toevoegen', "publications", null, "folder")} >
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
            <Button icon className="small-button" onClick={() => openPdfModal('Folder aanpassen', "publications", folder, null)}>
              <Icon name="edit" />
            </Button>
          </div>
        ))}
      </div>
    </Tab.Pane>;
  }
}

const mapDispatchToProps = {
  getPublications,
};

const mapStateToProps = state => ({
  publicaties: selectPublications(state),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Publicaties);
