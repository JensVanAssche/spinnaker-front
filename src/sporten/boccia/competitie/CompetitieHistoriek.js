import React from "react";
import { connect } from "react-redux";
import { selectData } from "redux/content/selectors";

class CompetitieHistoriek extends React.Component {
  state = {
    title: [
      "GsportVlaanderen Competitie Historiek",
      "Scholencompetitie Historiek",
      "Competitie Nederland Historiek"
    ],
    content: ["paranteeHistory", "scholenHistory", "nederlandHistory"]
  };

  render() {
    const { league, content } = this.props;

    return (
      <div className="historiek">
        <h2>{this.state.title[league]}</h2>
        <div
          dangerouslySetInnerHTML={{
            __html: content[this.state.content[league]]
          }}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  content: selectData(state)
});

export default connect(mapStateToProps, null)(CompetitieHistoriek);
