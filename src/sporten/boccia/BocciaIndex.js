import React from 'react';

class BocciaIndex extends React.Component {
  state = {
    content: `<h3>Wat is boccia</h3>
    <p>Boccia is een paralympische sport. Het is een sport voor atleten met een motorische handicap (hersenverlamming/spierziekte). Dit kan zowel voor sporters met een evolutieve aandoening als een non-evolutieve aandoening.</p>
    <p>Boccia is een sport die erg lijkt op het meer bekende petanque. Men gooit met gekleurde lederen ballen (zes blauwe en zes rode). De doelbal is een witte lederen bal met dezelfde diameter als de gekleurde ballen. In boccia is het mogelijk om met de voeten te spelen of voor diegenen die niet zelf kunnen gooien gebruik te maken van een hulpstuk en een helper. De helper staat met zijn rug naar het speelveld gekeerd en kan of mag enkel de instructies uitvoeren van de atleet. Zo is boccia de enige sport die toegankelijk is voor iedere motorisch gehandicapte persoon, ook voor personen met een ernstige motorische handicap die vaak geen enkele andere sport kunnen beoefenen. Boccia wordt individueel gespeeld of in ploegen.</p>
    <h3>Boccia in Belgie</h3>
    <p>Boccia wordt in België in verscheidene clubs beoefend. Naast de nationale en Vlaamse competitie worden ook recreatieve tornooien georganiseerd (bv. interclubs en scholencompetitie). Op internationaal niveau behalen onze atleten goede tot uitstekende resultaten met als hoogtepunt brons op de Paralympische Spelen in Londen 2012.</p>
    <h3>Boccia bij Spinnaker</h3>
    <p>We hebben 6 diverse bocciagroepen die wekelijks trainen. Elke groep bestaat uit 2 tot 6 sporters. De sporters worden onderverdeeld in competitiesporters (diegenen die deelnemen aan de Parantee-competitie, scholencompetitie, interclubcompetitie en de Nederlandse competitie) en recreatieve spelers. De competitiesporters trainen wekelijks. De werpers trainen samen, apart van de gootspelers die ook samen trainen.</p>
    <p>De recreatieve sporters worden ingedeeld volgens spelniveau en spelinzicht. Hier maken we geen onderscheid in de manier waarop ze spelen (classificatie).</p>`,
  };

  render() {
    return (
      <div className="content">
        <h2>Boccia</h2>
        <div dangerouslySetInnerHTML={{__html: this.state.content}} />
      </div>
    );
  }
}

export default BocciaIndex;
