// https://docs.cypress.io/api/introduction/api.html
import { faker } from "@faker-js/faker";
import { getInputSelector } from "./utils/users.utils";
import { PlaceholdersEnum } from "./models/placeholder.enum";

describe("Add user form", () => {
  function addUser() {
    cy.get(getInputSelector(PlaceholdersEnum.Name)).type(faker.name.fullName());
    cy.get(getInputSelector(PlaceholdersEnum.Username)).type(
      faker.internet.userName()
    );
    cy.get(getInputSelector(PlaceholdersEnum.Email)).type(
      faker.internet.email()
    );
    cy.get(getInputSelector(PlaceholdersEnum.Phone)).type(
      faker.phone.number("+49 ### ########")
    );
    cy.get(getInputSelector(PlaceholdersEnum.CompanyName)).type(
      faker.company.name()
    );
    cy.get(getInputSelector(PlaceholdersEnum.CatchPhrase)).type(
      faker.lorem.sentence(5)
    );
    cy.get('button[type="submit"]').click();
  }

  beforeEach(() => {
    cy.visit("/");
  });

  it("add a new user", () => {
    addUser();
    cy.contains("User was added successfully");
    cy.get(getInputSelector(PlaceholdersEnum.Name)).should("have.value", "");
    cy.get(getInputSelector(PlaceholdersEnum.Username)).should(
      "have.value",
      ""
    );
    cy.get(getInputSelector(PlaceholdersEnum.Email)).should("have.value", "");
    cy.get(getInputSelector(PlaceholdersEnum.Phone)).should("have.value", "");
    cy.get(getInputSelector(PlaceholdersEnum.CompanyName)).should(
      "have.value",
      ""
    );
    cy.get(getInputSelector(PlaceholdersEnum.CatchPhrase)).should(
      "have.value",
      ""
    );
  });

  it("[Negative] submit without required fields", () => {
    cy.get(getInputSelector(PlaceholdersEnum.Name)).type(faker.name.fullName());
    cy.get(getInputSelector(PlaceholdersEnum.Username)).type(
      faker.internet.userName()
    );
    cy.get(getInputSelector(PlaceholdersEnum.CompanyName)).type(
      faker.company.name()
    );
    cy.get('button[type="submit"]').click();
    cy.get("User was added successfully").should("not.exist");
    cy.get("[role='alert']").should(
      "contain.text",
      "Please input your e-mail."
    );
    cy.get("[role='alert']").should(
      "contain.text",
      "Please input your phone number."
    );
  });
});
