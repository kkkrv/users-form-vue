// https://docs.cypress.io/api/introduction/api.html
import { faker } from "@faker-js/faker";

describe("My First Test", () => {
  it("should add a new user", () => {
    cy.visit("/");
    cy.get('input[placeholder="Your username"]').type(faker.name.fullName());
    cy.get('input[placeholder="Your name"]').type(faker.internet.userName());
    cy.get('input[placeholder="example@mail.com"]').type(
      faker.internet.email()
    );
    cy.get('input[placeholder="+49 000 00000000"]').type(
      faker.phone.number("+49 ### ########")
    );
    cy.get('input[placeholder="Company name"]').type(faker.company.name());
    cy.get('input[placeholder="Some phrase..."]').type(faker.lorem.sentence(5));
    cy.get('button[type="submit"]').click();
    cy.contains("User was added successfully");
  });
});
