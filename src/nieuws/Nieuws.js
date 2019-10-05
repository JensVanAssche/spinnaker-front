import React from 'react';
import Network from 'utils/network';
import Entry from './nieuwsentry/Entry';
import './nieuws.scss';

class Nieuws extends React.Component {
  state = { loading: true, news: null };

  componentDidMount() {
    Network.get('api/news/all/' + 0).then((res) =>
      this.setState({ loading: false, news: res })
    );
  }

  render() {
    const { loading, news } = this.state;

    if (loading) return null;

    return (
      <div className="nieuws content ui container">
        <h2>Nieuws</h2>
        {news.map(entry => (
          <Entry id={entry.id} title={entry.title} date={entry.date} body={entry.body} key={entry.id} />
        ))}
      </div>
    );
  }
}

export default Nieuws;
