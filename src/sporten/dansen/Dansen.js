import React from "react";
import { connect } from "react-redux";
import { selectData } from "redux/content/selectors";
import "../sport.scss";

class Dansen extends React.Component {
  render() {
    const { content } = this.props;

    return (
      <div className="content ui container">
        <div className="sport-header">
          <div
            style={{
              backgroundImage: `url(${process.env.REACT_APP_API_HOST +
                content.dansenImg})`
            }}
          />
          <div>
            <h1>Dansen</h1>
          </div>
        </div>
        <div dangerouslySetInnerHTML={{ __html: content.dansenOver }} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  content: selectData(state)
});

export default connect(mapStateToProps, null)(Dansen);
