describe('Invite new people to staff', () => {
    it('Add staff member', () => {
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

      cy.get('ul.gh-nav-manage > li:nth-child(5) > a').click()
      cy.get('.gh-btn-green').click({"force": true})
      cy.get('[name="email"]').type('some-test-user@gmail.com').should('have.value', 'some-test-user@gmail.com')
      cy.get('.modal-footer > .gh-btn-green').click({"force": true})

    })
  })