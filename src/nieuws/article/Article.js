import React from 'react';
import { connect } from 'react-redux';
import { selectArticle } from "redux/news/selectors";
import { getArticle } from "redux/news/actions";
import { Link } from 'react-router-dom';
import './article.scss';

class Artikel extends React.Component {
  componentDidMount() {
    this.props.getArticle(this.props.match.params.id);
  }

  render() {
    const { data } = this.props;

    if (!data) return null;
    
    return (
      <div className="news-article ui container content">
        <Link to="/nieuws">Terug naar nieuws</Link>
        {data.id && (
          <>
            <h2>{data.title}</h2>
            <span className="date">{data.date}</span>
            <img src={process.env.REACT_APP_API_HOST + data.image} alt="article" />
            <div dangerouslySetInnerHTML={{__html: data.body}} />
          </>
        )}
      </div>
    );
  }
  
}

const mapDispatchToProps = {
  getArticle,
};

const mapStateToProps = state => ({
  data: selectArticle(state),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Artikel);
