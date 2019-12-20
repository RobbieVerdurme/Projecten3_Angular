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
        cy.get("[data-cy=categoryChallenge]").select("test")
        cy.get("[data-cy=niveauChallenge]").type("1");

        //click on button the make the challenge
        cy.get("[data-cy=MakeChallenge]").click();

        //TODO redirect url check?
    })

    //assign challenge to user
    it("Add challenge to user 1", function(){
        //mock doesn't work
        cy.server();
        cy.route({
            method: 'GET',
            url: '/api/users/details/1',
            status: 200,
            response: 'fixture:user.json'
        })

        //go to user details
        cy.visit("/gebruiker/1");

        //click on button to add challenges
        cy.get("[data-cy=AddChallenges]").click();

        //fill in data
        cy.get("[data-cy=SelectedCategory]").select("test")
        cy.get("[data-cy=SelectedLevel]").select("1")

        //click on add challenges
        cy.get("[data-cy=AddChallengeToUser]").click()

    });
});