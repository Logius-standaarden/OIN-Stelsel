# Data Architectuur

## Samenstelling OIN

De lengte van het [=OIN=] is 20 posities, omdat dit wordt opgenomen in het *subject serial number* veld van het PKIoverheid certificaat. Het [=OIN=] is opgebouwd uit de volgende elementen:



| **Element** | **Lengte**| **Waarde**|
|---|---|---|
| **Prefix**| 8 posities| Zie Prefix tabel|
| **Hoofdnummer** | 8 of 9 posities | Identificerend nummer *Dit kan ook alfanumeriek zijn, afhankelijk van het geraadpleegde register.* uit een register. Als het hoofdnummer een [=KvKnummer=] is, is het hoofdnummer 8 posities lang. |
| **Suffix**| 3 of 4 posities | Als het hoofdnummer 9 posities heeft dan is het suffix 000. Als het hoofdnummer 8 posities heeft dan is het suffix 0000.|



## Prefix tabel

Een aangesloten overheidsregister krijgt een prefix (per uniek nummer) als het register wordt toegevoegd aan het OIN-stelsel. Dit wordt ook een OIN register genoemd. De prefix tabel wordt als aparte lijst beheerd door de beheerder van het OIN-stelsel en wordt gepubliceerd op de website.



| **Prefix** | **Identificerend nummer** | **Bron**|
|------------|-----------------------------------------|---|
| **00000001** | [=RSIN=]| Handelsregister |
| **00000002** | Fi-nummer | Het fiscaal nummer wordt verstrekt door de Belastingdienst aan de organisatie zelf Het Fi-nummer kan worden gebruikt in het het geval voor onderdelen van de Staat der Nederlanden die niet ingeschreven in het Handelsregister zoals de Tweede Kamer der Staten-Generaal of de Algemene Rekenkamer. Het FI-nummer wordt verstrekt door de organisatie zelf |
| **00000003** | [=KvKnummer=]| Handelsregister Het [=KvKnummer=] wordt gebruikt door private partijen in de communicatie met de overheid. |
| **00000004** | subnummer | SubOIN register |
| **00000005** | vrij | nog aan te wijzen |
| **00000006** | Logius OIN Hoofdnummer | Door Logius uitgegeven OIN Hoofdnummers aan organisaties die in aanmerking komen voor een OIN maar waarvoor geen geschikt nummer uit de overige prefix categorieën beschikbaar is. (*) |
| **00000007** | BRIN nummer | De Basisregistratie Instellingen (BRIN) is een register van onderwijsinstellingen dat door DUO wordt beheerd in opdracht van het Ministerie van OCW.|
| **00000008** | Buitenlandse nummers| Op verzoek van een [=SubOIN-beheerder=] door Logius uitgegeven nummers voor buitenlandse organisaties die niet in het Handelsregister zijn ingeschreven|
| **00000009** | UZI-nummer| Het Unieke Zorgverlener Identificatie Register (UZI-register) is de organisatie die de unieke identificatie van zorgaanbieders en indicatieorganen in het elektronisch verkeer mogelijk maakt.|
| **00000099** | Test OIN's| Elke organisatie mag een test OIN gebruiken mits voorzien van deze prefix.|

 (*) *00000006 Logius OIN Hoofdnummer: Voor organisaties uit het caribisch deel van het Koninkrijk der Nederlanden is dit nummer opgebouwd als 4 posities landnummer gevolgd door 5 posities volgnummer, conform landentabel BRP.*


## Voorbeeld OIN structuur

Hieronder wordt de structuur van een aantal OIN registraties weergeven.

![Schematische weergave OIN structuur](media/OIN-structuur.png "Schematische weergave OIN structuur")

## SubOIN: een betekenisloos nummer

Een [=SubOIN=] is een *betekenisloos* nummer dat wordt gegeneerd tijdens de registratie. Betekenisloos houdt in dat het nummer zelf geen aanwijsbare relatie heeft met het OIN van de [=SubOIN-beheerder=]. De relatie is alleen te raadplegen via de [=COR=] API. Een [=SubOIN=] is een [=OIN=] voor entiteiten zonder rechtspersoonlijkheid, zoals een organisatie die niet is ingeschreven in het Handelsregister, een organisatie-onderdeel of een voorziening. Het nummer van een organisatie dat voorkomt in een aangesloten register wordt ook beschouwd als een [=OIN=].

