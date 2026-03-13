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
  previousPublishVersion: "2.2.2",
  previousPublishDate: "2024-01-19",
  pubDomain: "dk",
  publishDate: "2026-03-19",
  publishVersion: "3.0.0",
  shortName: "oin",
  specStatus: "WV",
  specType: "HR"
});
