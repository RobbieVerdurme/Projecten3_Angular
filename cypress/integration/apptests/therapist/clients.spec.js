// Testing list and details of the therapist its clients

describe('therapist clients tests', function(){
    beforeEach(function(){
        cy.visit('/login');
        cy.get('[data-cy=username]').type('TestTh');
        cy.get('[data-cy=password]').type('P@ssword123');
        cy.get('[data-cy=login-button]').click();
        cy.server();
        cy.route({
            method: 'GET',
            url: '/api/therapist/0',
            status: 200,
            response: 'fixtures:therapist.json'
        });
        cy.get('[data-cy=klanten-button]').click();
    });

    it('show and filter clients', function(){
        cy.get('[data-cy=normalUserRow]').should('have.length', 2);
        cy.get('[data-cy=normalUserFilter]').type('Jos');
        cy.get('[data-cy=normalUserRow]').should('have.length', 1);
    })

    it('get client details', function(){
        cy.server();
        cy.route({
            method: 'GET',
            url: '/api/users/0',
            status: 200,
            response: 'fixtures:user.json'
        })
        cy.get('[data-cy=normalUserRow]').first().click();
        cy.url().should('eq', 'http://localhost:4200/gebruiker/0');
        cy.get('[data-cy=userUsername]').contains("client1");
        cy.get('[data-cy=userChallenges]').should('have.length', 1);
    })
})