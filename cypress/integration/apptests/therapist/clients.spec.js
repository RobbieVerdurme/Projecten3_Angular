// Testing list and details of the therapist its clients

describe("Therapist Clients", () => {
    beforeEach(function() {
      cy.loginTherapist();

      //go to clients page
      cy.visit("/gebruiker/lijst")

      //TODO Mock data clients
    });

    //test filter
    it("Filter on clients",function(){
        //get mockdata

        //check if data is in the list
        cy.get('[data-cy=normalUserRow]').should('have.length', 2);

        //type in the filter
        cy.get('[data-cy=normalUserFilter]').type('Jos');

        //check if filter works
        cy.get('[data-cy=normalUserRow]').should('have.length', 1);
    })

    //client details
    it("Client Details", function(){
        //mock doesn't work
        cy.server();
        cy.route({
            method: 'GET',
            url: '/api/users/1',
            status: 200,
            response: 'fixtures:user.json'
        })

        //go to the user detail
        cy.get('[data-cy=normalUserRow]').first().click();
        
        //url check
        cy.url().should('eq', 'http://localhost:4200/gebruiker/1');

        //field check
        cy.get('[data-cy=userUsername]').contains("client1");
        cy.get('[data-cy=userChallenges]').should('have.length', 1);
    })
})

/* old foreach
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
*/