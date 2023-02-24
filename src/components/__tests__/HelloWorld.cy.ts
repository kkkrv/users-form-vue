import TheWelcome from "@/library/button/AppButton.vue";

describe("test1", () => {
  it("playground", () => {
    cy.mount(TheWelcome, { props: { msg: "Hello Cypress" } });
  });

  it("renders properly", () => {
    cy.mount(TheWelcome, { props: { msg: "Hello Cypress" } });
    cy.get("h1").should("contain", "Hello Cypress");
  });
});
