describe('Ejercicio de monkey web', function() {
    it('Llenado de campo y toma de opcion aleatoria', function() {
        cy.visit('https://losestudiantes.co');
        cy.wait(1000);
        randomClick(15);
    })
})
function randomClick(monkeysLeft) {

    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    };
	
	function getRandom(min, max) {
		return Math.random() * (max - min) + min;
	}

    var monkeysLeft = monkeysLeft;
	
    if(monkeysLeft > 0) {
        cy.get('a').then($links => {
            var randomLink = $links.get(getRandomInt(0, $links.length));
            if(!Cypress.dom.isHidden(randomLink)) {
              	cy.wrap(randomLink).click({force: true});
                monkeysLeft = monkeysLeft - 1;
            }
			setForm();
			randomClick(monkeysLeft);
        });
    }   
}

function setForm() {
		
	var randomEmail = Math.random();
	cy.get('#write-university-review').click();
	cy.get('input[name=firstname]').type('nombre');
	cy.wait(1000);
	cy.get('input[name=lastname]').type('apellido');
    cy.wait(1000);
	cy.get('input[name=email]').each(($el, index, $list) => {
    	cy.get($el).type('algo'+randomEmail+'@email.com');				
  	});
	cy.get('.css-1wa3eu0-placeholder').type('andes');
	cy.wait(1000);
	cy.get('.css-26l3qy-menu').type('{enter}');
	cy.get('input[name=password]').each(($el, index, $list) => {
    	cy.get($el).type('adminadmin');				
  	});
	cy.get('input[name=password2]').type('adminadmin');
	cy.get('input[type="checkbox"]').not('[disabled]').check().should('be.checked');
	cy.get('.hTWnfl').find('form').find('button').as('firstBtn');
    cy.get('@firstBtn').click();
	cy.get('.swal2-confirm').click();
	cy.wait(1000);
	cy.get('.loginButton').click();
	cy.wait(1000);
	cy.get('.websiteTitle').click();
	cy.wait(1000);
	
}