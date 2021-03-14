describe("Change the site description", () => {
  it("Change the description", () => {
    cy.fixture("data.json").then((data) => {
      const user = data.correctLogin.username;
      const password = data.correctLogin.password;
      const description = data.description;
      cy.visit("signin");
      cy.get(".email").type(user).should("have.value", user);
      cy.get(".password").type(password).should("have.value", password);
      cy.get(".login").click();
      cy.get("ul.gh-nav-manage > li.gh-nav-list-h:first-child").should("have.text", "Manage");
      cy.get("ul.gh-nav-settings > li.gh-nav-list-h:first-child").should("have.text", "Settings");
      cy.get("ul.gh-nav-settings > li:nth-child(2) > a").click();
      cy.get(".mt2 >.gh-setting-first .gh-setting-action .gh-btn:first-child").click({ force: true });
      cy.get("div.description-container>input.gh-input").clear({ force: true });
      cy.get("div.description-container>input.gh-input").type("Description").should("have.value", "Description");
      cy.get("button.gh-btn-blue").click();
    });
  });

  it("Change the description 2", () => {
    cy.fixture("data.json").then((data) => {
      const user = data.correctLogin.username;
      const password = data.correctLogin.password;
      const description = data.description2;
      cy.visit("signin");
      cy.get(".email").type(user).should("have.value", user);
      cy.get(".password").type(password).should("have.value", password);
      cy.get(".login").click();
      cy.get("ul.gh-nav-manage > li.gh-nav-list-h:first-child").should("have.text", "Manage");
      cy.get("ul.gh-nav-settings > li.gh-nav-list-h:first-child").should("have.text", "Settings");
      cy.get("ul.gh-nav-settings > li:nth-child(2) > a").click();
      cy.get(".mt2 >.gh-setting-first .gh-setting-action .gh-btn:first-child").click({ force: true });
      cy.get("div.description-container>input.gh-input").clear({ force: true });
      cy.get("div.description-container>input.gh-input").type("Description").should("have.value", "Description");
      cy.get("button.gh-btn-blue").click();
    });
  });

  it("Change the description 3", () => {
    cy.fixture("data.json").then((data) => {
      const user = data.correctLogin.username;
      const password = data.correctLogin.password;
      const description = data.description3;
      cy.visit("signin");
      cy.get(".email").type(user).should("have.value", user);
      cy.get(".password").type(password).should("have.value", password);
      cy.get(".login").click();
      cy.get("ul.gh-nav-manage > li.gh-nav-list-h:first-child").should("have.text", "Manage");
      cy.get("ul.gh-nav-settings > li.gh-nav-list-h:first-child").should("have.text", "Settings");
      cy.get("ul.gh-nav-settings > li:nth-child(2) > a").click();
      cy.get(".mt2 >.gh-setting-first .gh-setting-action .gh-btn:first-child").click({ force: true });
      cy.get("div.description-container>input.gh-input").clear({ force: true });
      cy.get("div.description-container>input.gh-input").type("Description").should("have.value", "Description");
      cy.get("button.gh-btn-blue").click();
    });
  });

});
