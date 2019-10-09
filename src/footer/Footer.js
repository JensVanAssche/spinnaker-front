import React from 'react';
import { connect } from 'react-redux';
import { selectData } from 'app/selectors';
import Network from 'utils/network';
import Wave from 'assets/images/wave_darkblue.png';
import './footer.scss';

class Footer extends React.Component {
  state = {
    data: null,
    loading: true,
  }

  componentDidMount() {
    Network.get('api/links/footer').then((res) =>
      this.setState({ loading: false, data: res })
    );
  }
  
  render() {
    const { content } = this.props;
    const { loading, data } = this.state;

    if (!content || loading) return null;

    return (
      <footer>
        <img src={Wave} alt="wave" />
        <div className="footer-content">
          <div className="ui container logos">
            <div>
              <h1>Met steun van</h1>
              {data.steun.map(e => (
                <a href={e.url} target="_blank" rel="noopener noreferrer">
                  <img key={e} src={process.env.REACT_APP_API_HOST + e.image} alt="logo" />
                </a>
              ))}
            </div>
            <div>
              <h1>Aangesloten bij</h1>
              {data.aangesloten.map(e => (
                <a href={e.url} target="_blank" rel="noopener noreferrer">
                  <img key={e} src={process.env.REACT_APP_API_HOST + e.image} alt="logo" />
                </a>
              ))}
            </div>
            <div>
              <h1>Onderdeel van</h1>
              {data.onderdeel.map(e => (
                <a href={e.url} target="_blank" rel="noopener noreferrer">
                  <img key={e} src={process.env.REACT_APP_API_HOST + e.image} alt="logo" />
                </a>
              ))}
            </div>
          </div>
          <div className="ui container contact">
            <div>
              <h1>Contact</h1>
              <div dangerouslySetInnerHTML={{__html: content.footerContact}} />
            </div>
            <div>
              <h1>Locatie</h1>
              <div dangerouslySetInnerHTML={{__html: content.footerLocatie}} />
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

const mapStateToProps = state => ({
  content: selectData(state),
});

export default connect(
  mapStateToProps,
  null,
)(Footer);
