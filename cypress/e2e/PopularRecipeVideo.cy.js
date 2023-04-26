describe("Popular Recipe Video check", () => {
  it("Login to Video to Logout", () => {
    cy.visit("/");
    cy.get("[data-cy=Email]").type("test@gmail.com");
    cy.get("[data-cy=Password]").type("zaq1@WSX");
    cy.get("[data-cy=loginRegisterButton]").click();
    cy.get("[data-cy=recipeVideo]").first().click();
    // cy.get("[data-cy=openHamburgerMenu]").click();
    // cy.get("[data-cy=logoutButton]").click();
  });
});
