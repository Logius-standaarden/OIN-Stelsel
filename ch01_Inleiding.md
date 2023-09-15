# Inleiding

## Het OIN stelsel

In dit document beschrijven we het doel en de werking van het OIN Stelsel. Het OIN is gestart als een noodzakelijk onderdeel van de Digikoppeling Standaard en is inmiddels een veel gebruikt identificatienummer binnen en maar ook buíten Digikoppeling. De regels van uitgifte en gebruik van het OIN staan beschreven in de *Voorwaarden Digikoppeling* en de *Gebruiksvoorwaarden Digikoppeling*. Daarnaast geeft Logius OINs en SubOINs uit en slaat de informatie hiervan op in het OIN register en ontsluit die met de *[=COR=]*, de Centrale OIN Raadpleegvoorziening. Dit geheel van regels en uitvoering noemen we het *OIN stelsel*.

## Waarom dit document

De `Voorwaarden Digikoppeling` en de `Digikoppeling Gebruiksvoorwaarden` hebben een juridisch karakter en beantwoorden waarschijnlijk niet elke vraag van gebruikers van een OIN. In dit document proberen we daarom de werking van het OIN stelsel met al haar facetten nader te beschrijven in de hoop die vragen te beantwoorden.

## Aanleiding voor een nieuwe versie van dit document

Dit document is een update op een versie die Logius in 2016 heeft uitgebracht. De aanleiding was toen een inventarisatie van een aantal inmiddels ontstane knelpunten met voorstellen voor de wijzigingen van de regels voor gebruik en uitgifte van OIN’s en SubOINs. Het document stond aan de basis voor de wijzigingen die in 2017 zijn doorgevoerd.

In 2020 heeft Logius de OIN regels opnieuw op punten aangepast. Dit gaf meteen de gelegenheid om het document bij te werken en in lijn te brengen met zowel de wijzigingen uit 2017 en de inmiddels vastgestelde wijzigingen van 2020.

## Doel en scope van document

Dit document beschrijft het OIN-stelsel. Het OIN-stelsel bestaat uit de volgende bouwstenen:

- OIN- en SubOIN-systematiek

- Centrale OIN Raadpleegvoorziening (incl. OIN-register)

- Toelichting op de juridische voorwaarden en overeenkomsten

## Historie van het OIN (en vooruitblik)

Bij de ontwikkeling van de Digikoppeling standaard in 2006 is besloten om de identificatie in de standaard te baseren op een uniek identificerend nummer van een overheidsorganisatie. [bron document "Evaluatie OIN uitgiftev2", 2010]

De behoefte aan een identificatienummer ontstond om een aantal redenen:

- Identificatie op basis van een nummer in plaats van een naam. Namen zijn moeilijk eenduidig te krijgen, door verschillende spellingen, afkortingen en hoofdletters;

- Stroomlijning en standaardisatie van identiteiten en autorisatie. Het was gewenst om *overheidsbreed* eensluidende afspraken te maken over niveaus van autorisatie en dus niveaus van identiteit;

[bron document "OIN alternatieven3", 2011]

### OIN en PKIoverheid

Het nummer wordt opgenomen in het PKIoverheidcertificaat - als inhoud van het attribuut Subject.serialNumber -  en wordt daarnaast gebruik in de adressering van berichten.

### *Overheids* Identificatienummer

Het unieke nummer werd het OIN, het *Overheidsorganisatie Identificatie Nummer*. De KVK – beheerder van het Handelsregister (HR) – adviseerde om het nummer op het FI-nummer te baseren. In het Handelsregister waren echter in die tijd niet alle overheidsorganisaties opgenomen die in het kader van de elektronische overheid van belang waren. Zo hadden allerlei zelfstandige onderdelen van een ministerie, zoals de Belastingdienst en Douane, geen eigen FI-nummer.

Voor het gebruik van Digikoppeling was echter afgesproken dat organisaties én onderdelen van organisaties die berichten willen uitwisselen met een andere overheid, en daartoe zelfstandig contracten afsluiten, een identificerend nummer moeten krijgen, ook als dat onderdeel niet beschikt over een eigen FI-nummer. Besloten werd dat Logius het OIN ging uitdelen. Op termijn zou dan mogelijk altijd met een FI-nummer gewerkt kunnen worden, wanneer al die zelfstandige onderdelen ook in het Handelsregister zouden worden opgenomen. [bron document "Evaluatie OIN uitgiftev2", 2010]

### OIN en HRN

Ook voor private organisatie was een nummer noodzakelijk voor digitale gegevensuitwisseling met de overheid. Het OIN stond toen nog voor *Overheids*identificatienummer en liet niet toe dat ook deze partijen zich inschreven in het OIN register. Logius heeft daarom met de certificaatuitgevers aparte afspraken gemaakt om in het verplicht te gebruiken PKIoverheidcertificaat een nummer te laten opnemen volgens de structuur van het OIN.

