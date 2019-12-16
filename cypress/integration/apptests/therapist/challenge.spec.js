describe("Add Challenge as Therapist", () => {
    beforeEach(function() {
      cy.loginTherapist();
    });

    //add challenge
    it("Add new challenge", function(){
        //go to add challenge
        cy.visit("/challenge/add");

        //fill in the required items
        cy.get("[data-cy=TitleChallenge]").type("TitleChallengeTest");
        cy.get("[data-cy=DescriptionChallenge]").type("DescriptionChallengeTest");

        //click on button the make the challenge
        cy.get("[data-cy=MakeChallenge]").click();

        //go to the overview page

        //check if the challenge is there
        cy.get("[data-cy=TitleChallenge]").contains("TitleChallengeTest");
    })

    //assign challenge to user
    it("Add challenge to user 1", function(){
        //go to user details
        cy.visit("/gebruiker/1");

        //click on button to add challenges
        cy.get("[data-cy=AddChallenges]").click();

    });
/*
    it('create a new challenge', function(){
        cy.server();
        cy.route({
            method: 'GET',
            url: 'https://localhost:44384//api/category',
            status: 200,
            response: 'fixtures:category.json'
        });
        cy.get('[data-cy=add-challenge-button]').click();
        cy.wait(10000);
    });

    
    it('add challenge to client', function(){

    })
    */
});