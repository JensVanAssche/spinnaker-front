import React from 'react';
import { connect } from 'react-redux';
import { selectData } from "app/selectors";
import { Tab, Button, Icon } from 'semantic-ui-react';

function Algemeen({ openTextareaModal, openFileModal, data }) {
  return <Tab.Pane>
    <h1>Algemeen</h1>
    <div className="dashboard-item">
      <h2>Logo</h2>
      <div className="dashboard-flex">
        <img src={process.env.REACT_APP_API_HOST + data.logoImg} alt="eumm" />
        <Button icon className="small-button" onClick={() => openFileModal('Logo')} >
          <Icon name="edit" />
        </Button>
      </div>
    </div>
    <div className="dashboard-item">
      <h2>Header Foto</h2>
      <div className="dashboard-flex">
        <img src={process.env.REACT_APP_API_HOST + data.headerImg} alt="eumm" />
        <Button icon className="small-button" onClick={() => openFileModal('Header Foto')} >
          <Icon name="edit" />
        </Button>
      </div>
    </div>
    <div className="dashboard-item">
      <h2>Footer: Contact</h2>
      <div className="dashboard-flex">
        <p dangerouslySetInnerHTML={{__html: data.footerContact}} />
        <Button icon className="small-button" onClick={() => openTextareaModal('Footer: Contact', data.footerContact)} >
          <Icon name="edit" />
        </Button>
      </div>
    </div>
    <div className="dashboard-item">
      <h2>Footer: Locatie</h2>
      <div className="dashboard-flex">
        <p dangerouslySetInnerHTML={{__html: data.footerLocatie}} />
        <Button icon className="small-button" onClick={() => openTextareaModal('Footer: Locatie', data.footerLocatie)} >
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
