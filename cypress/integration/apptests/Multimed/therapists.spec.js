describe("Multimed therapist list", () => {
  beforeEach(function() {
    cy.login();
  });

  //add therapist
  it("Add Therapist", function() {
    //go to register Therapist
    cy.visit("/therapeut/registreren");

    //fil in the fields
    cy.get("[data-cy=TherapistUsername]").type("TestTherapist");
    cy.get("[data-cy=TherapistFirstname]").type("Therapist");
    cy.get("[data-cy=TherapistLastname]").type("Test");
    cy.get("[data-cy=TherapistEmail]").type("TestTherapist@mail.com");
    cy.get("[data-cy=TherapistWebsite]").type("TestTherapist.com");
    cy.get("[data-cy=TherapistWorkHours]").type("9-17");
    cy.get("[data-cy=TherapistPhone]").type("047899556");
    cy.get("[data-cy=TherapistCategory]").type("Ondergewicht");

    //click register
    cy.get("[data-cy=TherapistRegister]").click();

    //TODO SHOULD URL REDIRECT ?

    //go to list Therapists
    cy.visit("therapeut/lijst");

    //check if Therapist is added
    cy.get("[data-cy=TherapistRow]").contains("Therapist");
  });

  //Filter on therapists
  it("Filter on Therapists", function() {
    //go to therapist list page
    cy.visit("/therapeut/lijst");
    
    //get all therapist from mockdata

    //check if data is in the list
    cy.get("[data-cy=TherapistFirstnameRow]").should("have.length", 2);

    //type in the filter
    cy.get("[data-cy=TherapistFilter]").type("Jos");

    //check if filter works
    cy.get("[data-cy=TherapistFirstnameRow]").should("have.length", 1);
  });

  //get therapist details
  it("Therapist details", function() {
    //go to therapist list page
    cy.visit("/therapeut/lijst");

    //TODO Mockdata doesn't work
    cy.server();
    cy.route({
      method: "GET",
      url: "/api/therapeut/1",
      status: 200,
      response: "fixtures:therapist.json"
    });
    //go to therapist
    cy.get("[data-cy=TherapistFirstnameRow]")
      .first()
      .click();

    //check url
    cy.url().should("eq", "http://localhost:4200/therapeut/1");

    //check fields
    cy.get("[data-cy=TherapistFirstname]").contains("Ruben");
    cy.get("[data-cy=TherapistLastname]").contains("Grillaert");
    cy.get("[data-cy=TherapistClients]").should("have.length", 2);
  });
});
