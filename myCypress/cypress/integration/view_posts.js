describe('View Post', () => {
    it('View list of posts', () => {
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

      cy.visit('posts')
      cy.get('.gh-canvas-title > a').should('have.text', 'Posts')
      
    })
  })