// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import "./commands";

// Alternatively you can use CommonJS syntax:
// require('./commands')
const faker = require("faker");

before(() => {
  cy.readFile("cypress/fixtures/pool-data.json", (err, data) => {
    if (err) {
      return console.error(err);
    }
  }).then((data) => {
    data.username =  "deyvidm18@gmail.com";
    data.password= "m!K5K8V@HkFkPMr";
    data.description = faker.commerce.productName();
    data.description2 = faker.commerce.productName();
    data.description3 = faker.commerce.productName();
    data.description4 = faker.commerce.productName();
    data.description5 = faker.commerce.productName();
    data.name = faker.name.firstName();
    data.name2 = faker.name.firstName();
    data.name3 = faker.name.firstName();
    data.name4 = faker.name.firstName();
    data.name5 = faker.name.firstName();
    data.user = faker.internet.email();
    data.user2 = faker.internet.email();
    data.user3 = faker.internet.email();
    data.user4 = faker.internet.email();
    data.user5 = faker.internet.email();
    data.user6 = faker.internet.email();
    data.user7 = faker.internet.email();
    data.user8 = faker.internet.email();
    data.user9 = faker.internet.email();
    data.user10 = faker.internet.email()
    data.password2 = faker.internet.password();
    data.password3 = faker.internet.password();
    data.password4 = faker.internet.password();
    data.password5 = faker.internet.password();
    data.password6 = faker.internet.password();
    data.tag = faker.commerce.productName();
    data.tag2 = faker.commerce.productName();
    data.tag3 = faker.commerce.productName();
    data.tag4 = faker.commerce.productName();
    data.tag5 = faker.commerce.productName();
    data.tag6 = faker.commerce.productName();
    data.tag7 = faker.commerce.productName();
    data.tag8 = faker.commerce.productName();
    data.tag9 = faker.commerce.productName();
    data.tag10 = faker.commerce.productName();
    cy.writeFile("cypress/fixtures/pool-data.json", JSON.stringify(data));
  });
});
