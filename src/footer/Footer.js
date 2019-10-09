import React from 'react';
import { connect } from 'react-redux';
import { selectData } from 'app/selectors';
import Wave from 'assets/images/wave_darkblue.png';
import './footer.scss';

class Footer extends React.Component {
  render() {
    const { content } = this.props;

    if (!content) return null;

    return (
      <footer>
        <img src={Wave} alt="wave" />
        <div className="footer-content">
          <div className="ui container logos">
            <div>
              <h1>Met steun van</h1>
              {content.footerImgSteun.map(e => <img key={e} src={process.env.REACT_APP_API_HOST + e} alt="logo" />)}
            </div>
            <div>
              <h1>Aangesloten bij</h1>
              {content.footerImgAangesloten.map(e => <img key={e} src={process.env.REACT_APP_API_HOST + e} alt="logo" />)}
            </div>
            <div>
              <h1>Onderdeel van</h1>
              {content.footerImgOnderdeel.map(e => <img key={e} src={process.env.REACT_APP_API_HOST + e} alt="logo" />)}
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
