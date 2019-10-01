import React from 'react';
import { Link } from 'react-router-dom';
import Photo from 'assets/images/header.jpg';
import './article.scss';

class Artikel extends React.Component {
  state = { id: '123456789', title: 'Jordy en Julie op European Regional Open in Nymburk', date: '27.09.2019', body: `<p>Spinnakerspeler Jordy Van Den Branden en zijn nationaal teammaatje Julie Lamberechts hebben afgelopen week met de hulp van hun assistenen Anais en Karen en onder leiding van coach Wesley het mooie weer gemaakt in Nymburk op de Regional Open aldaar.</p><p>Ze hebben het er niet slecht vanaf gebracht. Het was hun eerste en enige BISFED-rankingtornooi dit jaar en dus een serieuze testcase. Wat zijn ze waard? Hoe sterk is de tegenstand? In de individuele competitie kwamen ze samen uit in een poule van 5. De spelers waren allemaal wat aan elkaar gewaagd en het kon dus alle kanten uit met deze poule. Die werd uiteindelijk gewonnen door de Tjech Adam Peska die 1 wedstrijd verloor, van Julie. Julie, Jordy en de Spanjaard Waffid haalden 2 overwinningen maar in de onderlinge duels had Jordy wel het beste resultaat. De Nederlander Thomas Mirck won 1 wedstrijd (tegen Jordy). Jordy overleefde dus zijn poule in moest in de kwartfinale aantreden tegen Europees en Olympisch kampioen Polychronidis (uit Griekenland). Jordy won knap zijn ends (3 punten zelfs) maar de Griekse kampioen is ijzersterk als het zijn beurt is. Na 3 ends stond het 3-3 en in het laatste end maakte hij vlot nog 3 punten. Jordy sneuvelde dus in deze kwartfinale. Maar het was voor hem de eerste keer dat hij zover geraakte.</p><p>In de paircompetitie moest het duo twee wedstrijden spelen. Tegen Griekenland maakten ze niet echt een kans. Tegen Spanje was het een dubbeltje op zijn kant, wat deze keer niet in het Belgische voordeel viel. Tevreden mogen ze huiswaarts terugkeren.</p>` }

  render() {
    return (
      <div className="news-article ui container content">
        <Link to="/nieuws">Terug naar nieuws</Link>
        <h2>{this.state.title}</h2>
        <span className="date">{this.state.date}</span>
        <img src={Photo} alt="article" />
        <div dangerouslySetInnerHTML={{__html: this.state.body}} />
      </div>
    );
  }
  
}

export default Artikel;
