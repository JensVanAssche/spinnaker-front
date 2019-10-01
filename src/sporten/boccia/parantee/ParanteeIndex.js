import React from 'react';

class ParanteeIndex extends React.Component {
  state = {
    content: `<p>Parantee v.z.w. (voorheen Vlaamse Liga voor Gehandicaptensport) organiseert de officiële Belgische competitie boccia.</p>
    <p>Deze bestaat uit een Vlaamse Kampioenschap individueel, een Vlaams Kampioenschap per pair/team, een Belgisch Kampioenschap individueel en een Belgisch Kampioenschap per pair/team. Elk tornooi gaat over een volledig weekend. Op de eerste dag worden de poule-wedstrijden afgewerkt. Op de tweede dag eventueel de laatste poulewedstrijden en de verschillende finalerondes. Op het einde van het weekend is de kampioen gekend.</p>
    <p>Aangezien er een grote diversiteit aan handicaps bestaat zijn er in boccia een aantal categorieën. Zo strijden de spelers met gelijke handicaps tegen elkaar.</p>
    <p>Er zijn in boccia 4 categorieën:</p>
    <p>·  BC1: dit zijn spelers met cerebral palsy die een iets moeizamere grip op de bal hebben en dus moeilijker kunnen werpen of spelers met cerebral palsy die met de voeten spelen; zij mogen gebruik maken van een assistent die achter hen staat om hen de bal te geven vooraleer ze gooien</p>
    <p>·  BC2: dit zijn spelers met cerebral palsy die een goeie grip op de bal hebben en dus makkelijker kunnen werpen; zij mogen geen gebruik maken van een assistent</p>
    <p>·  BC3: dit zijn spelers met cerebral palsy of spelers met een spierziekte die de bal niet kunnen gooien en gebruik maken van een hulpstuk en een sportassistent die dit hulpstuk bedient; de assistent zit met zijn rug naar het veld en voert de bevelen van de speler uit</p>
    <p>·  BC4: dit zijn spelers met een evolutieve aandoening of spelers die geen cerebral palsy hebben en die een goeie grip op de bal hebben; ook zij mogen geen gebruik maken van een assistent. Voor elk individueel kampioenschap (Vlaams en Belgisch) is er voor elke categorie een competitie. De resultaten van de laatste twee Vlaamse en de laatste twee Belgische kampioenschappen worden steeds samengeteld en leveren een ranking (of klassement) op. Dit is zo’n beetje zoals bij het tennis. De bovenste spelers uit de ranking worden geselecteerd voor de nationale ploeg. Zij nemen deel aan Europese en Wereldkampioenschappen, World Cup en Paralympics.</p>
    <p>Naast de individuele kampioenschappen zijn er ook de ploegenkampioenschappen. Zij lopen volgens hetzelfde systeem als de individuele kampioenschappen. Er is ook één Vlaams kampioenschap en één Belgisch kampioenschap. Ook deze duren een volledig weekend en leveren op zondagavond een kampioen op. De resultaten van de laatste twee Vlaamse en Belgische kampioenschappen leveren een ranking op. Ook de ploegen nemen deel aan internationale kampioenschappen en tornooien.</p>
    <p>In boccia zijn er drie verschillende ploegencompetities:</p>
    <p>·  Team BC1/BC2: een ploeg bestaat uit drie spelers (met eventueel twee wisselspelers).</p>
    <p>·  Pair BC3: een ploeg bestaat uit twee spelers (met eventueel één wisselspeler).</p>
    <p>·  Pair BC4: een ploeg bestaat uit twee spelers (met eventueel één wisselspeler) dit wordt niet zo frequent georganiseerd in België wegens het beperkte aantal deelnemers.</p>`,
  };

  render() {
    return (
      <div>
        <h2>Parantee Competitie</h2>
        <div dangerouslySetInnerHTML={{__html: this.state.content}} />
      </div>
    );
  }
}

export default ParanteeIndex;
