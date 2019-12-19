// All tests for the authentication
describe('authentication tests', function(){
    it('redirect to login', function(){
        cy.visit('/welkom');
        cy.url().should('eq', 'http://localhost:4200/login');
    })

    //login as multimed account
    it('login as multimed', function(){
        cy.visit('/login');
        cy.get('[data-cy=username]').type('SofieV');
        cy.get('[data-cy=password]').type('P@ssword123');
        cy.get('[data-cy=login-button]').click();
        cy.url().should('eq', 'http://localhost:4200/welkom');
        cy.get('[data-cy=welkom]').contains('Welkom, SofieV');
    });

    //login as therapist
    it('login as therapist', function(){
        cy.visit('/login');
        cy.get('[data-cy=username]').type('TestTh');
        cy.get('[data-cy=password]').type('P@ssword123');
        cy.get('[data-cy=login-button]').click();
        cy.url().should('eq', 'http://localhost:4200/welkom');
        cy.get('[data-cy=welkom]').contains('Welkom, TestTh');
    });

    //login without filling fields
    it('fail to login', function(){
        cy.visit('/login');
        cy.get('[data-cy=login-button]').click();
        cy.url().should('eq', 'http://localhost:4200/login');
    });

    //logout
    it('logout after login', function(){
        cy.visit('/login');
        cy.get('[data-cy=username]').type('SofieV');
        cy.get('[data-cy=password]').type('P@ssword123');
        cy.get('[data-cy=login-button]').click();
        cy.get('[data-cy=logout-button]').click();
        cy.url().should('eq', 'http://localhost:4200/login');
    });
});