Het prefix verwijst naar het OIN-register.

| **Element** | **Lengte** | **Waarde** |
|-----------------|------------|--------------------|
| **Prefix**| 8 posities | 00000004 |
| **Hoofdnummer** | 9 posities | Gegenereerd nummer |
| **Suffix**| 3 posities | 000|


<div class="note">

### Waarom hebben wij gekozen voor betekenisloze SubOINs?

In de discussie met betrokkenen is besproken op welke manier SubOINs worden vastgelegd. Er zijn twee alternatieven besproken:

1. Als basis het [=OIN=] van de rechtspersoon met een volgnummer van 3 cijfers in het suffix|
2. Een uniek betekenisloos nummer

 Wij hebben gekozen voor een betekenisloos nummer vanwege een aantal redenen:
 Gebruikmaken van een suffix heeft een beperking tot 999 volgnummers. Dit lijkt een voldoende groot aantal maar vanwege de regel dat eenmaal ingetrokken SubOINs nooit hergebruikt mogen worden is het bereiken van deze limiet niet ondenkbaar

 Het is niet onmogelijk dat organisatieonderdelen wijzigen van een juridische verantwoordelijke, of dat een samenwerkingsverband van samenstelling wijzigt. Met een volgnummerconstructie wordt de ontkoppeling van rechtspersoon en [=SubOIN-beheerder=] onmogelijk.

</div>

## Voorbeelden van OIN weergave in [=COR=] Web en [=COR=] API

### [=COR=] WEB

De [=COR=] Website retourneert een relevante attributen van een OIN-registratie. Hieronder twee schermvoorbeelden:

![Resultaat van het zoeken in de [=COR=] naar een organisatie met een OIN](media/CORWEB-OIN.png "Resultaat van het zoeken in de [=COR=] naar een organisatie met een OIN")
![Resultaat van het zoeken in de [=COR=] naar een voorziening](media/CORWEB-SUBOIN.png "Resultaat van het zoeken in de [=COR=] naar een voorziening" )

### [=COR=] API

Hieronder een voorbeeld van een REST-API call naar de [=COR=] API. In het voorbeeld wordt het OIN van de `Digilevering Integrator` opgevraagd, dit is een voorziening van Logius. Naast het OIN van de Digilevering Integrator, wordt ook een HAL referentie naar de SubOIN-Houder (in dit geval Logius) geretourneerd. Het gebruik van de API staat verder beschreven op de [COR API website](https://portaal.digikoppeling.nl/registers/corApi/index).

<aside class="example">
Voorbeeldaanroep van de COR API:

```
https://portaal.digikoppeling.nl/registers/api/v1/organisaties?naam=Digilevering Integrator
```
</aside>
 
<aside class="example">
Voorbeeldresultaat van de COR API:

```JSON
{
    "_links": {
        "self": {
            "href": "https://portaal.digikoppeling.nl/registers/api/v1/organisaties?naam=Digilevering Integrator",
            "type": "application/hal+json"
        }
    },
    "organisaties": [{
        "_links": {
            "self": {
                "href": "https://portaal.digikoppeling.nl/registers/api/v1/organisaties/00000004194049711000",
                "type": "application/hal+json"
            }
        },
        "oin": "00000004194049711000",
        "naam": "Logius (Digilevering Integrator)",
        "status": "Actief",
        "kvkNummer": null,
        "organisatieCode": null,
        "organisatieType": null,
        "afgifteDatum": "2017-08-23T22:00:00Z",
        "laatstAangepastDatum": "2017-08-24T09:57:11Z",
        "intrekDatum": null,
        "hoofdOIN": {
            "_links": {
                "self": {
                    "href": "https://portaal.digikoppeling.nl/registers/api/v1/organisaties/00000001822477348000",
                    "type": "application/hal+json"
                }
            }
        },
        "subOINs": null
    }]
}
```
</aside>
