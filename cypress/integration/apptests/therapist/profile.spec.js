// tests for a therapist's profile
describe("Therapist Profile", () => {
    beforeEach(function() {
      cy.loginTherapist();
    });

    //profile page
    it("Check if everthing is filled in on profile page", function(){
        //go to profilepage
        cy.visit("/profile")

        //check if everyting is filled in
        cy.get("[data-cy=TherapistFirstname]").contains("Therapist")
        cy.get("[data-cy=TherapistLastname]").contains("De Peape")
        cy.get("[data-cy=TherapistEmail]").contains("TherapistDePeape@multimed.com")
        cy.get("[data-cy=TherapistPhone]").contains("0478995888")
        cy.get("[data-cy=Therapistwebsite]").contains("TherapistDePeape.be")
        //TODO Werkuren testen
        
        //check if everyting is visable
        cy.get('[data-cy=TherapistFirstname]').should('be.visible');
        cy.get('[data-cy=TherapistLastname]').should('be.visible');
        cy.get('[data-cy=TherapistEmail]').should('be.visible');
        cy.get('[data-cy=TherapistPhone]').should('be.visible');
        cy.get('[data-cy=Therapistwebsite]').should('be.visible');
        //TODO Werkuren testen
    });

    //edit profile
    it("Edit profile info", function(){
        //go to profilepage
        cy.visit("/profile")

        //click on edit profile wheel
        cy.get("[data-cy=EditProfile]").click()

        //change input in fields
        //cy.get("[data-cy=]").type("")
    });
});