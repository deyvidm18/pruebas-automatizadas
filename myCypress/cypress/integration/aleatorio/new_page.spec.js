const faker = require("faker");
describe('Create new page', () => {
  
    it('Create a new page to add content to the site', () => {
      const title = faker.commerce.productName();
      cy.visit('signin')
      cy.get('.email')
      .type('deyvidm18@gmail.com').should('have.value', 'deyvidm18@gmail.com')
      cy.get('.password')
      .type('m!K5K8V@HkFkPMr').should('have.value', 'm!K5K8V@HkFkPMr')
      cy.get('.login').click()
      cy.get('ul.gh-nav-manage > li.gh-nav-list-h:first-child')
      .should('have.text', 'Manage')
      cy.get('ul.gh-nav-settings > li.gh-nav-list-h:first-child')
      .should('have.text', 'Settings')

      cy.get('ul.gh-nav-manage > li:nth-child(3) > a').click()
      cy.get('.gh-btn-green').click()
      cy.get('textarea.gh-editor-title').type(title).should('have.value', title)
    })

    it('Create a new page to add content to the site', () => {
      const title = faker.commerce.productName();
      cy.visit('signin')
      cy.get('.email')
      .type('deyvidm18@gmail.com').should('have.value', 'deyvidm18@gmail.com')
      cy.get('.password')
      .type('m!K5K8V@HkFkPMr').should('have.value', 'm!K5K8V@HkFkPMr')
      cy.get('.login').click()
      cy.get('ul.gh-nav-manage > li.gh-nav-list-h:first-child')
      .should('have.text', 'Manage')
      cy.get('ul.gh-nav-settings > li.gh-nav-list-h:first-child')
      .should('have.text', 'Settings')

      cy.get('ul.gh-nav-manage > li:nth-child(3) > a').click()
      cy.get('.gh-btn-green').click()
      cy.get('textarea.gh-editor-title').type(title).should('have.value', title)
    })

    it('Create a new page to add content to the site', () => {
      const title = faker.commerce.productName();
      cy.visit('signin')
      cy.get('.email')
      .type('deyvidm18@gmail.com').should('have.value', 'deyvidm18@gmail.com')
      cy.get('.password')
      .type('m!K5K8V@HkFkPMr').should('have.value', 'm!K5K8V@HkFkPMr')
      cy.get('.login').click()
      cy.get('ul.gh-nav-manage > li.gh-nav-list-h:first-child')
      .should('have.text', 'Manage')
      cy.get('ul.gh-nav-settings > li.gh-nav-list-h:first-child')
      .should('have.text', 'Settings')

      cy.get('ul.gh-nav-manage > li:nth-child(3) > a').click()
      cy.get('.gh-btn-green').click()
      cy.get('textarea.gh-editor-title').type(title).should('have.value', title)
    })

    it('Create a new page to add content to the site', () => {
      const title = faker.commerce.productName();
      cy.visit('signin')
      cy.get('.email')
      .type('deyvidm18@gmail.com').should('have.value', 'deyvidm18@gmail.com')
      cy.get('.password')
      .type('m!K5K8V@HkFkPMr').should('have.value', 'm!K5K8V@HkFkPMr')
      cy.get('.login').click()
      cy.get('ul.gh-nav-manage > li.gh-nav-list-h:first-child')
      .should('have.text', 'Manage')
      cy.get('ul.gh-nav-settings > li.gh-nav-list-h:first-child')
      .should('have.text', 'Settings')

      cy.get('ul.gh-nav-manage > li:nth-child(3) > a').click()
      cy.get('.gh-btn-green').click()
      cy.get('textarea.gh-editor-title').type(title).should('have.value', title)
    })

    it('Create a new page to add content to the site', () => {
      const title = faker.commerce.productName();
      cy.visit('signin')
      cy.get('.email')
      .type('deyvidm18@gmail.com').should('have.value', 'deyvidm18@gmail.com')
      cy.get('.password')
      .type('m!K5K8V@HkFkPMr').should('have.value', 'm!K5K8V@HkFkPMr')
      cy.get('.login').click()
      cy.get('ul.gh-nav-manage > li.gh-nav-list-h:first-child')
      .should('have.text', 'Manage')
      cy.get('ul.gh-nav-settings > li.gh-nav-list-h:first-child')
      .should('have.text', 'Settings')

      cy.get('ul.gh-nav-manage > li:nth-child(3) > a').click()
      cy.get('.gh-btn-green').click()
      cy.get('textarea.gh-editor-title').type(title).should('have.value', title)
    })

    it('Create a new page to add content to the site', () => {
      const title = faker.commerce.productName();
      cy.visit('signin')
      cy.get('.email')
      .type('deyvidm18@gmail.com').should('have.value', 'deyvidm18@gmail.com')
      cy.get('.password')
      .type('m!K5K8V@HkFkPMr').should('have.value', 'm!K5K8V@HkFkPMr')
      cy.get('.login').click()
      cy.get('ul.gh-nav-manage > li.gh-nav-list-h:first-child')
      .should('have.text', 'Manage')
      cy.get('ul.gh-nav-settings > li.gh-nav-list-h:first-child')
      .should('have.text', 'Settings')

      cy.get('ul.gh-nav-manage > li:nth-child(3) > a').click()
      cy.get('.gh-btn-green').click()
      cy.get('textarea.gh-editor-title').type(title).should('have.value', title)
    })

    it('Create a new page to add content to the site', () => {
      const title = faker.commerce.productName();
      cy.visit('signin')
      cy.get('.email')
      .type('deyvidm18@gmail.com').should('have.value', 'deyvidm18@gmail.com')
      cy.get('.password')
      .type('m!K5K8V@HkFkPMr').should('have.value', 'm!K5K8V@HkFkPMr')
      cy.get('.login').click()
      cy.get('ul.gh-nav-manage > li.gh-nav-list-h:first-child')
      .should('have.text', 'Manage')
      cy.get('ul.gh-nav-settings > li.gh-nav-list-h:first-child')
      .should('have.text', 'Settings')

      cy.get('ul.gh-nav-manage > li:nth-child(3) > a').click()
      cy.get('.gh-btn-green').click()
      cy.get('textarea.gh-editor-title').type(title).should('have.value', title)
    })

    it('Create a new page to add content to the site', () => {
      const title = faker.commerce.productName();
      cy.visit('signin')
      cy.get('.email')
      .type('deyvidm18@gmail.com').should('have.value', 'deyvidm18@gmail.com')
      cy.get('.password')
      .type('m!K5K8V@HkFkPMr').should('have.value', 'm!K5K8V@HkFkPMr')
      cy.get('.login').click()
      cy.get('ul.gh-nav-manage > li.gh-nav-list-h:first-child')
      .should('have.text', 'Manage')
      cy.get('ul.gh-nav-settings > li.gh-nav-list-h:first-child')
      .should('have.text', 'Settings')

      cy.get('ul.gh-nav-manage > li:nth-child(3) > a').click()
      cy.get('.gh-btn-green').click()
      cy.get('textarea.gh-editor-title').type(title).should('have.value', title)
    })

    it('Create a new page to add content to the site', () => {
      const title = faker.commerce.productName();
      cy.visit('signin')
      cy.get('.email')
      .type('deyvidm18@gmail.com').should('have.value', 'deyvidm18@gmail.com')
      cy.get('.password')
      .type('m!K5K8V@HkFkPMr').should('have.value', 'm!K5K8V@HkFkPMr')
      cy.get('.login').click()
      cy.get('ul.gh-nav-manage > li.gh-nav-list-h:first-child')
      .should('have.text', 'Manage')
      cy.get('ul.gh-nav-settings > li.gh-nav-list-h:first-child')
      .should('have.text', 'Settings')

      cy.get('ul.gh-nav-manage > li:nth-child(3) > a').click()
      cy.get('.gh-btn-green').click()
      cy.get('textarea.gh-editor-title').type(title).should('have.value', title)
    })

    it('Create a new page to add content to the site', () => {
      const title = faker.commerce.productName();
      cy.visit('signin')
      cy.get('.email')
      .type('deyvidm18@gmail.com').should('have.value', 'deyvidm18@gmail.com')
      cy.get('.password')
      .type('m!K5K8V@HkFkPMr').should('have.value', 'm!K5K8V@HkFkPMr')
      cy.get('.login').click()
      cy.get('ul.gh-nav-manage > li.gh-nav-list-h:first-child')
      .should('have.text', 'Manage')
      cy.get('ul.gh-nav-settings > li.gh-nav-list-h:first-child')
      .should('have.text', 'Settings')

      cy.get('ul.gh-nav-manage > li:nth-child(3) > a').click()
      cy.get('.gh-btn-green').click()
      cy.get('textarea.gh-editor-title').type(title).should('have.value', title)
    })

    it('Create a new page to add content to the site', () => {
      const title = faker.commerce.productName();
      cy.visit('signin')
      cy.get('.email')
      .type('deyvidm18@gmail.com').should('have.value', 'deyvidm18@gmail.com')
      cy.get('.password')
      .type('m!K5K8V@HkFkPMr').should('have.value', 'm!K5K8V@HkFkPMr')
      cy.get('.login').click()
      cy.get('ul.gh-nav-manage > li.gh-nav-list-h:first-child')
      .should('have.text', 'Manage')
      cy.get('ul.gh-nav-settings > li.gh-nav-list-h:first-child')
      .should('have.text', 'Settings')

      cy.get('ul.gh-nav-manage > li:nth-child(3) > a').click()
      cy.get('.gh-btn-green').click()
      cy.get('textarea.gh-editor-title').type(title).should('have.value', title)
    })

  })