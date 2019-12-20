describe("Multimed therapist list", () => {
  beforeEach(function() {
    cy.login();
  });

  //add therapist
  it("Add Therapist", function() {
    //go to register Therapist
    cy.visit("/therapeut/registreren");

    //fil in the fields
    cy.get("[data-cy=TherapistFirstname]").type("TherapistTestingtest");
    cy.get("[data-cy=TherapistLastname]").type("Test");
    cy.get("[data-cy=TherapistEmail]").type("TestTherapist@mail.com");
    cy.get("[data-cy=TherapistWebsite]").type("TestTherapist.com");
    cy.get("[data-cy=TherapistWorkHours]").type("9-17");
    cy.get("[data-cy=TherapistPhone]").type("047899556");
    cy.get("[data-cy=TherapistType]").select("Diëtist")
    

    //click register
    cy.get("[data-cy=TherapistRegister]").click();

    //TODO SHOULD URL REDIRECT automaticly? to check
    cy.url().should("eq", "http://localhost:4200/therapeut/lijst");
  });

  //Filter on therapists
  it("Filter on Therapists", function() {
    //get all therapist from mockdata
    cy.server();
    cy.route({
      method: "GET",
      url: "/api/therapist/",
      status: 200,
      response: "fixture:therapists.json"
    });

    //go to therapist list page
    cy.visit("/therapeut/lijst");

    //check if data is in the list
    cy.get("[data-cy=TherapistFirstnameRow]").should("have.length", 2);

    //type in the filter
    cy.get("[data-cy=TherapistFilter]").type("Ruben");

    //check if filter works
    cy.get("[data-cy=TherapistFirstnameRow]").should("have.length", 1);
  });

  //get therapist details
  it("Therapist details", function() {
    //get mockdata from server
    cy.server();
    cy.route({
      method: "GET",
      url: "/api/therapist/1",
      status: 200,
      response: "fixture:therapist.json"
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
    cy.get("[data-cy=TherapistClients]").should("have.length", 1);
  });
});
