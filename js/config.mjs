import { loadRespecWithConfiguration } from "https://logius-standaarden.github.io/publicatie/respec/organisation-config.mjs";

loadRespecWithConfiguration({
  authors: [
       { 
        "company" : "Logius",
        "companyURL" : "http://www.logius.nl/",
        "name" : "Peter Haasnoot"
      },{ 
        "company" : "Logius",
        "companyURL" : "http://www.logius.nl/",
        "name" : "Pieter Hering"
      } ],
  editors: [ { 
        "company" : "Logius",
        "companyURL" : "http://www.logius.nl/",
        "name" : "Peter Haasnoot"
      } ],
  github: "https://github.com/Logius-standaarden/OIN-Stelsel",
  previousPublishVersion: "2.1.0",
  previousPublishDate: "2024-01-19",
  pubDomain: "dk",
  publishDate: "2025-06-10",
  publishVersion: "2.2.1",
  shortName: "oin",
  specStatus: "WV",
  specType: "HR"
});
