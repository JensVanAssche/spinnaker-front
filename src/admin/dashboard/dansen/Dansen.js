import React from 'react';
import { connect } from 'react-redux';
import { selectData } from "app/selectors";
import { Tab, Button, Icon } from 'semantic-ui-react';

function Dansen({ openTextareaModal, openFileModal, data }) {
  return <Tab.Pane>
    <h1>Dansen</h1>
    <div className="dashboard-item">
      <h2>Dansen Foto</h2>
      <div className="dashboard-flex">
        <img src={process.env.REACT_APP_API_HOST + data.dansenImg} alt="eumm" />
        <Button icon className="small-button" onClick={() => openFileModal('Dansen Foto')} >
          <Icon name="edit" />
        </Button>
      </div>
    </div>
    <div className="dashboard-item">
      <h2>Dansen Tekst</h2>
      <div className="dashboard-flex">
        <p dangerouslySetInnerHTML={{__html: data.dansenOver.substring(0,255)+"..."}} />
        <Button icon className="small-button" onClick={() => openTextareaModal('Dansen Tekst', data.dansenOver)} >
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
)(Dansen);
