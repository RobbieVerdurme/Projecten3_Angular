describe("Multimed Add user", () => {
    beforeEach(function() {
      cy.login();
    });

    //add user
    it("Add user", function(){
        //go to register user
        cy.visit("/gebruiker/registreren");

        //fil in the fields
        cy.get("[data-cy=UserUsername]").type("TestUser");
        cy.get("[data-cy=UserFirstname]").type("User");
        cy.get("[data-cy=UserLastname]").type("Test");
        cy.get("[data-cy=UserEmail]").type("TestUser@mail.com");
        cy.get("[data-cy=UserPhone]").type("047899556");
        cy.get("[data-cy=UserCategory]").type("Ondergewicht");

        //click register
        cy.get("[data-cy=UserRegister]").click();

        //TODO SHOULD URL REDIRECT ?

        //go to list users
        cy.visit("/gebruiker/lijst");

        //check if user is added
        cy.get("[data-cy=normalUserRow]").contains("User")
    });
});