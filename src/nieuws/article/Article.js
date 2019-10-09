import React from 'react';
import Network from 'utils/network';
import { Link } from 'react-router-dom';
import './article.scss';

class Artikel extends React.Component {
  state = {
    loading: true,
    title: '',
    body: '',
    image: '',
    date: ''
  }

  componentDidMount() {
    Network.get('api/news/article/' + this.props.match.params.id).then((res) => {
      this.setState({
        loading: false,
        title: res.title,
        body: res.body,
        image: res.image,
        date: res.date
      })
    });
  }

  render() {
    const { loading, title, body, image, date } = this.state;
    
    return (
      <div className="news-article ui container content">
        <Link to="/nieuws">Terug naar nieuws</Link>
        {!loading && (
          <>
            <h2>{title}</h2>
            <span className="date">{date}</span>
            <img src={process.env.REACT_APP_API_HOST + image} alt="article" />
            <div dangerouslySetInnerHTML={{__html: body}} />
          </>
        )}
      </div>
    );
  }
  
}

export default Artikel;
