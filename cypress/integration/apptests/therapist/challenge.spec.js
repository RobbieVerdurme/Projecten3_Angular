describe('therapist challenges tests', function(){
    beforeEach(function(){
        cy.visit('/login');
        cy.get('[data-cy=username]').type('TestTh');
        cy.get('[data-cy=password]').type('P@ssword123');
        cy.get('[data-cy=login-button]').click();
    });
    /*
    it('create a new challenge', function(){
        cy.server();
        cy.route({
            method: 'GET',
            url: 'https://localhost:44384//api/category',
            status: 200,
            response: 'fixtures:category.json'
        });
        cy.get('[data-cy=add-challenge-button]').click();
        cy.wait(10000);
    });

    
    it('add challenge to client', function(){

    })
    */
});