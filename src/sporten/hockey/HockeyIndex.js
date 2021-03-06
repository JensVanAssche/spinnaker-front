import React from "react";
import { connect } from "react-redux";
import { selectData } from "redux/content/selectors";

class HockeyIndex extends React.Component {
  render() {
    const { content } = this.props;

    var img;

    if (window.innerWidth >= 600) {
      img = "large_" + content.hockeyImg;
    }

    if (window.innerWidth < 600) {
      img = "small_" + content.hockeyImg;
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
            <h1>Hockey</h1>
          </div>
        </div>
        <div className="content-flex">
          <div dangerouslySetInnerHTML={{ __html: content.hockeyOver }} />
          <img
            src={process.env.REACT_APP_API_HOST + content.wheelblazersImg}
            alt="wheelblazers logo"
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  content: selectData(state)
});

export default connect(mapStateToProps, null)(HockeyIndex);
