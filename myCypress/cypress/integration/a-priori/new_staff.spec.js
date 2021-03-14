describe("Invite new people to staff", () => {
  it("Add staff member", () => {
    cy.fixture("data.json").then((data) => {
      const user = data.correctLogin.username;
      const password = data.correctLogin.password;
      const email = data.email;
      cy.visit("signin");
      cy.get(".email").type(user).should("have.value", user);
      cy.get(".password").type(password).should("have.value", password);
      cy.get(".login").click();
      cy.get("ul.gh-nav-manage > li.gh-nav-list-h:first-child").should("have.text", "Manage");
      cy.get("ul.gh-nav-settings > li.gh-nav-list-h:first-child").should("have.text", "Settings");

      cy.get("ul.gh-nav-manage > li:nth-child(5) > a").click();
      cy.get(".gh-btn-green").click({ force: true });
      cy.get("#new-user-email").type(email).should("have.value", email);
      cy.get(".modal-footer > .gh-btn-green").click({ force: true });
    });
  });

  it("Add staff member with bad email", () => {
    cy.fixture("data.json").then((data) => {
      const user = data.correctLogin.username;
      const password = data.correctLogin.password;
      const email = data.bad_email;
      cy.visit("signin");
      cy.get(".email").type(user).should("have.value", user);
      cy.get(".password").type(password).should("have.value", password);
      cy.get(".login").click();
      cy.get("ul.gh-nav-manage > li.gh-nav-list-h:first-child").should("have.text", "Manage");
      cy.get("ul.gh-nav-settings > li.gh-nav-list-h:first-child").should("have.text", "Settings");

      cy.get("ul.gh-nav-manage > li:nth-child(5) > a").click();
      cy.get(".gh-btn-green").click({ force: true });
      cy.get("#new-user-email").type(email).should("have.value", email);
      cy.get(".modal-footer > .gh-btn-green").click({ force: true });
      cy.get("p.response").should("have.text","\n    Invalid Email.\n\n    \n");
    });
  });

  it("Add staff member with bad email2", () => {
    cy.fixture("data.json").then((data) => {
      const user = data.correctLogin.username;
      const password = data.correctLogin.password;
      const email = data.bad_email2;
      cy.visit("signin");
      cy.get(".email").type(user).should("have.value", user);
      cy.get(".password").type(password).should("have.value", password);
      cy.get(".login").click();
      cy.get("ul.gh-nav-manage > li.gh-nav-list-h:first-child").should("have.text", "Manage");
      cy.get("ul.gh-nav-settings > li.gh-nav-list-h:first-child").should("have.text", "Settings");

      cy.get("ul.gh-nav-manage > li:nth-child(5) > a").click();
      cy.get(".gh-btn-green").click({ force: true });
      cy.get("#new-user-email").type(email).should("have.value", email);
      cy.get(".modal-footer > .gh-btn-green").click({ force: true });
      cy.get("p.response").should("have.text","\n    Invalid Email.\n\n    \n");
    });
  });

  it("Add staff member with bad email3", () => {
    cy.fixture("data.json").then((data) => {
      const user = data.correctLogin.username;
      const password = data.correctLogin.password;
      const email = data.bad_email3;
      cy.visit("signin");
      cy.get(".email").type(user).should("have.value", user);
      cy.get(".password").type(password).should("have.value", password);
      cy.get(".login").click();
      cy.get("ul.gh-nav-manage > li.gh-nav-list-h:first-child").should("have.text", "Manage");
      cy.get("ul.gh-nav-settings > li.gh-nav-list-h:first-child").should("have.text", "Settings");

      cy.get("ul.gh-nav-manage > li:nth-child(5) > a").click();
      cy.get(".gh-btn-green").click({ force: true });
      cy.get("#new-user-email").type(email).should("have.value", email);
      cy.get(".modal-footer > .gh-btn-green").click({ force: true });
      cy.get("p.response").should("have.text","\n    Invalid Email.\n\n    \n");
    });
  });


});
