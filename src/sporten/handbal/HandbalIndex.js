import React from "react";
import { connect } from "react-redux";
import { selectData } from "redux/content/selectors";

class Handbal extends React.Component {
  render() {
    const { content } = this.props;

    var img;

    if (window.innerWidth >= 600) {
      img = "large_" + content.handbalImg;
    }

    if (window.innerWidth < 600) {
      img = "small_" + content.handbalImg;
    }

    return (
      <div className="content">
        <div className="sport-header">
          <div
            style={{
              backgroundImage: `url(${process.env.REACT_APP_API_HOST + img})`
            }}
          />
          {window.innerWidth <= 460 && (
            <div>
              <h1>Rolstoel handbal</h1>
            </div>
          )}
          {window.innerWidth > 460 && (
            <div>
              <h1>Rolstoelhandbal</h1>
            </div>
          )}
        </div>
        <div dangerouslySetInnerHTML={{ __html: content.handbalOver }} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  content: selectData(state)
});

export default connect(mapStateToProps, null)(Handbal);
