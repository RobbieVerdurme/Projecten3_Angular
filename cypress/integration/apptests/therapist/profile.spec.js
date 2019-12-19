// tests for a therapist's profile
describe("Therapist Profile", () => {
    beforeEach(function() {
      cy.loginTherapist();
    });

    //profile page
    it("Profile page check", function(){
        //mock
        cy.server();
        cy.route({
            method: "GET",
            url: "/api/therapist/1",
            status: 200,
            response: "fixture:therapist.json"
        });

        //go to profilepage
        cy.visit("/therapeut/1")

        //check if everyting is filled in
        cy.get("[data-cy=TherapistFirstname]").contains("Ruben")
        cy.get("[data-cy=TherapistLastname]").contains("Grillaert")
        cy.get("[data-cy=TherapistEmail]").contains("ruben.grillaert.y1033@student.hogent.be")
        cy.get("[data-cy=TherapistPhone]").contains("0474139526")
        cy.get("[data-cy=Therapistwebsite]").contains("RubenGrillaert.be")
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

        //clear input
        cy.get("[data-cy=TherapistUsername]").clear()
        cy.get("[data-cy=TherapistFirstname]").clear()
        cy.get("[data-cy=TherapistLastname]").clear()
        cy.get("[data-cy=TherapistEmail]").clear()
        cy.get("[data-cy=TherapistWebsite]").clear()
        cy.get("[data-cy=TherapistPhone]").clear()

        //change input in fields
        cy.get("[data-cy=TherapistUsername]").type("TestTherapist");
        cy.get("[data-cy=TherapistFirstname]").type("TherapistTestingtest");
        cy.get("[data-cy=TherapistLastname]").type("Test");
        cy.get("[data-cy=TherapistEmail]").type("TestTherapist@mail.com");
        cy.get("[data-cy=TherapistWebsite]").type("TestTherapist.com");
        cy.get("[data-cy=TherapistPhone]").type("047899556");
        cy.get("[data-cy=TherapistCategory]").select("Diëtist")

        //click aanpassen
        cy.get("[data-cy=EditTherapist]").click()
        
        //check fields
        cy.get("[data-cy=TherapistUsername]").contains("TestTherapist");
        cy.get("[data-cy=TherapistFirstname]").contains("TherapistTestingtest");
        cy.get("[data-cy=TherapistLastname]").contains("Test");
        cy.get("[data-cy=TherapistEmail]").contains("TestTherapist@mail.com");
        cy.get("[data-cy=TherapistWebsite]").contains("TestTherapist.com");
        cy.get("[data-cy=TherapistPhone]").contains("047899556");
    });
});