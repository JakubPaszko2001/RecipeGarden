describe("Category check", () => {
  it("Login to Food Category to Logout", () => {
    cy.visit("/");
    cy.get("[data-cy=Email]").type("test@gmail.com");
    cy.get("[data-cy=Password]").type("zaq1@WSX");
    cy.get("[data-cy=loginRegisterButton]").click();
    cy.get("[data-cy=categoryElement]").first().click();
    // cy.get("[data-cy=openHamburgerMenu]").click();
    // cy.get("[data-cy=logoutButton]").click();
  });
});
describe("Dish check", () => {
  it("Login to Food Category to Dish", () => {
    cy.visit("/");
    cy.get("[data-cy=categoryElement]").first().click();
    cy.get("[data-cy=detailsButton]").first().click();
    // cy.get("[data-cy=openHamburgerMenu]").click();
    // cy.get("[data-cy=logoutButton]").click();
  });
});
