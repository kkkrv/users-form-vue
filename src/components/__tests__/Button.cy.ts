import Antd from "ant-design-vue";
import AppButton from "@/library/button/AppButton.vue";

describe("Button", () => {
  it("renders properly with slot", () => {
    cy.mount(AppButton, {
      slots: { default: "New text" },
      global: {
        plugins: [Antd],
      },
    });
    cy.get("button").should("contain.text", "New text");
  });

  it("renders properly with default value", () => {
    cy.mount(AppButton, {
      global: {
        plugins: [Antd],
      },
    });
    cy.get("button").should("contain.text", "Submit");
  });
});
