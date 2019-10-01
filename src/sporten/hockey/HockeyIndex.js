import React from 'react';
import header from 'assets/images/header.jpg';

class HockeyIndex extends React.Component {
  state = {
    content: `
    <h3>Doelgroep</h3>
    <p>Atleten met een motorische handicap, vaak mensen met een spierziekte.</p>
    <h3>Over de sport</h3>
    <p>E-hockey wordt gespeeld door personen die in het dagelijks leven in een elektrische rolstoel zitten. Er kan gespeeld worden met een stick in de hand, maar voor personen met een beperkte armfunctie kan een aangepaste stick bevestigd worden aan de rolstoel. Sinds 1993 is men binnen Parantee (toen V.L.G.) gestart met rolstoelhockey. Hoewel er een onderscheid is tussen rolstoelhockey dat gespeeld wordt vanuit een elektrische rolstoel (E-hockey) en vanuit een handbewogen rolstoel (H-hockey), wordt in België voorlopig enkel E-hockey in competitieverband beoefend.</p>
    <p>In tweede en derde klasse is het veld 20 m lang en 10 m breed en wordt ze begrensd door balken met een hoogte van 20 cm. Er wordt gespeeld met een lichte plastic of kunststof stick (al dan niet bevestigd aan de rolwagen voor E-hockey) en een lichte plastic gatenbal. Een rolstoelhockey-team bestaat uit 1 keeper en 3 veldspelers (+ 4 wisselspelers). De duur van de wedstrijden voor E-hockey bedraagt 2 x 10 minuten. Tijdens de wedstrijd mogen de spelers niet met de rolstoelen tegen elkaar botsen. Een belangrijk aandachtspunt is dat het doelgebied (een halve cirkel van anderhalve meter diameter voor het doel) enkel voor de keeper toegankelijk is.
    </p>
    <p>In de allerhoogste afdeling en de eerste klasse E-hockey wordt gespeeld op een super-league-veld. Het veld meet maximum 16 op 26 meter en er wordt met één veldspeler meer gespeeld. De wedstrijd bestaat uit twee helften van 20 minuten. Er mag ook achter het doel gereden worden.</p>
    <h3>Rolstoelhockey in België</h3>
    <p>De nationale competitie wordt afgewerkt in vier competitiedagen. E-hockey kent één super-league-klasse (competitie op zaterdag)  en een eerste, een tweede en een derde klasse (competitie op woensdag).</p>
    <h3>Bij Spinnaker</h3>
    <p>Spinnaker vzw telt zo’n 30 jongeren die rolstoelhockey beoefenen. Zij trainen twee-wekelijks en zijn ingedeeld in vier ploegen. Zij spelen in de diverse klasses. In onze ploegen spelen spelers met een vaste stick en met een losse stick door elkaar (dit conform de reglementen). De betere spelers spelen in de eerste ploeg, de anderen in de andere (vier) ploegen. Er zijn bij ons veel jongeren met een spierziekte die deze sport beoefenen. Het is de enige competiesport met veel actie die zij kunnen beoefenen. Wij treden aan in de Parantee-competitie onder de naam ‘Antwerp Wheelblazers’. Deze naam kozen de jongeren zelf in 2001.</p>`,
  }

  render() {
    return (
      <div className="content">
        <div className="sport-header">
          <div style={{'backgroundImage': `url(${header})`}} />
          <div><h1>Hockey</h1></div>
        </div>
        <div dangerouslySetInnerHTML={{__html: this.state.content}} />
      </div>
    );
  }
}

export default HockeyIndex;
