import React from 'react';
import header from 'assets/images/header.jpg';

class Dansen extends React.Component {
  state = {
    content: `<h3>Doelgroep</h3>
    <p>Atleten met een motorische handicap. Officieel kan dit soms samen met een valide partner (niet bij Spinnaker vzw).</p>
    <h3>Over de sport</h3>
    <p>Rolstoeldansen kent een lage drempel. Dit betekent dat iedere rolstoelgebruiker, ongeacht de handicap, kan dansen. Deze sport wordt zowel in duo als in combi beoefend en dit zowel recreatief als competitief. Eventueel kan ook in groep gedanst worden.</p>
    <h3>Bij Spinnaker</h3>
    <p>Spinnaker vzw telt 7 dansgroepen. Elke groep bestaat uit 8 tot 12 dansers. De dansgroepen zijn gemengd: zowel rolstoelgebruikers als lopers maken deel uit van een dansgroep. Zo kunnen de lopers de rolstoelgebruikers helpen. De dansergroepen zijn ingedeeld volgens leeftijd en muzikale interesse. Samen met de monitoren zoeken ze gepaste muziek uit en werken ze haalbare choreografiëen uit. Deze oefenen ze wekelijks in. Ze laten regelmatig hun kunnen zien, zoals bv. bij schoolfeesten. Ook kinderen met een mentale handicap kunnen met de dansgroepen meedoen.</p>`,
  };

  render() {
    return (
      <div className="content ui container">
        <div className="sport-header">
          <div style={{'backgroundImage': `url(${header})`}} />
          <div><h1>Dansen</h1></div>
        </div>
        <div dangerouslySetInnerHTML={{__html: this.state.content}} />
      </div>
    );
  }
}

export default Dansen;
