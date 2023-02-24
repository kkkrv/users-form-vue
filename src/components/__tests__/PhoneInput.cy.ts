import Antd from "ant-design-vue";
import AppPhoneInput from "@/library/phone-input/AppPhoneInput.vue";

const PLUGINS = {
  plugins: [Antd],
};

describe("Phone Input", () => {
  it("apply mask correctly", () => {
    cy.mount(AppPhoneInput, {
      global: PLUGINS,
    });
    cy.get("input").type("12345678901").blur();
    cy.get("input").should("have.value", "+49 123 45678901");
  });

  it("not allow type letters", () => {
    cy.mount(AppPhoneInput, { global: PLUGINS });
    cy.get("input").type("aaahdkl0f").blur();
    cy.get("input").should("have.value", "+49 0");
  });

  it("not allow type more than max", () => {
    cy.mount(AppPhoneInput, { global: PLUGINS });
    cy.get("input").type("1111111111111111").blur();
    cy.get("input").should("have.value", "+49 111 11111111");
  });
});
