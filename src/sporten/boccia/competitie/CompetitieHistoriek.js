import React from 'react';

class CompetitieStand extends React.Component {
  state = {
    title: ['Parantee Competitie Historiek', 'Scholencompetitie Historiek', 'Competitie Nederland Historiek'],
    content: [
      `<h3>2010 - Vlaams Kampioenschap Merksem</h3>
      <p>- Nicky Fontaine (BC1): 5e plaats</p>
      <p>- Philippe Goyvaerts (BC2): 16e plaats</p>
      <p>- Achille Elsmoortel (BC3): 15e plaats</p>
      <h3>2010 - Belgisch Kampioenschap Waregem</h3>
      <p>- Nicky Fontaine (BC1): 6e plaats</p>
      <p>- Philippe Goyvaerts (BC2): 10e plaats</p>
      <p>- Achille Elsmoortel (BC3): 11e plaats</p>`,
      `<h3>2010 - Vlaams Kampioenschap Merksem</h3>
      <p>- Nicky Fontaine (BC1): 5e plaats</p>
      <p>- Philippe Goyvaerts (BC2): 16e plaats</p>
      <p>- Achille Elsmoortel (BC3): 15e plaats</p>
      <h3>2010 - Belgisch Kampioenschap Waregem</h3>
      <p>- Nicky Fontaine (BC1): 6e plaats</p>
      <p>- Philippe Goyvaerts (BC2): 10e plaats</p>
      <p>- Achille Elsmoortel (BC3): 11e plaats</p>`,
      `<h3>2010 - Vlaams Kampioenschap Merksem</h3>
      <p>- Nicky Fontaine (BC1): 5e plaats</p>
      <p>- Philippe Goyvaerts (BC2): 16e plaats</p>
      <p>- Achille Elsmoortel (BC3): 15e plaats</p>
      <h3>2010 - Belgisch Kampioenschap Waregem</h3>
      <p>- Nicky Fontaine (BC1): 6e plaats</p>
      <p>- Philippe Goyvaerts (BC2): 10e plaats</p>
      <p>- Achille Elsmoortel (BC3): 11e plaats</p>`,
      `<h3>2010 - Vlaams Kampioenschap Merksem</h3>
      <p>- Nicky Fontaine (BC1): 5e plaats</p>
      <p>- Philippe Goyvaerts (BC2): 16e plaats</p>
      <p>- Achille Elsmoortel (BC3): 15e plaats</p>
      <h3>2010 - Belgisch Kampioenschap Waregem</h3>
      <p>- Nicky Fontaine (BC1): 6e plaats</p>
      <p>- Philippe Goyvaerts (BC2): 10e plaats</p>
      <p>- Achille Elsmoortel (BC3): 11e plaats</p>`,
    ]
  }

  render() {
    const { league } = this.props;
    return (
      <div>
        <h2>{this.state.title[league]}</h2>
        <div dangerouslySetInnerHTML={{__html: this.state.content[league]}} />
      </div>
    );
  }
}

export default CompetitieStand;
