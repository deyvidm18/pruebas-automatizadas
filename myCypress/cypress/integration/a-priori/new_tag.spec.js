describe("Create new tag", () => {
  it("create new tag", () => {
    cy.fixture("data.json").then((data) => {
      const user = data.correctLogin.username;
      const password = data.correctLogin.password;
      const tag = data.tag;
      const description = data.description;
      const color = data.color;
      cy.visit("signin");
      cy.get(".email").type(user).should("have.value", user);
      cy.get(".password").type(password).should("have.value", password);
      cy.get(".login").click();
      cy.get("ul.gh-nav-manage > li.gh-nav-list-h:first-child").should("have.text", "Manage");
      cy.get("ul.gh-nav-settings > li.gh-nav-list-h:first-child").should("have.text", "Settings");

      cy.get("ul.gh-nav-manage > li:nth-child(4) > a").click();
      cy.get(".view-actions >.gh-btn-green").click({ force: true });
      cy.get("#tag-name").type(tag, { force: true }).should("have.value", tag);
      cy.get("#tag-description").type(description, { force: true }).should("have.value", description);
      cy.get("[name=accent-color]").type(color, { force: true }).should("have.value", color);

      cy.get(".view-actions > button.gh-btn-blue").click({ force: true });
    });
  });

  it("create new tag", () => {
    cy.fixture("data.json").then((data) => {
      const user = data.correctLogin.username;
      const password = data.correctLogin.password;
      const tag = data.tag2;
      const description = data.description;
      const color = data.color;
      cy.visit("signin");
      cy.visit("signin");
      cy.get(".email").type(user).should("have.value", user);
      cy.get(".password").type(password).should("have.value", password);
      cy.get(".login").click();
      cy.get("ul.gh-nav-manage > li.gh-nav-list-h:first-child").should("have.text", "Manage");
      cy.get("ul.gh-nav-settings > li.gh-nav-list-h:first-child").should("have.text", "Settings");

      cy.get("ul.gh-nav-manage > li:nth-child(4) > a").click();
      cy.get(".view-actions >.gh-btn-green").click({ force: true });
      cy.get("#tag-name").type(tag, { force: true }).should("have.value", tag);
      cy.get("#tag-description").type(description, { force: true }).should("have.value", description);
      cy.get("[name=accent-color]").type(color, { force: true }).should("have.value", color);

      cy.get(".view-actions > button.gh-btn-blue").click({ force: true });
    });
  });

  it("create new tag", () => {
    cy.fixture("data.json").then((data) => {
      const user = data.correctLogin.username;
      const password = data.correctLogin.password;
      const tag = data.tag3;
      const description = data.description;
      const color = data.color;
      cy.visit("signin");
      cy.visit("signin");
      cy.get(".email").type(user).should("have.value", user);
      cy.get(".password").type(password).should("have.value", password);
      cy.get(".login").click();
      cy.get("ul.gh-nav-manage > li.gh-nav-list-h:first-child").should("have.text", "Manage");
      cy.get("ul.gh-nav-settings > li.gh-nav-list-h:first-child").should("have.text", "Settings");

      cy.get("ul.gh-nav-manage > li:nth-child(4) > a").click();
      cy.get(".view-actions >.gh-btn-green").click({ force: true });
      cy.get("#tag-name").type(tag, { force: true }).should("have.value", tag);
      cy.get("#tag-description").type(description, { force: true }).should("have.value", description);
      cy.get("[name=accent-color]").type(color, { force: true }).should("have.value", color);

      cy.get(".view-actions > button.gh-btn-blue").click({ force: true });
    });
  });

});