Alle overheden in Nederland hebben een [=RSIN=] wat gebruikt kan worden om een OIN op te baseren. Voor een private organisatie werd niet het RSIN gebruikt, maar haar KVK-nummer. Dit nummer kreeg de naam *Handelsregisternummer* (HRN). Het HRN is een virtueel nummer. Bij de aanvraag van een PKIoverheid-certificaat zal de Trust Service Provider ([=TSP=]), bij ontbreken van een OIN, het identificerend nummer bij de creatie van het certificaat zelf afleiden op basis van het KVK-nummer uit het Handelsregister op gelijke wijze als bij de afleiding van het OIN. Het [=HRN=]  wordt echter niet vastgelegd in een publiek raadpleegbare registratie.

### Nieuw Handelsregister

In 2010 werd door de KVK door een wetswijziging het nieuwe Handelsregister in gebruik genomen, waarin meer overheidsorganen, zoals de ministeries, ingeschreven konden worden. Het door Logius onderhouden OIN register bleef daarnaast bestaan. Het register bevatte inmiddels naast in het HR ingeschreven organisatie ook registraties van organisatie-onderdelen en voorzieningen en overheidsorganisaties die zich niet kunnen inschrijven in het HR. In 2014 is een publieke website gelanceerd waarin iedereen het OIN van een organisatie kon opzoeken.

### OIN 2016: *Organisatie* Identificatienummer

In 2016 zijn na brede afstemming met gebruikers de regels verduidelijkt van wie in aanmerking kwam voor een OIN en SubOINs.  De onderbouwing van de regels werden vastgelegd in het document [OIN stelsel v1](#inleiding). De spelregels van het OIN zijn vastgelegd in de [[Voorwaarden Digikoppeling]] en de [[Gebruiksvoorwaarden Digikoppeling]].

<aside class="note">
Sinds de wijziging van 2016 staat de afkorting voor OIN voor <strong>Organisatie</strong> Identificatienummer.
</aside>

### Doorontwikkeling [=COR=]

Logius heeft sinds 2017 een aantal wijzigingen doorgevoerd in de ontsluiting van het OIN register:

- in 2017 werd de OIN website hernoemd in en uitgebreid naar de **Centrale OIN Raadpleegvoorziening ([=COR=])**. De [=COR=] toont op de website naast de OINs ook de (Hoofd)OIN-houder indien die aanwezig is.

- De aanduiding of de vermelde OIN voor eFacturatie gebruikt kon worden is verwijderd, op verzoek van Logius;

- in 2018 is op verzoek van een aantal organisaties een RESTful API toegevoegd waarmee het OIN register online bevraagd kan worden. De website bleef ongewijzigd;

- in 2019 is aan het OIN register een aantal identificerende nummers toegevoegd, de BG codes voor gemeente en de CBS codes voor Waterschappen en Provincies. Deze gegevens zijn enkel via de [=COR=] API opvraagbaar.

- in 2020 dient Logius een voorstel in dat mogelijk maakt dat *privaatrechtelijke partijen met een publieke taak* en *privaatrechtelijke partijen ten behoeve van (SAAS-)dienstverlening* aan hun publieke klanten SubOINs’s kunnen aanvragen.

- in 2020 wordt voor het UZI register prefix '00000009' gereserveerd

- De nieuwe voorstellen zijn na openbare consultatie vastgesteld door het Technisch Overleg Digikoppeling.  Op 1 januari 2021 zijn de [[Voorwaarden Digikoppeling]] en de [[Gebruiksvoorwaarden Digikoppeling]] gepubliceerd.

- in 2023 is besloten het OIN te baseren op het KVK-nummer. Alleen als een organisatie _geen_ KVK-nummer heeft wordt het [=OIN=] gebaseerd op het [=RSIN=]. Hiermee komt het [=OIN=] overeen met het [=HRN=] wat een gebruiker zelf kan afleiden. Veel uitgegeven [=OIN=] nummers waren al gebaseerd op het KVK-nummer omdat dat in de [=COR=] software al was ingebouwd. Bestaande nummers worden niet aangepast. 

## Leeswijzer

De structuur van dit document is gebaseerd op de TOGAF standaard - TOGAF staat voor The Open Group Architecture Framework- .


|Hoofdstuk|Inhoud|
|---|---|
|Architectuurvisie| beschrijft op hoofdlijnen het doel en de kaders van het OIN|
|Businessarchitectuur| beschrijft de wijzingen en de rollen in het OIN|
|ApplicatieArchitectuur| beschrijft de functies van de [=COR=]|
|Het beheer van SubOINs in de [=COR=]| een apart hoofdstuk over uitgifte en beheer van SubOINs|
|Data Architectuur|beschrijft de structuur van het OIN en SubOIN|
|Technologie-Architectuur| geeft een technische beschrijving van de [=COR=] en de hieraan gekoppelde systemen en bronnen|
|Bijlage A|Begrippenlijst|
|Bijlage B|Nuttige links|
