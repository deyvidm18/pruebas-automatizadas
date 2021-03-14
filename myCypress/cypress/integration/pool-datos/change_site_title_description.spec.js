const faker = require("faker");
describe("Change the site description", () => {
 
  it("Change the description", () => {
    cy.fixture("pool-data").then((data) => {
      const description = data.description;
      cy.visit("signin");
      cy.get(".email").type("deyvidm18@gmail.com").should("have.value", "deyvidm18@gmail.com");
      cy.get(".password").type("m!K5K8V@HkFkPMr").should("have.value", "m!K5K8V@HkFkPMr");
      cy.get(".login").click();
      cy.get("ul.gh-nav-manage > li.gh-nav-list-h:first-child").should("have.text", "Manage");
      cy.get("ul.gh-nav-settings > li.gh-nav-list-h:first-child").should("have.text", "Settings");
      cy.get("ul.gh-nav-settings > li:nth-child(2) > a").click();
      cy.get(".mt2 >.gh-setting-first .gh-setting-action .gh-btn:first-child").click({ force: true });
      cy.get("div.description-container>input.gh-input").clear({ force: true });
      cy.get("div.description-container>input.gh-input").type(description).should("have.value", description);
      cy.get("button.gh-btn-blue").click();
    });
  });

  it("Change the description", () => {
    cy.fixture("pool-data").then((data) => {
      const description = data.description2;
      cy.visit("signin");
      cy.get(".email").type("deyvidm18@gmail.com").should("have.value", "deyvidm18@gmail.com");
      cy.get(".password").type("m!K5K8V@HkFkPMr").should("have.value", "m!K5K8V@HkFkPMr");
      cy.get(".login").click();
      cy.get("ul.gh-nav-manage > li.gh-nav-list-h:first-child").should("have.text", "Manage");
      cy.get("ul.gh-nav-settings > li.gh-nav-list-h:first-child").should("have.text", "Settings");
      cy.get("ul.gh-nav-settings > li:nth-child(2) > a").click();
      cy.get(".mt2 >.gh-setting-first .gh-setting-action .gh-btn:first-child").click({ force: true });
      cy.get("div.description-container>input.gh-input").clear({ force: true });
      cy.get("div.description-container>input.gh-input").type(description).should("have.value", description);
      cy.get("button.gh-btn-blue").click();
    });
  });

  it("Change the description", () => {
    cy.fixture("pool-data").then((data) => {
      const description = data.description3;
      cy.visit("signin");
      cy.get(".email").type("deyvidm18@gmail.com").should("have.value", "deyvidm18@gmail.com");
      cy.get(".password").type("m!K5K8V@HkFkPMr").should("have.value", "m!K5K8V@HkFkPMr");
      cy.get(".login").click();
      cy.get("ul.gh-nav-manage > li.gh-nav-list-h:first-child").should("have.text", "Manage");
      cy.get("ul.gh-nav-settings > li.gh-nav-list-h:first-child").should("have.text", "Settings");
      cy.get("ul.gh-nav-settings > li:nth-child(2) > a").click();
      cy.get(".mt2 >.gh-setting-first .gh-setting-action .gh-btn:first-child").click({ force: true });
      cy.get("div.description-container>input.gh-input").clear({ force: true });
      cy.get("div.description-container>input.gh-input").type(description).should("have.value", description);
      cy.get("button.gh-btn-blue").click();
    });
  });

  it("Change the description", () => {
    cy.fixture("pool-data").then((data) => {
      const description = data.description4;
      cy.visit("signin");
      cy.get(".email").type("deyvidm18@gmail.com").should("have.value", "deyvidm18@gmail.com");
      cy.get(".password").type("m!K5K8V@HkFkPMr").should("have.value", "m!K5K8V@HkFkPMr");
      cy.get(".login").click();
      cy.get("ul.gh-nav-manage > li.gh-nav-list-h:first-child").should("have.text", "Manage");
      cy.get("ul.gh-nav-settings > li.gh-nav-list-h:first-child").should("have.text", "Settings");
      cy.get("ul.gh-nav-settings > li:nth-child(2) > a").click();
      cy.get(".mt2 >.gh-setting-first .gh-setting-action .gh-btn:first-child").click({ force: true });
      cy.get("div.description-container>input.gh-input").clear({ force: true });
      cy.get("div.description-container>input.gh-input").type(description).should("have.value", description);
      cy.get("button.gh-btn-blue").click();
    });
  });

});
