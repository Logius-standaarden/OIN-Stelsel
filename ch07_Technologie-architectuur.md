# Technologie-architectuur

## Schets van de [=COR=]

Onderstaande plaat beschrijft de functionaliteiten van de [=COR=] op hoofdlijnen

![Architectuurschets van de [=COR=] en de door haar gebruikte bronnen](media/architectuur_van_cor-75p.png "Architectuurschets van de [=COR=] en de door haar gebruikte bronnen")

| **#** |**beschrijving rol of taak**|
|---|--------|
| 1| **Iedereen** kan het publieke deel van de [=COR=] via een website benaderen.|
| 2| **Systeem toegang** De [=COR=] biedt een Restful API aan waarmee systemen het publieke deel van de [=COR=] automatisch kunnen bevragen |
| 3| **Logius Beheerder** De Logius beheerder kan, na authenticatie conform de Logius richtlijnen, in het besloten gedeelte van de [=COR=], OINs en SubOIN-registraties aanmaken, wijzigen of intrekken. |
||**Centrale OIN Raadpleegvoorziening**|
| 4| **OIN Raadpleegportaal** Webportaal. Op basis van een in te geven zoekitem (zoals deel van een naam van een organisatie of een OIN kan de OIN van een organisatie, de naam en de status (actief of ingetrokken) worden opgevraagd. Als er sprake is van een HoofdOIN – SubOIN relatie wordt deze getoond. De [=COR=] biedt ook de mogelijkheid om een CSV export te maken van de gehele registratie.|
| 5| **[=COR=] API** REST API op het OIN register. De API is publiek toegankelijk. Via de API kan het publieke deel van het OIN en SUbOIN register bevraagd worden. De [=COR=] API biedt uitgebreidere zoekmogelijkheden en resultaten dan het OIN Raadpleegportaal, voor verder informatie zie Bijlage B|
| 6| **OIN/SubOIN Beheerportaal** Beheerders van de [=COR=] maken gebruik van het portaal om registraties aan te maken, te wijzigen of in te trekken.|
| 7| **Centrale OIN Raadpleegvoorziening Module** |
| 7A | **OIN Raadpleegapplicatie** De applicatie handelt de verzoeken van het OIN Raadpleegvoorziening portaal en de SubOINs Raadpleegservice af. De applicatie bevraagt het OIN register en retourneert zoekresultaten.|
| 7B | **OIN-Beheerapplicatie** De applicatie handelt de acties van het OIN-registratieportaal af. De applicatie registreert organisaties en organisatieonderdelen in het OIN-register . |
| 8| **Controle op rechtspersoon** Bij het aanmaken van een registratie in het OIN register worden de gegevens van een geregistreerde Rechtspersoon online gecontroleerd in het Handelsregister. Daarnaast worden periodiek alle organisaties met een [=KvKnummer=] of [=RSIN=] gevalideerd. Indien een Rechtspersoon is opgeheven in het Handelsregister wordt de OIN registratie (en eventueel hieraan gekoppelde SubOINs) ingetrokken, |
||**Primaire Registers**|
| 9| **OIN en SubOIN-register** het OIN en SubOIN worden in één register vastgelegd |
| 10 | **Handelsregister** Het Handelsregister is de primaire bron voor de [=COR=]. |
|| **Identificerende bronnen** <br>Sommige overheidsorganisaties kennen naast registratie in het Handelsregisters en het OIN register ook andere identificerende nummers. Deze nummers worden aan een OIN registratie in het OIN register toegevoegd, en zijn via de [=COR=] API op te vragen (De identificerende nummers uit deze bronnen op dit moment handmatig in het OIN register bijgewerkt.)|
| 11 | **RvIG** Gemeentecodes (BG codes)|
| 12 | **CBS** Provinciecodes en Waterschapcodes|
| 13 | **KOOP** Ministeriecodes |



