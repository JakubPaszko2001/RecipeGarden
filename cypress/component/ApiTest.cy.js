describe("Food Category Api Test", () => {
  it("Status chceck", () => {
    cy.request({
      method: "GET",
      url: "https://themealdb.p.rapidapi.com/categories.php",
      headers: {
        "X-RapidAPI-Key": "57607c4060msh8305edef8d177d9p1a088fjsnad865a1577b2",
        "X-RapidAPI-Host": "themealdb.p.rapidapi.com",
      },
    })
      .its("status")
      .should("equal", 200);
  });
  it("Food Category Array Test", () => {
    cy.request({
      method: "GET",
      url: "https://themealdb.p.rapidapi.com/categories.php",
      headers: {
        "X-RapidAPI-Key": "57607c4060msh8305edef8d177d9p1a088fjsnad865a1577b2",
        "X-RapidAPI-Host": "themealdb.p.rapidapi.com",
      },
    })
      .its("body")
      .its("categories")
      .should("have.length", 14);
  });
});

describe("Popular Food Test", () => {
  it("Status chceck", () => {
    cy.request({
      method: "GET",
      url: "https://themealdb.p.rapidapi.com/latest.php",
      headers: {
        "X-RapidAPI-Key": "57607c4060msh8305edef8d177d9p1a088fjsnad865a1577b2",
        "X-RapidAPI-Host": "themealdb.p.rapidapi.com",
      },
    })
      .its("status")
      .should("equal", 200);
  });
});

describe("Specific Category Test", () => {
  it("Status chceck", () => {
    cy.request({
      method: "GET",
      url: "https://themealdb.p.rapidapi.com/filter.php",
      params: { c: "Beef" },
      headers: {
        "X-RapidAPI-Key": "57607c4060msh8305edef8d177d9p1a088fjsnad865a1577b2",
        "X-RapidAPI-Host": "themealdb.p.rapidapi.com",
      },
    })
      .its("status")
      .should("equal", 200);
  });
});

describe("Specific Dish Test", () => {
  it("Status chceck", () => {
    cy.request({
      method: "GET",
      url: "https://themealdb.p.rapidapi.com/lookup.php",
      params: { i: "53065" },
      headers: {
        "content-type": "application/octet-stream",
        "X-RapidAPI-Key": "57607c4060msh8305edef8d177d9p1a088fjsnad865a1577b2",
        "X-RapidAPI-Host": "themealdb.p.rapidapi.com",
      },
    })
      .its("status")
      .should("equal", 200);
  });
});
