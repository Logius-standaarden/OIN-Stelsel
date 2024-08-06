# Businessarchitectuur

## Wat is het OIN

Het Organisatie-identificatienummer ([=OIN=]) is een uniek nummer dat Logius kan toekennen aan organisaties om zich te kunnen identificeren, authentiseren en of autoriseren bij digitaal berichtenverkeer binnen en met de overheid.

## Voor wie is het OIN

Het [=OIN=] is voor organisaties die berichten uitwisselen met de overheid. Dit kunnen publieke en private organisaties zijn. Voorwaarde is dat zij staan ingeschreven in het handelsregister. Daarnaast kunnen ook een aantal organisaties die niet in het handelsregister zijn opgenomen een [=OIN=] aanvragen. Dit zijn bijzondere organisaties met een publieke taak, colleges van advies en internationale organisaties met een rechtspersoonlijkheid.

Het [=OIN=] maakt een onderscheid in [=gebruikers=] en [=afnemers=]. Beiden kunnen het [=OIN=] aanvragen. Deze begrippen komen uit de [[Algemene Voorwaarden Logius]] voor [=afnemers=] en zijn als volgt gedefinieerd:

- <dfn data-lt="Afnemers">Afnemer</dfn>: een publiekrechtelijke of privaatrechtelijke organisatie, of college of een persoon met een publieke taak of bevoegdheid, die voor de uitoefening van die publieke taak elektronisch verkeer met andere overheden en burgers en/of bedrijven wenselijk acht en daarbij gebruik kan en mag maken van één of meer Diensten van Logius.

- <dfn data-lt="Gebruikers">Gebruiker</dfn>: een overheidsorganisatie of onderneming of een rechtspersoon, die is ingeschreven in het Handelsregister of een natuurlijk persoon die is ingeschreven in de Gemeentelijke Basisadministratie persoonsgegevens (GBA), en in deze hoedanigheid gebruik maakt van de Diensten van Logius ten behoeve van het elektronisch verkeer met één of meerdere [=Afnemers=].

## Op welke manier kan een organisatie een OIN verkrijgen

Organisaties die digitaal communiceren met of binnen de overheid hebben daarvoor in veel gevallen een identificerend nummer nodig. Dit identificerende nummer kan op twee manieren verkregen worden:

