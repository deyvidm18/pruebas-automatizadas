const faker = require("faker");
describe("Login to the admin panel", () => {
  it("bad user", () => {
    cy.fixture("data.json").then((data) => {
      const user = faker.internet.email();
      const password = "m!K5K8V@HkFkPMr";
      cy.visit("signin");
      cy.get(".email").type(user).should("have.value", user);
      cy.get(".password").type(password).should("have.value", password);
      cy.get(".login").click();
      cy.get(".main-error").should("be.visible");
    });
  });

  it("bad user", () => {
    cy.fixture("data.json").then((data) => {
      const user = faker.internet.email();
      const password = "m!K5K8V@HkFkPMr";
      cy.visit("signin");
      cy.get(".email").type(user).should("have.value", user);
      cy.get(".password").type(password).should("have.value", password);
      cy.get(".login").click();
      cy.get(".main-error").should("be.visible");
    });
  });

  it("bad user", () => {
    cy.fixture("data.json").then((data) => {
      const user = faker.internet.email();
      const password = "m!K5K8V@HkFkPMr";
      cy.visit("signin");
      cy.get(".email").type(user).should("have.value", user);
      cy.get(".password").type(password).should("have.value", password);
      cy.get(".login").click();
      cy.get(".main-error").should("be.visible");
    });
  });

  it("bad user", () => {
    cy.fixture("data.json").then((data) => {
      const user = faker.internet.email();
      const password = "m!K5K8V@HkFkPMr";
      cy.visit("signin");
      cy.get(".email").type(user).should("have.value", user);
      cy.get(".password").type(password).should("have.value", password);
      cy.get(".login").click();
      cy.get(".main-error").should("be.visible");
    });
  });

  it("bad user", () => {
    cy.fixture("data.json").then((data) => {
      const user = faker.internet.email();
      const password = "m!K5K8V@HkFkPMr";
      cy.visit("signin");
      cy.get(".email").type(user).should("have.value", user);
      cy.get(".password").type(password).should("have.value", password);
      cy.get(".login").click();
      cy.get(".main-error").should("be.visible");
    });
  });

  it("bad password", () => {
    cy.fixture("data.json").then((data) => {
      const user = 'deyvidm18@gmail.com';
      const password = faker.internet.password();
      cy.visit("signin");
      cy.get(".email").type(user).should("have.value", user);
      cy.get(".password").type(password).should("have.value", password);
      cy.get(".login").click();
      cy.get(".main-error").should("be.visible");
    });
  });

  it("bad password", () => {
    cy.fixture("data.json").then((data) => {
      const user = 'deyvidm18@gmail.com';
      const password = faker.internet.password();
      cy.visit("signin");
      cy.get(".email").type(user).should("have.value", user);
      cy.get(".password").type(password).should("have.value", password);
      cy.get(".login").click();
      cy.get(".main-error").should("be.visible");
    });
  });

  it("bad password", () => {
    cy.fixture("data.json").then((data) => {
      const user = 'deyvidm18@gmail.com';
      const password = faker.internet.password();
      cy.visit("signin");
      cy.get(".email").type(user).should("have.value", user);
      cy.get(".password").type(password).should("have.value", password);
      cy.get(".login").click();
      cy.get(".main-error").should("be.visible");
    });
  });

  it("bad password", () => {
    cy.fixture("data.json").then((data) => {
      const user = 'deyvidm18@gmail.com';
      const password = faker.internet.password();
      cy.visit("signin");
      cy.get(".email").type(user).should("have.value", user);
      cy.get(".password").type(password).should("have.value", password);
      cy.get(".login").click();
      cy.get(".main-error").should("be.visible");
    });
  });

  it("bad password", () => {
    cy.fixture("data.json").then((data) => {
      const user = 'deyvidm18@gmail.com';
      const password = faker.internet.password();
      cy.visit("signin");
      cy.get(".email").type(user).should("have.value", user);
      cy.get(".password").type(password).should("have.value", password);
      cy.get(".login").click();
      cy.get(".main-error").should("be.visible");
    });
  });

});
