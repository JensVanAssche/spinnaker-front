import React from 'react';
import header from 'assets/images/header.jpg';

class Zwemmen extends React.Component {
  state = {
    content: `<h3>Doelgroep</h3>
    <p>Atleten met een motorische handicap.</p>
    <h3>Over de sport</h3>
    <p>De zwemmers komen per handicap in verschillende klassen uit en dit in de traditionele stijlen. Bij zwemmers met motorische beperkingen zijn er slechts enkele, minimale aanpassingen aan de regels.</p>
    <h3>Bij Spinnaker</h3>
    <p>Het zwemmen is bij Spinnaker vzw een recreatief gebeuren. Er wordt 14-daags (op woensdagnamiddag) en 3-wekelijks (maandagavond) gezwommen. De zwemmers komen niet wekelijks aan bod omdat we maar een zeer klein zwembad hebben, omdat we elke zwemmer individueel begeleiden en er een zeer grote vraag is. Op maandagavond zwemmen we uitsluitend met kinderen en jongeren van het internaat van het Sint-Jozefinstituut. Op woensdagnamiddag zwemmen we met de overige leerlingen van het D.V.C. Sint-Jozefinstituut en de kinderen en jongeren van buitenaf. De doelstellingen van onze zwemsessies zijn watergewenning, het aanleren van diverse zwemstijlen, het aanscherpen van het uithoudingsvermogen en het progressief verlengen van de zwemafstand. Meestal wordt er gezwommen in het therapiebad (4x8 meter) van het Sint-Jozefinstituut. Met de betere afstandszwemmers gaan we regelmatig (maandelijks) buitenshuis zwemmen om de overstap van ons klein en warm therapiebad naar het grote, minder warme bad te maken. Ook het zwemmen in een afgebakende baan met andere zwemmers is wennen voor hen. Op het einde van het schooljaar gaan we met diegenen die het zwemmen goed onder de knie hebben, zwemmen voor een brevet. Dit is voor hen en voor ons een tastbaar bewijs van hun vorderingen van het afgelopen sportjaar en stimuleert hen om goed verder te doen. Eens ze goed kunnen zwemmen, stimuleren we de goede zwemmers om naar een zwemclub te trekken, aangezien ons zwembad wel heel klein is voor competitiezwemmers. </p>`,
  };

  render() {
    return (
      <div className="content ui container">
        <div className="sport-header">
          <div style={{'backgroundImage': `url(${header})`}} />
          <div><h1>Zwemmen</h1></div>
        </div>
        <div dangerouslySetInnerHTML={{__html: this.state.content}} />
      </div>
    );
  }
}

export default Zwemmen;
