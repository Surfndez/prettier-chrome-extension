// Prevent redirects on GitHub and Stack Overflow
Cypress.on("window:before:load", win => (win.self = window.top));

describe("Prettier format button", () => {
  it("is injected on GitHub", () => {
    // Ignore known exceptions on GitHub
    Cypress.on(
      "uncaught:exception",
      error => !error.message.includes("System is not defined")
    );

    cy.visit("https://github.com/login");
  });

  it("is injected on Stack Overflow", () => {
    cy.visit("https://stackoverflow.com/questions/51875054");
  });
});