1. Bij Logius: Door een [=OIN=] (Organisatie Identificatie Nummer) aan te vragen bij Logius via een aanvraagformulier op Logius.nl. Het [=OIN=] wordt afgeleid van het KVK-nummer uit het Handelsregister. Alleen wanneer een organisatie geen KVK-nummer heeft wordt het OIN gebaseerd op het [=RSIN=]. Het [=OIN=] wordt vastgelegd in een register dat publiek raadpleegbaar is via de centrale [=OIN=] Raadpleegvoorziening (https://oinregister.logius.nl/) via een website en een API. De regels uit de [[[DK-Voorwaarden]]] en de [[[DK-Gebruiksvoorwaarden]]] zijn van toepassing. Er zijn geen kosten verbonden aan deze registratie.

2. Bij de [=TSP=]: Bij de aanvraag van een PKIoverheid-certificaat zal de Trust Service Provider ([=TSP=]), bij ontbreken van een [=OIN=], het identificerend nummer bij de creatie van het certificaat zelf afleiden op basis van het KVK-nummer of eventueel op basis van het [=RSIN=] op gelijke wijze als bij de afleiding van het [=OIN=]. Dit nummer wordt een [=HRN=] genoemd.  Er vindt echter geen publiek raadpleegbare registratie plaats. Voor de werking van het dataverkeer met de overheid is er verder geen verschil.

## Wat is een SubOIN

Het [=SubOIN=] is een afgeleide van het [=OIN=] en is opgesteld volgens de OIN-nummersystematiek en wordt gebruikt voor een organisatieonderdeel, samenwerkingsverband of voorziening dat niet zélf in het Handelsregister voorkomt. Een [=SubOiN] valt altijd onder een [=OIN-houder=].

Ook kan Logius op verzoek van een verantwoordelijke [=SubOIN-beheerder=] een SubOIN toekennen aan een organisatie, instelling of buitenlandse rechtspersoon in zijn sectorregistratie. Het SubOIN fungeert, net als een OIN, als numeriek alternatief voor de naam daarvan, ten behoeve van de identificatie, authenticatie, autorisatie, adressering en routering van digitaal berichtenverkeer met en binnen de overheid.

## Voor wie is het SubOIN

Het [=SubOIN=] is aan te vragen door organisaties die voor het uitvoeren van een publieke taak behoefte hebben aan een identificerend nummer voor een samenwerking (waar het zelf deel van uit maakt), organisatieonderdeel of voorziening.

Daarnaast kan Logius [=SubOIN-beheerders=] aanwijzen die een [=SubOIN=] aanvragen voor partijen die als onderdeel van hun dienstverlening aan de overheid een uniek identificerend nummer nodig hebben en het OIN nummer hiervoor niet kunnen aanvragen.

## Wijzigingen in het OIN Stelsel sinds 2006

Sinds het onstaan van het OIN is een aantal wijzigingen doorgevoerd in de toekenning en het gebruik van het OIN. De belangrijkste wijzingen geven we hieronder weer:

In 2017 zijn - naast duidelijker uitgeschreven juridische kaders- de volgende aanpassingen in de OIN regels uitgevoerd:

- de mogelijkheid voor organisaties met publieke rechtspersoonlijkheid om SubOINs aan te vragen voor aan hen gerelateerde organisatieonderdelen, voorzieningen en samenwerkingsverbanden

- de mogelijkheid voor houders van sectorregistraties om op te gaan treden als [=SubOIN-beheerder=] en op die manier door hen geregistreerde organisaties die geen eigen (Nederlandse) rechtspersoonlijkheid bezitten ook van SubOINs’s te voorzien.

- private partijen, die staan geregistreerd bij de KVK, krijgen de mogelijkheid om zich ook te laten registreren in de [=COR=] waarbij er een OIN afgeleid wordt van het KVK-nummer toegekend en de organisatiegegevens vanuit het Handelsregister worden overgenomen.

- Met het doorvoeren van het nieuwe beleid is het begrip OIN van *Overheids* IdentificatieNummer gewijzigd naar *Organisatie* IdentificatieNummer.

In 2017 verving de [=COR=] het toenmalige OIN register. Aan de [=COR=] werden de volgende nieuwe functionaliteiten toegevoegd:

- De relatie tussen SubOINs en de verantwoordelijke rechtspersoon kan in de [=COR=] worden vastgelegd en wordt publiekelijk getoond bij raadpleging van de voorziening (alleen in de [=COR=] API)

- De mogelijkheid tot aan laten maken, wijziging en intrekking van OIN’s door beheerders van de [=COR=] is toegevoegd.

- Beheerders van de [=COR=] hebben de mogelijk gekregen om de organisatiegegevens behorend bij een OIN rechtstreeks vanuit het Handelsregister via de KVK-API op te vragen en in de [=COR=] over te nemen waarmee de kwaliteit van geregistreerde gegevens kan worden verhoogd zonder extra handmatige handelingen.

- De exportfunctionaliteit waarmee de inhoud van de [=COR=]-database in CSV-formaat kan worden gedownload is publiek beschikbaar gemaakt.

- Beheerders van de [=COR=] hebben de mogelijkheid gekregen om de relatie met een OIN van de ene rechtspersoon naar een andere rechtspersoon over te dragen. Dit komt van pas als er een organisatieonderdeel of voorziening overgaat van de ene instantie naar een andere.

- Het al dan niet kunnen gebruiken van OINs of SubOINs voor e-facturatie wordt publiekelijk getoond.

- Niet alleen actieve Oins en SubOINs maar ook ingetrokken OINs en SubOINs worden publiekelijk getoond.

- Er is een voorziening aangebracht waarmee het aantal bevragingen van de [=COR=] kan worden gerapporteerd.

De [=COR=] wordt sinds de lancering steeds verder doorontwikkeld en aangepast;

- het eFacturatie kenmerk wordt niet meer getoond in de [=COR=]. Deze informatie over is nu te vinden op [https://www.logius.nl/diensten/e-factureren](https://www.logius.nl/diensten/e-factureren)

- Restful API op de [=COR=]: de [=COR=] API biedt verschillende mogelijkheden om het OIN register te bevragen

- extra identificerende codes toegevoegd aan het OIN register. Hierdoor is het mogelijk om via de [=COR=] API de vertaling te maken van OIN naar Gemeentecode en omgekeerd. Naast Gemeentecode kan een vertaling worden opgevraagd naar Provincie-, Waterschap- of Ministeriecode

Het gebruik van het OIN neemt steeds meer toe. Hierdoor zijn nieuwe knelpunten in de praktijk onstaan waarbij de OIN spelregels niet overeenkwamen met de behoefte en noden van organisaties.

In 2020 legt Logius een aantal wijzigingsvoorstellen in de OIN spelregels aan de Digikoppeling Community. De nieuwe spelregels zijn verwerkt in de aangepaste *Voorwaarden Digikoppeling* en *Gebruiksvoorwaarden Digikoppeling*.

Belangrijkste wijzigingen in het voorstel van 2020:

- Private partijen met een publieke taak kunnen SubOINs aanvragen;

- Private partijen kunnen ten behoeve van (SAAS-)dienstverlening voor hun publieke klanten SubOINs aanvragen

Daarnaast zijn de beide Voorwaarden documenten verduidelijkt en up-to-date gebracht. Voor het OIN gaat het om de volgende onderdelen:

- Geen vermelding meer tbv e-factureren in de [=COR=]

- Vermelding van het gebruik van organisatiecodes in de [=COR=]

## Rollen in het OIN stelsel

De rollen in het OIN stelsel zijn vastgesteld in een aantal begrippen en hun definities. 
Hieronder wordt aangegeven welke partijen een rol vervullen in het OIN stelsel. 
De definities van de rollen staan in de begrijppenlijst.

### Afnemer
Logius definieert dit bergip in de [Algemene Voorwaarden Logius](https://www.logius.nl/onze-organisatie/zakendoen-met-logius/voorwaarden/algemene-voorwaarden-logius) als volgt:
> Een publiekrechtelijke of privaatrechtelijke organisatie, of college of een persoon met een publieke taak of bevoegdheid, die voor de uitoefening van die publieke taak elektronisch verkeer met andere overheden en burgers en/of bedrijven wenselijk acht en daarbij gebruik kan en mag maken van één of meer Diensten van Logius.

Binnen het OIN kan een [=afnemer=] zowel een aanbieder van diensten zijn als een organisatie die 
gebruikmaakt van diensten van andere organisaties.On der het begrip [=afnemer=] van een OIN vallen 
ook organisaties die beschreven zijn in de Algemene wet Bestuursrecht, zoals de Tweede en Eerste Kamer.

### Stakeholders

Stakeholders bij het gebruik van het OIN-Stelsel zijn in beginsel alle partijen die gebruik maken van het [=OIN=] en [=SubOIN=] en/of bijbehorende Centrale OIN raadpleegvoorziening ([=COR=]) én de partijen die een rol hebben bij het beheer van het OIN.

### Opdrachtgever

Het ministerie van BZK (BZK) is opdrachtgever van Logius en eigenaar van het OIN-stelsel. Als eigenaar draagt BZK ook verantwoordelijkheid voor toezicht en audits over de centrale voorziening en afspraken.

### Beheerder OIN-stelsel

Logius beheert het OIN Stelsel. Het OIN valt onder de Digikoppeling Standaard. Het Centrum voor Standaarden, van Logius is beheerder van de Digikoppeling standaard en voert ook het beheer over van het OIN-stelsel, voorwaarden en overeenkomsten.

### Beheerder COR

Logius beheert de Centrale OIN Raadpleegvoorziening ([=COR=]). Logius Team Interfaces, onderdeel van het Productiehuis van Logius voert het dagelijks beheer en de doorontwikkeling uit van de [=COR=]. Logius heeft de zorgplicht om de [=COR=] online toegankelijk te houden voor de gebruikers van de [=COR=].

### Registerhouder overheidsregister

De registerhouder beheert een overheidsregister en waarborgt de kwaliteit van de te raadplegen nummers en bijbehorende gegevens. Voor elke entiteit die is opgenomen in het overheidsregister is duidelijk wie de verantwoordelijke rechtspersoon is. De verantwoordelijke rechtspersoon is herkenbaar aan de hand van het identificerende nummer ([=RSIN=], [=KVK-nummer=] of [=OIN=]). Het register heeft geborgd dat als de rechtspersoon ophoudt te bestaan, de registratie van de entiteit vervalt.

### SubOIN-beheerder

Een overheidsorganisatie die door Logius de status is verleend van SubOIN-beheerder en die op basis van geldige registraties met unieke identificerende nummers in de sectorregistratie die deze voor de uitvoering van zijn publiekrechtelijke taak beheert, voor eigen rekening en risico, [=SubOIN=]’s kan laten aanmaken, toekennen, beheren, corrigeren of intrekken.

De [=SubOIN-beheerder=] draagt zorg voor de registratie van SubOINs voor organisaties die niet in een aangesloten register voorkomen maar die wel bij een broninstantie of op basis van brondocumenten kunnen worden geïdentificeerd en geverifieerd. De [=SubOIN-beheerder=] is verantwoordelijk voor het doorgeven van mutaties.

### Certificatiedienstverlener (TSP)

Een [=TSP=] geeft certificaten uit conform de eisen uit het PvE van PKIoverheid. Daarmee zijn zij verantwoordelijk voor de betrouwbaarheid van de genoemde certificaten. De [=TSP=]'s doen met het oog op het uitgeven van een certificaat onderzoek naar de identiteit van de organisatie en de tekenbevoegdheid van de aanvragers van een certificaat. De voorwaarden hiervoor zijn beschreven in het PvE PKIo PvE. Tevens controleren zij de identiteit van de aanvrager op grond van een face to face controle. De [=TSP=] raadpleegt het OIN van de aanvrager via de [=COR=] en neemt dit nummer en naam op in het PKIoverheid certificaat.

### OIN-houder

_Zie begrippenlijst voor de definitie._

In dit document gebruiken we de term [=OIN-houder=] voor een organisatie die is ingeschreven in het handelregister en OINs of SubOINs aanvraagt en beheert. De [[[DK-Voorwaarden]]] en [[[DK-Gebruiksvoorwaarden]]] heeft het niet over OIN-houders maar gebruiken de begrippen *[=afnemer=]* en [=gebruiker=].

### Beheerder PvE PKIoverheid

Logius PKIoverheid is beheerder van het Programma van Eisen van PKIoverheid en *Policy Authority* (toezichthouder) op de [=TSP=]'s.

## Juridische structuur

Aansluitend op de beschrijving en uitleg van de rollen van betrokken partijen in het vorige hoofdstuk worden de kernbegrippen in de juridische context toegelicht.

Er van uitgaande dat het OIN voorlopig geen wettelijke grondslag krijgt zijn de [[[DK-Voorwaarden]]] en de OIN-formulieren de aangewezen plaats om de spelregels voor de betrokken partijen te definiëren.

### OIN-voorwaarden en OIN–formulieren

Onderstaand schema beschrijft op welke manier organisaties een OIN of SubOINs bij Logius kunnen aanvragen

![Juridische instrumenten (onderdeel van Digikoppeling)](media/juridische_instrumenten-80p.png "Juridische instrumenten (onderdeel van Digikoppeling)")

### Identificatie

Het gebruik van een Organisatie Identificatienummer (OIN) beoogt rechtspersonen en niet-rechtspersonen te identificeren ten behoeve van digitale berichtenverkeer met de overheid.

### Handelsregister

Een OIN is -waar mogelijk- afgeleid van bestaande identificerende nummers uit het Handelsregister.

### Rechtspersonen en samenwerkingsverbanden

Rechtspersonen en samenwerkingsverbanden *Dit zijn de samenwerkingsverbanden die zich conform de Hrw in kunnen schrijven in het Handelsregister.* worden ex art.6 Handelsregisterwet (Hrw) ingeschreven in het Handelsregister, en kunnen dus worden geïdentificeerd ten behoeve van het gebruik van het OIN. Tevens kunnen de in art. 1:2 Algemene wet bestuursrecht (Awb) omschreven overheidsorganen, die niet in het Handelsregister kunnen worden ingeschreven, een OIN verkrijgen.

### Buitenlandse rechtspersonen en organisaties

Buitenlandse rechtspersonen en organisaties die niet ingeschreven kunnen worden in een Nederlands overheidsregister, maar wel voldoen aan de vereisten voor een PKIoverheidscertificaat, kunnen bij een [=SubOIN-beheerder=] een aanvraag indienen voor een OIN. Na controle door een [=SubOIN-beheerder=] kunnen deze buitenlandse organisaties een OIN krijgen.

### OIN en SubOIN

_Zie begrippenlijst voor de definities._

Organisaties, organisatieonderdelen en/of voorzieningen die niet in een aangesloten overheidsregister voorkomen, komen mogelijk toch in aanmerking voor een OIN. (In enkel bijzondere gevallen ook voor een OIN. Het gaat dan om het OIN dat wordt toegekend aan een onderdeel van de Staat der Nederlanden). Deze worden geregistreerd in het OIN-register. Een [=SubOIN=] is een identificerend nummer voor niet-rechtspersonen. Het [=SubOIN=] heeft dezelfde structuur als het OIN. Een [=SubOIN=] is altijd herleidbaar tot een rechtspersoon die is ingeschreven in het Handelsregister en valt onder de juridische verantwoordelijkheid van deze rechtspersoon.

Als een organisatie geregistreerd is in een aangesloten register (niet het Handelsregister), dan kan het identificerend nummer uit dit register worden gebruikt als [=SubOIN=]s. Daarmee is een aangesloten register in feite een register van SubOINs voor een specifieke doelgroep.

### OIN-houder

De [=OIN-houder=] is een rechtspersoon met een publieke taak die gebruik maakt van het OIN. Slechts de [=OIN-houder=] kan een OIN aanvragen voor een organisatie, een organisatieonderdeel of een voorziening die onder zijn juridische verantwoordelijkheid valt. De [[[DK-Voorwaarden]]] en [[[DK-Gebruiksvoorwaarden]]] heeft het niet over OIN-houders maar gebruiken de begrippen [=afnemer=] en gebruiker. De [=OIN-houder=] zal zich ervan moeten vergewissen dat hij middels juridische afspraken – zoals bijvoorbeeld statuten, een overeenkomst, een inschrijving in een register en/of een mandaatbesluit – juridische verantwoordelijkheid kan dragen voor het handelen van de organisatie of organisatieonderdeel, die gaat beschikken over een OIN. Een eis is dat de functionaris, die de aanvraag voor een OIN doet, tekenbevoegd is.

De [=OIN-houder=] heeft een zorgplicht met betrekking tot het handelen door de houder van het [=OIN=], voor zover dit handelen betrekking heeft op de elektronische berichtenuitwisseling waarbij gebruik wordt gemaakt van het [=OIN=] en bijbehorende [=SubOIN=]s.

### Opnemen OIN in PKIoverheidscertificaat

De [=TSP=] neemt een [=OIN=] of [=SubOIN=] op in een PKIoverheidscertificaat. Hiervoor wordt het *Subject.serialNumber* veld van het certificaat gebruikt.

## Centrale OIN Raadpleegvoorziening (COR)

Logius is beheerder van de Centrale OIN Raadpleegvoorziening (inclusief het OIN-register) in opdracht van BZK. De [=COR=] heeft niet het karakter van een basisregistratie of een sectorale registratie. De [=COR=] is een landelijke voorziening.

## Toezicht uitoefenen

Logius moet toezien op de naleving van de voorwaarden en de afspraken die partijen met Logius maken.Logius moet voldoen aan de kwaliteitseisen vanuit haar opdrachtgever BZK. Daarbij is de mogelijkheid aanwezig dat BZK onafhankelijke derden, zoals de ADR *Auditdienst Rijk*, inschakelt om controles uit te voeren. Daarmee is de functiescheiding gewaarborgd.

### Naleving Voorwaarden OIN

De beheerder van het OIN-stelsel controleert op basis van signalen en steekproefsgewijs de naleving van de OIN-voorwaarden en de ondertekende aanvraagformulieren met de OIN–houders, die [=SubOIN=]s uitgeven.

### Naleving overeenkomsten

De beheerder van het OIN-stelsel controleert de naleving van de overeenkomsten, af te sluiten met de SubOIN-beheerders en met de registratiehouders.

### Toezicht BZK

De opdrachtgever BZK beoordeelt binnen het regulier toezicht op de beheerder van het OIN-stelsel in hoeverre de OIN-voorwaarden en overeenkomsten nageleefd worden door de betrokken contractspartijen.

## Internationale uitwisselingen

### OIN ICD Code

Volgens de ISO 6523 part 1 standaard is een ICD code (International Code Designator) nodig. Het OIN is sinds 2018 opgenomen in de ICD lijst

De volgende alinea's geven achtergrondinformatie over de ISO 6523 standaard.

### Mapping naar de ISO 6523 standaard

Het OIN is aangemeld en opgenomen in in ICD Codelist: (zie [https://docs.peppol.eu/pracc/catalogue/1.0/codelist/ICD/](https://docs.peppol.eu/pracc/catalogue/1.0/codelist/ICD/)). Het OIN is geregistreerd onder *code id 0190* met de volgende beschrijving

>Organisatie Indentificatie Nummer (OIN)
>
> The OIN is part of the Dutch standard ‘Digikoppeling’ and is used for identifying the organisations that take part in electronic message exchange with the Dutch Government. The OIN must also be included in the PKIo certificate.
