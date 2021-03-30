# Bijlage C - Invulling OIN en Naam in het  PKIoverheidcertificaat

<aside class="note">

Onderstaande beschrijving is voorgelegd aan de TSP's voor verificatie.

</aside>

## Inleiding
Dit hoofdstuk beschrijft Invulling (Sub)OIN en Organisatienaam, en –onderdeel/voorziening/samenwerking in velden van het PKIO certificaat [[Eisen Pkioverheid]] [[PKI PvE]] )

| Field/Attribute  | C\*  |  |  |
| --- | --- | --- | --- |
| Subject.organizationName | V  | The full name of the subscriber's organization in accordance with the accepted document or Basic Registry  | The subscriber organization is the organization with which the TSP has entered into an agreement and on behalf of which the certificate holder (server) communicates or acts  |
| Subject.organizationalUnitName  | O  | Optional specification of an organizational entity. This attribute MUST NOT include a function indication or similar  | This attribute MAY appear several times. The field MUST contain a valid name of an organizational entity of the subscriber in accordance with an accepted document or registry.  |
| Subject.serialNumber  | O  | The TSP is responsible for safeguarding the uniqueness of the subject (service). The Subject.serialNumber MUST be used to identify the subject uniquely. The use of 20 positions is only allowed for OIN and HRN after additional arrangements with Logius  | The number is determined by the TSP and/or the government. The number can differ for each domain and can be used for several applications.  |

\*<span style="font-size:smaller">C=Criteria: V=Compulsory, O=Optional</span>

### Voorbeelden van invulling

In onderstaande voorbeelden wordt uitgegaan van de volgende (werkelijke) combinaties OIN + Organisatienaam

 | Organisatie  | OIN/SubOIN\*\*  |
 | -- | -- |
 | Gemeente Utrecht  | 00000001002220647000  |
 | RVO - Bouw Utrecht Facturen  | 00000004114202890000  |
 | Logius (Digilevering Integrator)  | 00000004194049711000  |
 | Munitax  | 00000004001094920000  |
 | Deloitte Global Tax Center (Europe)  | 00000008823631400000  |


\*\* <span style="font-size:smaller">Het OIN/SubOIN dient voor *identificatie* van een organisatie door een nummer. Het onderscheid of een OIN een (Hoofd)OIN of een SubOIN is in het gebruik in principe niet relevant.</span>

### voorbeelden uit de praktijk

<aside class="example">

**HoofdOIN**

 | Subject.OrganizationName  | Subject.organizationalUnitName  | Subject.serialNumber  |
 | -- | -- | -- |
 | **Gemeente Utrecht**  | (leeg)  | 00000001002220647000  |

**SubOIN (organisatieonderdeel)**

 | Subject.OrganizationName  | Subject.organizationalUnitName  | Subject.serialNumber  |
 | -- | -- | -- |
 | Rijksdienst voor Ondernemend Nederland  | **RVO - Bouw Utrecht Facturen**  | 00000004114202890000  |

**SubOIN (voorziening van een organisatie)**

 | Subject.OrganizationName  | Subject.organizationalUnitName  | Subject.serialNumber  |
 | --- | --- | --- |
 | Logius  | **Logius (Digilevering Integrator)**  | 00000004194049711000  |

**SubOIN (samenwerking(niet in [=HR=]) van meerdere organisaties,  met één verantwoordelijke partij)**

 | Subject.OrganizationName  | Subject.organizationalUnitName  | Subject.serialNumber  |
 | --- | --- | --- |
 | Gemeente Beuningen  | **Munitax**  | 00000004001094920000  |

**SubOIN (Buitenlandse bank, geen [=HR=] registratie)**

 | Subject.OrganizationName  | Subject.organizationalUnitName  | Subject.serialNumber  |
 | --- | --- | --- |
 | Belastingdienst-registratie buitenlandse banken  | **Deloitte Global Tax Center (Europe)**  | 00000008823631400000  |

</aside>

### Raadplegen OINs en SubOINS in de Centrale OIN Raadpleegvoorziening (COR)

![Screenshot van de Website van de [=COR=]](media/screenshotCOR.png "Screenshot van de website van de [=COR=]")

### Raadplegen via de COR API

De COR kent ook aan publiek toegankelijke REST API om OINs van organisaties te raadplegen. De COR API biedt meer raadpleegmogelijkheden dan de website. Zie voor meer informatie [=COR=].
