# Applicatie-architectuur

## Gebruik van de Centrale OIN Raadpleegvoorziening

Het OIN van een rechtspersoon is publiek raadpleegbaar via de Centrale OIN Raadpleegvoorziening ([=COR=]). De [=COR=] registreert organisaties en stelt het OIN samen op basis van de OIN-systematiek (zie bijlage A). Voor de registratie baseert de [=COR=] gebruikt zich waar mogelijk op registers met een wettelijke of formele taak, zoals het Handelsregister en het FI register. De gebruiker kan in de [=COR=] zoeken op nummer of naam. De zoekresultaten worden aan de gebruiker getoond.

De [=COR=] is sinds 2017 als publiek toegankelijke voorziening beschikbaar.

De [=COR=] bestaat uit de volgende kern-onderdelen:

- Een publiek toegankelijk raadpleegvoorziening.

- Een webservice die een Restful API aanbiedt

- Een beheermodule waarmee Logius beheerders de registraties in de [=COR=] bijhouden.

## Publieke raadpleegvoorziening

De [=COR=] biedt de volgende services voor gebruikers:

- Online zoeken naar OINs en [=SubOIN=]s op basis van nummers, organisatienamen of delen ervan

- Restful API functionaliteit

- Export van alle geregistreerde organisaties in CSV formaat

## Beheerfuncties

De [=COR=] biedt, naast bovenstaande, de volgende services voor beheerders:

- Detailinformatie over de geregistreerde organisaties en een bewerkmogelijkheid om deze informatie aan te passen

- Historie/audittrail van alle doorgevoerde wijzigingen per registratie

- Mogelijkheid om nieuwe OIN- en [=SubOIN=]-registraties toe te voegen

- Mogelijkheid om actieve OINs en [=SubOIN=]s in te trekken

- Data synchronisatie tussen de [=COR=] database en het Handelsregister, zowel bij invoer van nieuwe registraties als periodiek, om bestaande registraties te verifiëren

- Lifecycle management van OIN

- Gebruikersbeheer

## Algemene eisen aan de Centrale OIN Raadpleegvoorziening

De Centrale OIN Raadpleegvoorziening voldoet aan de volgende eisen:

- De authenticatie van beheerders verloopt via een beveiligd authenticatiemiddel.

- Er is een systeemcontrole die voorkomt dat er duplicaten van OIN's of [=SubOIN=]s ontstaan.

- Er is een systematiek(algoritme) voor het genereren van een uniek nummer die gaat dienen als [=SubOIN=]s.

- De beheerder treft passende beveiligingsmaatregelen om de privacy van de verwerking van persoonsgegevens te waarborgen, zoals de Logiusbeveiligingsrichtlijnen (ISO27000-1 en ISO 27000-2) en IB policies.

- Maakt gebruik van Nederlandse API Design Rules voor webservice.

- Voorziet in een audittrail van mutaties op een registratie.

- Voorziet in management rapportages die inzicht bieden in aantallen OIN, gebruikers, activiteiten OIN-houders enzovoort.

- Voldoet aan Digitoegankelijk

- Volgt de principes en kaders van NORA.

## Centrale OIN Raadpleegvoorziening ([=COR=])

### Onderdelen van de [=COR=]

De [=COR=] bestaat uit een publiek toegankelijk gedeelte en een besloten gedeelte. Het publiek toegankelijke deel wordt ontsloten door een website en een webservice met een Restful API.

### Toegang tot het besloten gedeelte van de [=COR=]

Enkel daarvoor aangewezen medewerkers van Logius hebben toegang tot het besloten gedeelte van de [=COR=].

### Registratie in het besloten gedeelte van de [=COR=]

De beheerder van de [=COR=] registreert in het besloten gedeelte van de [=COR=]:

- Het uitgeven van een nieuw [=OIN=] en [=SubOIN=].

- Het intrekken van een bestaand [=OIN=] of [=SubOIN=].

- Het verlengen van de geldigheidsdatum van een [=OIN=] of [=SubOIN=]

- Het verlengen van een [=OIN=] of [=SubOIN=] die was ingetrokken na de standaard geldigheidsduur

- Wijzigingen in de registratie van organisatie(onderdelen) of voorzieningen.


### Publiceren van OIN en SubOINs

het [=OIN=] of [=SubOIN=] is pas openbaar toegankelijk, nadat de beheerder van de [=COR=] het [=OIN=] heeft gepubliceerd. Het [=OIN=] of [=SubOIN=] bezit dan de status *Actief*. De [=COR=] toont ook [=OIN=] en [=SubOIN=]s die ingetrokken zijn.

### Aansluiten [=COR=] op overheidsregisters

De beheerder van het OIN-stelsel bepaalt welke overheidsregisters onderdeel uitmaken van de OIN-systematiek. De beheerder van het OIN-stelsel maakt afspraken over het gebruik van deze registers met de registratiehouders. De registratiehouders zijn verantwoordelijk voor de kwaliteit van gegevens en voor de beschikbaarheid van het register.

### Gebruik van de [=COR=] API

De [=COR=] API is publiek beschikbaar voor systemen. De beheerder van de [=COR=] kan de toegang reguleren, bijvoorbeeld door het verstrekken van zogenaamde API-keys, of door gebruik te maken van tweezijdig TLS.

### Privacybescherming en informatiebeveiliging

De beheerder van de [=COR=] is verantwoordelijk voor de privacybescherming van persoonsgegevens in de [=COR=] en de informatiebeveiliging met betrekking tot de [=COR=], en komt derhalve de van toepassingzijnde wet – en regelgeving na.

### Kwaliteitsborging

De beheerder van de [=COR=] is verantwoordelijk voor de goede werking van de [=COR=], het bieden van ondersteuning bij het gebruik van de CORen  de beschikbaarheid van het systeem. De beheerder van de [=COR=] is verantwoordelijk voor het correct vastleggen van (Sub)OINs en bijbehorende gegevens in de [=COR=], zoals die worden aangeleverd door de aanvrager.

De beheerder van de [=COR=] is niet verantwoordelijk voor de kwaliteit van de geregisteerde [=OIN=] gegevens. De rechtspersonen aan wie [=SubOIN=]s zijn uitgegeven hebben een zorgplicht met betrekking tot de inhoud van de geregistreerde gegevens in de [=COR=]. Bij twijfel over de juistheid van geregistreerde gegevens kan de beheerder van de [=COR=] maatregelen nemen om de kwaliteit van subnummer registraties te toetsen en desgewenst te herstellen. De beheerder van de [=COR=] is niet verantwoordelijk voor de kwaliteit van de gegevens uit de aangesloten overheidsregisters.


