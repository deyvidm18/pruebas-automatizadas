describe("Invite new people to staff", () => {
  it("Add staff member", () => {
    cy.fixture("pool-data.json").then((data) => {
      const user = data.username;
      const password = data.password;
      const email = data.user;
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

  it("Add staff member", () => {
    cy.fixture("pool-data.json").then((data) => {
      const user = data.username;
      const password = data.password;
      const email = data.user2;
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

  it("Add staff member", () => {
    cy.fixture("pool-data.json").then((data) => {
      const user = data.username;
      const password = data.password;
      const email = data.user3;
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

  it("Add staff member", () => {
    cy.fixture("pool-data.json").then((data) => {
      const user = data.username;
      const password = data.password;
      const email = data.user4;
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

  it("Add staff member", () => {
    cy.fixture("pool-data.json").then((data) => {
      const user = data.username;
      const password = data.password;
      const email = data.user5;
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

  it("Add staff member", () => {
    cy.fixture("pool-data.json").then((data) => {
      const user = data.username;
      const password = data.password;
      const email = data.user6;
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

  it("Add staff member", () => {
    cy.fixture("pool-data.json").then((data) => {
      const user = data.username;
      const password = data.password;
      const email = data.user7;
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

  it("Add staff member", () => {
    cy.fixture("pool-data.json").then((data) => {
      const user = data.username;
      const password = data.password;
      const email = data.user8;
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

  it("Add staff member", () => {
    cy.fixture("pool-data.json").then((data) => {
      const user = data.username;
      const password = data.password;
      const email = data.user9;
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

  it("Add staff member", () => {
    cy.fixture("pool-data.json").then((data) => {
      const user = data.username;
      const password = data.password;
      const email = data.user10;
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
    cy.fixture("pool-data.json").then((data) => {
      const user = data.username;
      const password = data.password;
      const email = data.name;
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
    cy.fixture("pool-data.json").then((data) => {
      const user = data.username;
      const password = data.password;
      const email = data.name2;
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
    cy.fixture("pool-data.json").then((data) => {
      const user = data.username;
      const password = data.password;
      const email = data.name3;
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
    cy.fixture("pool-data.json").then((data) => {
      const user = data.username;
      const password = data.password;
      const email = data.name4;
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
    cy.fixture("pool-data.json").then((data) => {
      const user = data.username;
      const password = data.password;
      const email = data.name5;
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
