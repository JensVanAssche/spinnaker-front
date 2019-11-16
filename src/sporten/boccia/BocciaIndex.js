import React from "react";
import { connect } from "react-redux";
import { selectData } from "redux/content/selectors";

class BocciaIndex extends React.Component {
  render() {
    const { content } = this.props;

    var img;

    if (window.innerWidth >= 600) {
      img = "large_" + content.bocciaImg;
    }

    if (window.innerWidth < 600) {
      img = "small_" + content.bocciaImg;
    }

    return (
      <div className="content ui container">
        <div className="sport-header">
          <div
            style={{
              backgroundImage: `url(${process.env.REACT_APP_API_HOST + img})`
            }}
          />
          <div>
            <h1>Boccia</h1>
          </div>
        </div>
        <div dangerouslySetInnerHTML={{ __html: content.bocciaOver }} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  content: selectData(state)
});

export default connect(mapStateToProps, null)(BocciaIndex);
