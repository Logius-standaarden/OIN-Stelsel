# Architectuurvisie

## Doel OIN

Het organisatie-identificatienummer ([=OIN=]) is het identificatienummer voor niet-natuurlijke personen ten behoeve van het digitale berichtenverkeer met de overheid. De toekenning van het [=OIN=] is gebaseerd op identificatie van de aanvrager van het [=OIN=] middels het Handelsregister dan wel een ander aangesloten overheidsregister.

## Inleiding

Het Organisatie-identificatienummer [=OIN=], voorheen Overheidsidentificatienummer, is onderdeel van de Digikoppeling standaard. De standaard wordt gebruikt in elektronische gegevensuitwisseling met en door de overheid. Het [=OIN=] is een twintigcijferig nummer dat een organisatie identificeert in het digitale berichtenverkeer. Digikoppeling verplicht de opname van het [=OIN=] in het PKIoverheid certificaat zodat systemen kunnen worden geïdentificeerd en geauthenticeerd. Daarmee is het [=OIN=] een randvoorwaarde voor veilig digitaal verkeer.

Een groot aantal voorzieningen van de digitale overheid maakt gebruik van het [=OIN=]. Dat gebeurt op verschillende manieren en met verschillende doeleinden: de identificatie, authenticatie en autorisatie van organisaties of organisatieonderdelen, en de routering van berichten naar organisaties,organisatieonderdelen of voorzieningen.

## Gebruik van het OIN

Het [=OIN=]-nummer wordt als identificerend nummer gebruikt in PKIoverheidcertificaten (authenticatie), in de adressering en routering van berichten, en in autorisatietabellen. Organisaties mogen het [=OIN=] of [=SubOIN=] gebruiken voor identificatie van organisaties en organisatieonderdelen in het digitaal verkeer. Het overig gebruik van het [=OIN=] of [=SubOINs=] betreft:

- Authenticatie

- Autorisatie

- Adressering

- Routering



| **Functie**| **Definitie**| **Toelichting functie OIN** |
|---|---|---|
| [Identificatie (Identificeren)](https://www.noraonline.nl/wiki/Identificatie) | Het bekend maken van de identiteit van personen, organisaties of IT-voorzieningen. (Bron: *NORA 3.0 Principes voor samenwerking en dienstverlening)* | Het [=OIN=] of [=SubOIN=] is het identificerende nummer voor organisaties t.b.v. digitaal verkeer met de overheid.|
| [Authenticatie (Authenticeren)](https://www.noraonline.nl/wiki/Authenticatie) | Het aantonen dat degene die zich identificeert ook daadwerkelijk degene is die zich als zodanig voorgeeft: ben je het ook echt? Authenticatie noemt men ook wel verificatie van de identiteit. (Bron: *NORA 3.0 Principes voor samenwerking en dienstverlening)* | Het [=OIN=] of [=SubOIN=] wordt opgenomen in het subject serialNumber veld van het PKIoverheid certificaat. |
| [Autorisatie (Autoriseren)](https://www.noraonline.nl/wiki/Autorisatie) | Het proces van het toekennen van rechten voor de toegang tot geautomatiseerde functies en/of gegevens in ICT voorzieningen.| Het feit dat een organisatie over een [=OIN=] of SubOINs beschikt zegt niets over enige autorisatie op gegevens of informatie. Dit is voorbehouden aan de verstrekkende partij die dit zelf beoordeelt. Partijen die voorzieningen aanbieden kunnen zelf autorisatielijsten bijhouden waarin het [=OIN=] van geautoriseerde organisaties kan worden opgenomen. |
| **Adresseren** | Het aangeven van de ontvangende partij (en de verzendende partij) in het bericht.| Digikoppeling schrijft b.v. voor dat het [=OIN=] of [=SubOIN=] wordt gebruikt in de header voor adressering.|
| **Routeren** | Het doorsturen van een bericht aan de geadresseerde partij bijvoorbeeld via een routeringsregel of tabel.| Routering vertaalt het logische adres – het [=OIN=] of [=SubOIN=] – naar een fysiek endpoint (url). |



## Context Centrale OIN Raadpleegvoorziening ([=COR=])

In onderstaand diagram wordt de relatie tussen [=COR=] met de omgeving weergegeven.

![Context diagram OIN-raadpleegvoorziening en OIN spelregels](media/contextdiagram.jpg "Context diagram OIN-raadpleegvoorziening en OIN spelregels")

## Kaders en bronnen

De volgende kaders en bronnen zijn gehanteerd bij de uitwerking van het OIN-stelselv1 en v2:

- NORA is het kader voor de uitwerking van de Centrale OIN Raadpleegvoorziening.

- Memo OIN: *Gebruik van OIN, knelpunten en oplossingen Het memo met opleggers zijn op aangeboden aan de Regieraad Gegevens van 14 januari 2016. De stukken zijn schriftelijk besproken.

- [[[DK-Voorwaarden]]]: De Voorwaarden Digikoppeling bevatten de specifieke voorwaarden die gelden tussen Logius en [=Afnemers=] in het kader van Digikoppeling in aanvulling op de [[Algemene Voorwaarden Logius]], van toepassing op alle diensten van Logius.  

- [[[DK-Gebruiksvoorwaarden]]]: De Gebruiksvoorwaarden Digikoppeling bevatten de specifieke voorwaarden die gelden tussen Logius en [=Gebruikers=] in het kader van Digikoppeling in aanvulling op de [[Algemene Voorwaarden Logius]], van toepassing op alle diensten van Logius.

