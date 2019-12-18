describe("Multimed company list", () => {
  beforeEach(function() {
    cy.login();
  });

  //add company
  it("Add company", function() {
    //go to add company
    cy.visit("/bedrijf/registreren");

    //clear fields
    cy.get("[data-cy=CompanyContract]").clear();

    //fil in the fields
    cy.get("[data-cy=CompanyName]").type("TestCompany");
    cy.get("[data-cy=CompanySite]").type("TestCompany.be");
    cy.get("[data-cy=CompanyContract]").type("12/16/2069");
    cy.get("[data-cy=CompanyPhone]").type("049587765");
    cy.get("[data-cy=CompanyEmail]").type("TestCompanyTest@mail.com");
    cy.get("[data-cy=CompanyStreet]").type("TestCompanyStreet");
    cy.get("[data-cy=CompanyHouseNumber]").type("5");
    cy.get("[data-cy=CompanyPlace]").type("Gent");
    cy.get("[data-cy=CompanyPostalcode]").type("9000");
    cy.get("[data-cy=CompanyCountry]").type("Belgie");

    //click on add
    cy.get("[data-cy=AddCompany]").click();

    //TODO SHOULD URL REDIRECT ?
    cy.url().should("eq", "http://localhost:4200/bedrijf/lijst");
  });

    //edit company
    it("Edit company", function() {
      //go to add company
      cy.visit("/bedrijf/lijst");

      //get the added company
      //type in the filter
      cy.get("[data-cy=CompanyFilter]").type("TestCompany");

      //go to the company detail page
      //click on company
      cy.get("[data-cy=CompanyNameRow]")
      .first()
      .click()
      //click on edit
      cy.get("[data-cy=DetailEditCompany]").click();

      cy.wait(2000)
  
      //clear the fields
      cy.get("[data-cy=CompanyName]").clear();
      cy.get("[data-cy=CompanySite]").clear();
      cy.get("[data-cy=CompanyContract]").clear();
      cy.get("[data-cy=CompanyPhone]").clear();
      cy.get("[data-cy=CompanyEmail]").clear();
      cy.get("[data-cy=CompanyStreet]").clear();
      cy.get("[data-cy=CompanyHouseNumber]").clear();
      cy.get("[data-cy=CompanyPlace]").clear();
      cy.get("[data-cy=CompanyPostalcode]").clear();
      cy.get("[data-cy=CompanyCountry]").clear();
  
      //fill in the fields
      cy.get("[data-cy=CompanyName]").type("Multimed1");
      cy.get("[data-cy=CompanySite]").type("Testsite");
      cy.get("[data-cy=CompanyContract]").type("12/20/2070");
      cy.get("[data-cy=CompanyPhone]").type("0478995886");
      cy.get("[data-cy=CompanyEmail]").type("MultimedEmail@Test.com");
      cy.get("[data-cy=CompanyStreet]").type("StraatNaam");
      cy.get("[data-cy=CompanyHouseNumber]").type("28");
      cy.get("[data-cy=CompanyPlace]").type("GentForLife");
      cy.get("[data-cy=CompanyPostalcode]").type("9000");
      cy.get("[data-cy=CompanyCountry]").type("BelgieEEEEEEEEEEE");
  
      //click on edit
      cy.get("[data-cy=EditCompany]").click();
  
      cy.wait(2000)

      //check fields
      cy.get("[data-cy=CompanyName]").contains("Multimed1");
      cy.get("[data-cy=CompanyPhone]").contains("0478995886");
      cy.get("[data-cy=CompanyEmail]").contains("MultimedEmail@Test.com");
      cy.get("[data-cy=CompanyStreet]").contains("StraatNaam 28");
      cy.get("[data-cy=CompanyPostalcode]").contains(
        "9000 GentForLife BelgieEEEEEEEEEEE"
      );
      cy.get("[data-cy=CompanyContract]").contains("19-12-2070");
    });

  //Delete company
  it("Delete company", function() {
    //go to company
    cy.visit("http://localhost:4200/bedrijf/lijst");

    //get the added company
    //type in the filter
    cy.get("[data-cy=CompanyFilter]").type("Multimed1");

    //go to the company detail page
    //click on company
    cy.get("[data-cy=CompanyNameRow]")
    .first()
    .click();

    //click on edit en then delete
    cy.get("[data-cy=DetailEditCompany]").click()
    cy.get("[data-cy=DeleteCompany]").click()

  });

  //filter on company
  it("Filter on company", function() {
        //get all companies form mockdata
        cy.server();
        cy.route({
          method: "GET",
          url: "/api/Companies",
          status: 200,
          response: "fixture:companies.json"
        });

    //go to comany list page
    cy.visit("/bedrijf/lijst");

    //check if all companies are in the list
    cy.get("[data-cy=CompanyNameRow]").should("have.length", 2);

    //type in the filter
    cy.get("[data-cy=CompanyFilter]").type("Multimed");

    //check if filter works
    cy.get("[data-cy=CompanyNameRow]").should("have.length", 1);
  });

  //go to company detail
  it("Company details", function() {
    //mock
    cy.server();
    cy.route({
      method: "GET",
      url: "/api/Companies",
      status: 200,
      response: "fixture:companies.json"
    });

    //go to company list page
    cy.visit("/bedrijf/lijst");

    //mock
    cy.server();
    cy.route({
      method: "GET",
      url: "/api/Companies/1",
      status: 200,
      response: "fixture:company.json"
    });

    //go to the user detail
    cy.get("[data-cy=CompanyNameRow]")
      .first()
      .click();

    //url check
    cy.url().should("eq", "http://localhost:4200/bedrijf/1");

    //field check
    cy.get("[data-cy=CompanyName]").contains("Multimed");
    cy.get("[data-cy=CompanyMembers]").should("have.length", 1);
  });
});
