import React from "react";
import { connect } from "react-redux";
import { selectData } from "redux/content/selectors";
import { Tab, Button, Icon } from "semantic-ui-react";

function Dansen({ openTextareaModal, openFileModal, data }) {
  return (
    <Tab.Pane>
      <h1>Dansen</h1>
      <div className="dashboard-item">
        <h2>Dansen Foto</h2>
        <div className="dashboard-flex">
          <img
            src={process.env.REACT_APP_API_HOST + "small_" + data.dansenImg}
            alt="dansen foto"
          />
          <Button
            icon
            className="small-button"
            onClick={() =>
              openFileModal("Dansen Foto", "content/data/dansenImg")
            }
          >
            <Icon name="edit" />
          </Button>
        </div>
      </div>
      <div className="dashboard-item">
        <h2>Dansen Tekst</h2>
        <div className="dashboard-flex">
          <p
            dangerouslySetInnerHTML={{
              __html: data.dansenOver.substring(0, 255) + "..."
            }}
          />
          <Button
            icon
            className="small-button"
            onClick={() =>
              openTextareaModal(
                "Dansen Tekst",
                "content/data/dansenOver",
                data.dansenOver
              )
            }
          >
            <Icon name="edit" />
          </Button>
        </div>
      </div>
    </Tab.Pane>
  );
}

const mapStateToProps = state => ({
  data: selectData(state)
});

export default connect(mapStateToProps, null)(Dansen);
