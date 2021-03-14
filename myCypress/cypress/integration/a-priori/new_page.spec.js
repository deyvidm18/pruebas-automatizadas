describe("Create new page", () => {
  it("Create a new page to add content to the site", () => {
    cy.fixture("data.json").then((data) => {
      const user = data.correctLogin.username;
      const password = data.correctLogin.password;
      const title = data.title;
      cy.visit("signin");
      cy.get(".email").type(user).should("have.value", user);
      cy.get(".password").type(password).should("have.value", password);
      cy.get(".login").click();
      cy.get("ul.gh-nav-manage > li.gh-nav-list-h:first-child").should("have.text", "Manage");
      cy.get("ul.gh-nav-settings > li.gh-nav-list-h:first-child").should("have.text", "Settings");

      cy.get("ul.gh-nav-manage > li:nth-child(3) > a").click();
      cy.get(".view-actions >  .gh-btn-green").click();
      cy.get("textarea.gh-editor-title").type(title).should("have.value", title);
    });
  });

  it("Create a new page to add content to the site", () => {
    cy.fixture("data.json").then((data) => {
      const user = data.correctLogin.username;
      const password = data.correctLogin.password;
      const title = data.title2;
      cy.visit("signin");
      cy.get(".email").type(user).should("have.value", user);
      cy.get(".password").type(password).should("have.value", password);
      cy.get(".login").click();
      cy.get("ul.gh-nav-manage > li.gh-nav-list-h:first-child").should("have.text", "Manage");
      cy.get("ul.gh-nav-settings > li.gh-nav-list-h:first-child").should("have.text", "Settings");

      cy.get("ul.gh-nav-manage > li:nth-child(3) > a").click();
      cy.get(".view-actions >  .gh-btn-green").click();
      cy.get("textarea.gh-editor-title").type(title).should("have.value", title);
    });
  });

});
