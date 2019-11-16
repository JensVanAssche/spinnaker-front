import React from "react";
import { connect } from "react-redux";
import { selectData } from "redux/content/selectors";

class Zwemmen extends React.Component {
  render() {
    const { content } = this.props;

    var img;

    if (window.innerWidth >= 600) {
      img = "large_" + content.zwemmenImg;
    }

    if (window.innerWidth < 600) {
      img = "small_" + content.zwemmenImg;
    }

    return (
      <div className="content">
        <div className="sport-header">
          <div
            style={{
              backgroundImage: `url(${process.env.REACT_APP_API_HOST + img})`
            }}
          />
          <div>
            <h1>Zwemmen</h1>
          </div>
        </div>
        <div dangerouslySetInnerHTML={{ __html: content.zwemmenOver }} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  content: selectData(state)
});

export default connect(mapStateToProps, null)(Zwemmen);
