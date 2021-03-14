describe("Login to the admin panel", () => {
  it("correct login", () => {
    cy.fixture("data.json").then((data) => {
      const user = data.correctLogin.username;
      const password = data.correctLogin.password;
      cy.visit("signin");
      cy.get(".email").type(user).should("have.value", user);
      cy.get(".password").type(password).should("have.value", password);
      cy.get(".login").click();
      cy.get("ul.gh-nav-manage > li.gh-nav-list-h:first-child").should("have.text", "Manage");
      cy.get("ul.gh-nav-settings > li.gh-nav-list-h:first-child").should("have.text", "Settings");
    });
  });

  it("bad user", () => {
    cy.fixture("data.json").then((data) => {
      const user = data.badUser.username;
      const password = data.badUser.password;
      cy.visit("signin");
      cy.get(".email").type(user).should("have.value", user);
      cy.get(".password").type(password).should("have.value", password);
      cy.get(".login").click();
      cy.get(".main-error").should('be.visible')
    });
  });

  it("bad user2", () => {
    cy.fixture("data.json").then((data) => {
      const user = data.badUser2.username;
      const password = data.badUser2.password;
      cy.visit("signin");
      cy.get(".email").type(user).should("have.value", user);
      cy.get(".password").type(password).should("have.value", password);
      cy.get(".login").click();
      cy.get(".main-error").should('be.visible')
    });
  });

  it("bad user3", () => {
    cy.fixture("data.json").then((data) => {
      const user = data.badUser3.username;
      const password = data.badUser3.password;
      cy.visit("signin");
      cy.get(".email").type(user).should("have.value", user);
      cy.get(".password").type(password).should("have.value", password);
      cy.get(".login").click();
      cy.get(".main-error").should('be.visible')
    });
  });

  it("bad user4", () => {
    cy.fixture("data.json").then((data) => {
      const user = data.badUser4.username;
      const password = data.badUser4.password;
      cy.visit("signin");
      cy.get(".email").type(user);
      cy.get(".password").type(password).should("have.value", password);
      cy.get(".login").click();
      cy.get(".main-error").should('be.visible')
    });
  });

  it("bad user5", () => {
    cy.fixture("data.json").then((data) => {
      const user = data.badUser5.username;
      const password = data.badUser5.password;
      cy.visit("signin");
      cy.get(".email").type(user).should("have.value", user);
      cy.get(".password").type(password).should("have.value", password);
      cy.get(".login").click();
      cy.get(".main-error").should('be.visible')
    });
  });

  it("bad password", () => {
    cy.fixture("data.json").then((data) => {
      const user = data.badPassword.username;
      const password = data.badPassword.password;
      cy.visit("signin");
      cy.get(".email").type(user).should("have.value", user);
      cy.get(".password").type(password).should("have.value", password);
      cy.get(".login").click();
      cy.get(".main-error").should('be.visible')
    });
  });

  it("bad password 2", () => {
    cy.fixture("data.json").then((data) => {
      const user = data.badPassword.username;
      const password = data.badPassword.password;
      cy.visit("signin");
      cy.get(".email").type(user).should("have.value", user);
      cy.get(".password").type(password).should("have.value", password);
      cy.get(".login").click();
      cy.get(".main-error").should('be.visible')
    });
  });

  it("bad password 3", () => {
    cy.fixture("data.json").then((data) => {
      const user = data.badPassword.username;
      const password = data.badPassword.password;
      cy.visit("signin");
      cy.get(".email").type(user).should("have.value", user);
      cy.get(".password").type(password).should("have.value", password);
      cy.get(".login").click();
      cy.get(".main-error").should('be.visible')
    });
  });

  it("bad password 4", () => {
    cy.fixture("data.json").then((data) => {
      const user = data.badPassword.username;
      const password = data.badPassword.password;
      cy.visit("signin");
      cy.get(".email").type(user).should("have.value", user);
      cy.get(".password").type(password).should("have.value", password);
      cy.get(".login").click();
      cy.get(".main-error").should('be.visible')
    });
  });

  it("bad password 5", () => {
    cy.fixture("data.json").then((data) => {
      const user = data.badPassword.username;
      const password = data.badPassword.password;
      cy.visit("signin");
      cy.get(".email").type(user).should("have.value", user);
      cy.get(".password").type(password);
      cy.get(".login").click();
      cy.get(".main-error").should('be.visible')
    });
  });

});
