// Testing list and details of the therapist its clients

describe("Therapist Clients", () => {
    beforeEach(function() {
      cy.loginTherapist();
    });

    //test filter
    it("Filter on clients",function(){
        //get mockdata
        cy.server();
        cy.route({
            method: 'GET',
            url: '/api/therapist/clients/1',
            status: 200,
            response: 'fixture:users.json'
        })

              //go to clients page
      cy.visit("/gebruiker/lijst")

        //check if data is in the list
        cy.get('[data-cy=normalUserRow]').should('have.length', 2);

        //type in the filter
        cy.get('[data-cy=normalUserFilter]').type('Leanne');

        //check if filter works
        cy.get('[data-cy=normalUserRow]').should('have.length', 1);
    })

    //client details
    it("Client Details", function(){
              //go to clients page
      cy.visit("/gebruiker/lijst")

              //get mockdata
              cy.server();
              cy.route({
                  method: 'GET',
                  url: '/api/therapist/clients/1',
                  status: 200,
                  response: 'fixture:users.json'
              })

        //mock 
        cy.server();
        cy.route({
            method: 'GET',
            url: '/api/users/details/1',
            status: 200,
            response: 'fixture:user.json'
        })

        //go to the user detail
        cy.get('[data-cy=normalUserRow]').first().click();
        
        //url check
        cy.url().should('eq', 'http://localhost:4200/gebruiker/1');

        //field check
        cy.get('[data-cy=userUsername]').contains("Leanne");
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