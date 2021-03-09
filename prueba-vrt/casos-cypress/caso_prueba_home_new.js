describe('Caso de prueba home ghost-first', function() {
    it('Ingresando ghost', function() {
        cy.visit('http://localhost:2368');
        cy.wait(1000);
        useCaseNavigate();
		cy.visit('http://localhost:2368/ghost/#/signin');
		cy.wait(1000);
		useCaseAdmin();
		useCaseCreatePost();
		useCaseCreatePage();
		useCaseStaff();
		useCaseCreateTags();
    })
})

function useCaseNavigate(){
	
	cy.wait(1000);
	cy.screenshot('home-new');
	cy.get('a').eq(1).click();
	cy.wait(1000);
	cy.get('a').eq(2).click();
	cy.wait(1000);
	cy.screenshot('help-new');
	cy.wait(1000);
	cy.get('a').eq(3).click();
	cy.wait(1000);
	cy.screenshot('author-new');
	cy.wait(1000);
	cy.get('a').eq(3).click();
	cy.wait(1000);
	cy.screenshot('tag-new');
	cy.wait(1000);

}

function useCaseAdmin(){
	/*Home - Login*/
	cy.wait(1000);
	cy.screenshot('login-new');
	cy.wait(1000);
	cy.get('#ember8').type('ingwsanchezp@gmail.com');
	cy.wait(1000);
	cy.get('#ember10').type('ValePipe2021');
	cy.wait(1000);
	cy.get('#ember12').click();
	cy.wait(1000);
	cy.screenshot('ingress-new');
	cy.wait(1000);
}

function useCaseCreatePost(){
	cy.get('#ember29').click();
	cy.wait(1000);
	/*cy.screenshot('create-post-first');
	cy.wait(1000);*/
	cy.get(".gh-editor-title").type('NuevoPost Two' + '{downarrow}');
        cy.wait(1000);
        cy.location().then((loc) => {
            let newLoc = ('' + loc).replaceAll('__', 'ghost');
            cy.log('URL of new post: ' + newLoc);
            cy.visit(newLoc);
            cy.wait(3000);
            cy.get(".koenig-editor__editor").type('Example the post with generate cypress two');
    });
	cy.wait(1000);
	cy.get('.gh-publishmenu-trigger').click();
	cy.wait(1000);
	cy.get('.gh-publishmenu-button').click({force: true});
	cy.wait(2000);

}

function useCaseCreatePage(){
	cy.get('.blue').click();
	cy.wait(1000);
	cy.get('a').eq(5).click();
	cy.wait(1000);
	Cypress.on('uncaught:exception', (err, runnable) => {
  		// returning false here prevents Cypress from
  		// failing the test
  		return false
	})
	cy.get('.gh-btn-green').click();
	cy.wait(1000);
	cy.get(".gh-editor-title").type('Web Page 1' + '{downarrow}');
        cy.wait(1000);
        cy.location().then((loca) => {
            let newLoca = ('' + loca).replaceAll('__', 'ghost');
            cy.log('URL of new post: ' + newLoca);
            cy.visit(newLoca);
            cy.wait(3000);
            cy.get(".koenig-editor__editor").type('Example the post with generate cypress two');
    });
	cy.wait(1000);
	cy.get('.gh-publishmenu-trigger').click();
	cy.wait(1000);
	cy.get('.gh-publishmenu-button').click({force: true});
	cy.wait(2000);
}

function useCaseCreateTags(){
	cy.get('a').eq(6).click();
	cy.wait(1000);
	cy.get('.gh-btn-green').click();
	cy.wait(1000);
	cy.get('#tag-name').click({force: true}).type('Tag one');
	cy.wait(1000);
	cy.get('#tag-slug').click({force: true});
	cy.wait(1000);
	cy.get('#tag-description').click({force: true}).type('example');
	cy.wait(1000);
	cy.get('.gh-btn-blue').click();
	cy.wait(1000);
}

function useCaseStaff(){
	cy.get('.blue').click();
	cy.wait(1000);
	cy.get('a').eq(7).click();
	cy.wait(1000);
	cy.get('.gh-btn-green').click();
	cy.wait(1000);
	cy.get('#new-user-email').click({force: true}).type('prueba@uno.com');
	cy.wait(1000);
	cy.get('.modal-footer').find('button').click({force: true});
	cy.wait(1000);
}
