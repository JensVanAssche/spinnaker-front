import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { selectData } from "redux/content/selectors";
import "./sport.scss";

class Sport extends React.Component {
  render() {
    const { name, content } = this.props;

    return (
      <Link className="sport-thumbnail" to={"/" + name.split(" ").reverse()[0]}>
        <img
          src={
            process.env.REACT_APP_API_HOST +
            "small_" +
            content[name.split(" ").reverse()[0] + "Img"]
          }
          alt="sport categorie thumbnail"
        />
        <span>{name}</span>
      </Link>
    );
  }
}

const mapStateToProps = state => ({
  content: selectData(state)
});

export default connect(mapStateToProps, null)(Sport);
