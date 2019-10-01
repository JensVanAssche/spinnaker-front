import React from 'react';
import header from 'assets/images/header.jpg';

class Handbal extends React.Component {
  state = {
    content: `<h3>Doelgroep</h3>
    <p>Sporters met een beperking van de onderste ledematen die zich in een handbewogen rolstoel kunnen verplaatsen.</p>
    <h3>Over de sport</h3>
    <p>Rolstoelhandbal is een aangepaste versie van handbal voor manuele rolstoelgebruikers. De (gemengde) teams bestaan uit 5 veldspelers en een keeper die trachten de bal in het doel van de tegenstander te werpen. De spelers mogen de halve cirkel die de keeperszone afbakent niet betreden met de bal in de hand of op de schoot. Het veld is 40 op 20 meter en kan binnen of buiten gespeeld worden. De doelen zijn 3 meter breed en 1,60 meter hoog (iets lager dan bij het reguliere handbal). De bal moet op de schoot vervoerd worden en mag afgepakt worden door te tegenstander. Na 2 keer pushen met de rolwagen moet je botsen, werpen, passeren of doelen. De bal mag maar 3 seconden in de hand gehouden worden. Bij een werppoging mag de bal niet uit de handen worden geslagen. Niemand mag de vloer aanraken met zijn handen.</p>
    <h3>Bij Spinnaker</h3>
    <p>Rolstoelhandbal is een samenwerking met handbalclub OLSE uit Merksem. Dit is een Belgische topclub met heel veel teams, een levendige spirit en op zoek naar de mogelijkheden om een G-werking uit te bouwen. Omdat de club en hun trainingslocatie niet ver van het DVC gelegen is en er een aanbod is op woensdagnamiddag gingen we hier met Spinnaker zeer graag op in. Bij de eerste training (op 21 september 2016) waren er 6 enthousiastelingen en stonden er nog 2 te popelen om mee te doen. De verwachtingen zijn hoog gespannen.</p>
    <h3>In België</h3>
    <p>Deze sport staat nog in zijn kinderschoenen. Ze is overgewaaid vanuit Nederland waar er enkele G-handbalclubs actief zijn. Er werd wel al een lessenreeks bij Sporta over deze sport gegeven. De samenwerking OLSE/Spinnaker is de eerste in België. We hopen dat er nog volgen. Website OLSE Merksem: www.merksemhandbal.com</p>`,
  };

  render() {
    return (
      <div className="content ui container">
        <div className="sport-header">
          <div style={{'backgroundImage': `url(${header})`}} />
          <div><h1>Rolstoelhandbal</h1></div>
        </div>
        <div dangerouslySetInnerHTML={{__html: this.state.content}} />
      </div>
    );
  }
}

export default Handbal;
