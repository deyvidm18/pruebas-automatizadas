describe("Login to the admin panel", () => {
  it("bad user", () => {
    cy.fixture("pool-data.json").then((data) => {
      const user = data.user
      const password = data.password
      cy.visit("signin");
      cy.get(".email").type(user).should("have.value", user);
      cy.get(".password").type(password).should("have.value", password);
      cy.get(".login").click();
      cy.get(".main-error").should("be.visible");
    });
  });

  it("bad user", () => {
    cy.fixture("pool-data.json").then((data) => {
      const user = data.user2
      const password = data.password
      cy.visit("signin");
      cy.get(".email").type(user).should("have.value", user);
      cy.get(".password").type(password).should("have.value", password);
      cy.get(".login").click();
      cy.get(".main-error").should("be.visible");
    });
  });

  it("bad user", () => {
    cy.fixture("pool-data.json").then((data) => {
      const user = data.user3
      const password = data.password
      cy.visit("signin");
      cy.get(".email").type(user).should("have.value", user);
      cy.get(".password").type(password).should("have.value", password);
      cy.get(".login").click();
      cy.get(".main-error").should("be.visible");
    });
  });

  it("bad user", () => {
    cy.fixture("pool-data.json").then((data) => {
      const user = data.user4
      const password = data.password
      cy.visit("signin");
      cy.get(".email").type(user).should("have.value", user);
      cy.get(".password").type(password).should("have.value", password);
      cy.get(".login").click();
      cy.get(".main-error").should("be.visible");
    });
  });

  it("bad user", () => {
    cy.fixture("pool-data.json").then((data) => {
      const user = data.user5;
      const password = data.password
      cy.visit("signin");
      cy.get(".email").type(user).should("have.value", user);
      cy.get(".password").type(password).should("have.value", password);
      cy.get(".login").click();
      cy.get(".main-error").should("be.visible");
    });
  });

  it("bad password", () => {
    cy.fixture("pool-data.json").then((data) => {
      const user = 'deyvidm18@gmail.com';
      const password = data.password2;
      cy.visit("signin");
      cy.get(".email").type(user).should("have.value", user);
      cy.get(".password").type(password).should("have.value", password);
      cy.get(".login").click();
      cy.get(".main-error").should("be.visible");
    });
  });

  it("bad password", () => {
    cy.fixture("pool-data.json").then((data) => {
      const user = 'deyvidm18@gmail.com';
      const password = data.password3;
      cy.visit("signin");
      cy.get(".email").type(user).should("have.value", user);
      cy.get(".password").type(password).should("have.value", password);
      cy.get(".login").click();
      cy.get(".main-error").should("be.visible");
    });
  });

  it("bad password", () => {
    cy.fixture("pool-data.json").then((data) => {
      const user = 'deyvidm18@gmail.com';
      const password = data.password4;
      cy.visit("signin");
      cy.get(".email").type(user).should("have.value", user);
      cy.get(".password").type(password).should("have.value", password);
      cy.get(".login").click();
      cy.get(".main-error").should("be.visible");
    });
  });

  it("bad password", () => {
    cy.fixture("pool-data.json").then((data) => {
      const user = 'deyvidm18@gmail.com';
      const password = data.password5;
      cy.visit("signin");
      cy.get(".email").type(user).should("have.value", user);
      cy.get(".password").type(password).should("have.value", password);
      cy.get(".login").click();
      cy.get(".main-error").should("be.visible");
    });
  });

  it("bad password", () => {
    cy.fixture("pool-data.json").then((data) => {
      const user = 'deyvidm18@gmail.com';
      const password = data.password6;
      cy.visit("signin");
      cy.get(".email").type(user).should("have.value", user);
      cy.get(".password").type(password).should("have.value", password);
      cy.get(".login").click();
      cy.get(".main-error").should("be.visible");
    });
  });

});
