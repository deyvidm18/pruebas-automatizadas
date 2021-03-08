describe('Create new tag', () => {
    it('create new tag', () => {
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

      cy.get('ul.gh-nav-manage > li:nth-child(4) > a').click()
      cy.get('.view-actions >.gh-btn-green').click({"force": true})
      cy.get('#tag-name')
      .type('name',{"force":true}).should('have.value', 'name')
      cy.get('#tag-description')
      .type('description', {"force":true}).should('have.value', 'description')
      cy.get('[name=accent-color]')
      .type('800080', {"force":true}).should('have.value', '800080')

      cy.get('.view-actions > button.gh-btn-blue').click({"force": true})

    })
  })