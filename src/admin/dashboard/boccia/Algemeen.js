import React from 'react';
import { connect } from 'react-redux';
import { selectData } from "app/selectors";
import { Tab, Button, Icon } from 'semantic-ui-react';

function Algemeen({ openTextareaModal, openFileModal, data }) {
  return <Tab.Pane className="no-border">
    <h1>Algemeen</h1>
    <div className="dashboard-item">
      <h2>Boccia Foto</h2>
      <div className="dashboard-flex">
        <img src={process.env.REACT_APP_API_HOST + data.bocciaImg} alt="eumm" />
        <Button icon className="small-button" onClick={() => openFileModal('Boccia Foto', 'content/img/bocciaImg')} >
          <Icon name="edit" />
        </Button>
      </div>
    </div>
    <div className="dashboard-item">
      <h2>Boccia Tekst</h2>
      <div className="dashboard-flex">
        <p dangerouslySetInnerHTML={{__html: data.bocciaOver.substring(0,255)+"..."}} />
        <Button icon className="small-button" onClick={() => openTextareaModal('Boccia Tekst', 'content/data/bocciaOver', data.bocciaOver)} >
          <Icon name="edit" />
        </Button>
      </div>
    </div>
  </Tab.Pane>;
}

const mapStateToProps = state => ({
  data: selectData(state),
});

export default connect(
  mapStateToProps,
  null,
)(Algemeen);
