describe("ApiTest.cy.tsx", () => {
  it("GET", () => {
    cy.request({
      method: "GET",
      url: "https://themealdb.p.rapidapi.com/categories.php",
      headers: {
        "X-RapidAPI-Key": "57607c4060msh8305edef8d177d9p1a088fjsnad865a1577b2",
        "X-RapidAPI-Host": "themealdb.p.rapidapi.com",
      },
    })
      .its("status")
      .should("equal", 200)
      .its("body")
      .its("categories")
      .should("have.length", 14);
  });
});
