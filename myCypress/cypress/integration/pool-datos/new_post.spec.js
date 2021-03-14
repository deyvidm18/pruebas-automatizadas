describe("Create new Post", () => {
  it("Create a new post to add content to the site", () => {
    cy.fixture("pool-data.json").then((data) => {
      const user = data.username;
      const password = data.password;
      const title = data.description;
      cy.visit("signin");
      cy.get(".email").type(user).should("have.value", user);
      cy.get(".password").type(password).should("have.value", password);
      cy.get(".login").click();
      cy.get("ul.gh-nav-manage > li.gh-nav-list-h:first-child").should("have.text", "Manage");
      cy.get("ul.gh-nav-settings > li.gh-nav-list-h:first-child").should("have.text", "Settings");

      cy.get("ul.gh-nav-manage > li:nth-child(2) > a:nth-child(2)").click();
      cy.get("textarea.gh-editor-title").type(title).should("have.value", title);
    });
  });

  it("Create a new post to add content to the site", () => {
    cy.fixture("pool-data.json").then((data) => {
      const user = data.username;
      const password = data.password;
      const title = data.description2;
      cy.visit("signin");
      cy.get(".email").type(user).should("have.value", user);
      cy.get(".password").type(password).should("have.value", password);
      cy.get(".login").click();
      cy.get("ul.gh-nav-manage > li.gh-nav-list-h:first-child").should("have.text", "Manage");
      cy.get("ul.gh-nav-settings > li.gh-nav-list-h:first-child").should("have.text", "Settings");

      cy.get("ul.gh-nav-manage > li:nth-child(2) > a:nth-child(2)").click();
      cy.get("textarea.gh-editor-title").type(title).should("have.value", title);
    });
  });

  it("Create a new post to add content to the site", () => {
    cy.fixture("pool-data.json").then((data) => {
      const user = data.username;
      const password = data.password;
      const title = data.description3;
      cy.visit("signin");
      cy.get(".email").type(user).should("have.value", user);
      cy.get(".password").type(password).should("have.value", password);
      cy.get(".login").click();
      cy.get("ul.gh-nav-manage > li.gh-nav-list-h:first-child").should("have.text", "Manage");
      cy.get("ul.gh-nav-settings > li.gh-nav-list-h:first-child").should("have.text", "Settings");

      cy.get("ul.gh-nav-manage > li:nth-child(2) > a:nth-child(2)").click();
      cy.get("textarea.gh-editor-title").type(title).should("have.value", title);
    });
  });

  it("Create a new post to add content to the site", () => {
    cy.fixture("pool-data.json").then((data) => {
      const user = data.username;
      const password = data.password;
      const title = data.description4;
      cy.visit("signin");
      cy.get(".email").type(user).should("have.value", user);
      cy.get(".password").type(password).should("have.value", password);
      cy.get(".login").click();
      cy.get("ul.gh-nav-manage > li.gh-nav-list-h:first-child").should("have.text", "Manage");
      cy.get("ul.gh-nav-settings > li.gh-nav-list-h:first-child").should("have.text", "Settings");

      cy.get("ul.gh-nav-manage > li:nth-child(2) > a:nth-child(2)").click();
      cy.get("textarea.gh-editor-title").type(title).should("have.value", title);
    });
  });

  it("Create a new post to add content to the site", () => {
    cy.fixture("pool-data.json").then((data) => {
      const user = data.username;
      const password = data.password;
      const title = data.description5;
      cy.visit("signin");
      cy.get(".email").type(user).should("have.value", user);
      cy.get(".password").type(password).should("have.value", password);
      cy.get(".login").click();
      cy.get("ul.gh-nav-manage > li.gh-nav-list-h:first-child").should("have.text", "Manage");
      cy.get("ul.gh-nav-settings > li.gh-nav-list-h:first-child").should("have.text", "Settings");

      cy.get("ul.gh-nav-manage > li:nth-child(2) > a:nth-child(2)").click();
      cy.get("textarea.gh-editor-title").type(title).should("have.value", title);
    });
  });

});
