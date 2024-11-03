describe( "Assertions Tutorial", ()=>{


    it("Title Assertions",()=>{

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
          //You can use title method to compare the title of the URL by using should method
        cy.title().should('include','OrangeHRM')
        .and('eq','OrangeHRM')
        .and ('not.contain','orangee') //Negative scenario

    // checking the presence of an image using should keyword   
        cy.get('.orangehrm-login-branding > img').should('be.visible')
        
    })
})