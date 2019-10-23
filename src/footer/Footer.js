import React from 'react';
import { connect } from 'react-redux';
import { selectData } from 'redux/content/selectors';
import { getFooter } from 'redux/links/actions';
import { selectFooter } from 'redux/links/selectors';
import Wave from 'assets/images/wave_darkblue.png';
import './footer.scss';

class Footer extends React.Component {
  componentDidMount() {
    this.props.getFooter();
  }
  
  render() {
    const { content, links } = this.props;

    if (!links) return null;

    return (
      <footer>
        <img src={Wave} alt="wave" />
        <div className="footer-content">
          <div className="ui container logos">
            <div>
              {links.steun.length > 0 && (<h1>Met steun van</h1>)}
              {links.steun.map(e => (
                <a key={e.url} href={e.url} target="_blank" rel="noopener noreferrer">
                  <img key={e} src={process.env.REACT_APP_API_HOST + e.image} alt="logo" />
                </a>
              ))}
            </div>
            <div>
              {links.aangesloten.length > 0 && (<h1>Aangesloten bij</h1>)}
              {links.aangesloten.map(e => (
                <a key={e.url} href={e.url} target="_blank" rel="noopener noreferrer">
                  <img key={e} src={process.env.REACT_APP_API_HOST + e.image} alt="logo" />
                </a>
              ))}
            </div>
            <div>
            {links.onderdeel.length > 0 && (<h1>Onderdeel van</h1>)}
              {links.onderdeel.map(e => (
                <a key={e.url} href={e.url} target="_blank" rel="noopener noreferrer">
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

const mapDispatchToProps = {
  getFooter,
};

const mapStateToProps = state => ({
  content: selectData(state),
  links: selectFooter(state)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Footer);
