describe('Caso de prueba home ghost-first', function() {
    it('Ingresando ghost', function() {
        cy.visit('http://localhost:2368/ghost/#/signin');
		cy.wait(1000);
		useCaseAdmin();
		useCasePrintPostPageTags();
    })
})

function useCaseAdmin(){
	/*Home - Login*/
	cy.wait(1000);
	cy.screenshot('login-first');
	cy.wait(1000);
	cy.get('#ember8').type('ingwsanchezp@gmail.com');
	cy.wait(1000);
	cy.get('#ember10').type('ValePipe2021');
	cy.wait(1000);
	cy.get('#ember12').click();
	cy.wait(1000);
	cy.screenshot('ingress-first');
	cy.wait(1000);
}


function useCasePrintPostPageTags(){
	cy.get('.active').click();
	cy.wait(1000);
	cy.screenshot('create-post-first');
	cy.wait(1000);
	cy.get('a').eq(8).click();
	cy.wait(1000);
	cy.screenshot('create-web-page-first');
	cy.wait(1000);
	cy.get('a').eq(9).click();
	cy.wait(1000);
	cy.screenshot('create-tags-first');
	cy.wait(1000);
	cy.get('a').eq(10).click();
	cy.wait(1000);
	cy.screenshot('create-staff-first');
	cy.wait(1000);
	cy.get('a').eq(11).click();
	cy.wait(1000);
	cy.get('.gh-setting-action').find('button').each(($el, index, $list) => {
    	cy.get($el).click({force: true});
  	});         
	cy.wait(1000);
	cy.screenshot('general-first');
	cy.wait(1000);	
}

