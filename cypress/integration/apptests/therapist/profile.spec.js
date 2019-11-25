// tests for a therapist's profile
describe('multimed profile', function(){
    beforeEach(function(){
        cy.visit('/login');
        cy.get('[data-cy=username]').type('TestTh');
        cy.get('[data-cy=password]').type('P@ssword123');
        cy.get('[data-cy=login-button]').click();
    });

    it('navigate to profile', function(){
        cy.get('[data-cy=profile-button]').click();
        cy.url().should('eq', 'http://localhost:4200/profile');
    });

    it('check profile content', function(){
        cy.get('[data-cy=profile-button]').click();
        cy.get('[data-cy=profile-username]').contains("TestTh")
        cy.get('[data-cy=profile-firstname]').contains("test")
    });
})