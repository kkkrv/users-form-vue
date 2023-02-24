import Antd from "ant-design-vue";
import StatusNotification from "@/components/status-notification/StatusNotification.vue";

describe("Button", () => {
  it("No notifications", () => {
    cy.mount(StatusNotification, {
      props: { isSuccess: null, error: null },
      global: {
        plugins: [Antd],
      },
    });
    cy.get('[role="alert"]').should("not.exist");
  });

  it("Success notifications displayed", () => {
    cy.mount(StatusNotification, {
      props: { isSuccess: true, error: null },
      global: {
        plugins: [Antd],
      },
    });
    cy.get('[role="alert"]')
      .should("exist")
      .and("contain.text", "User was added successfully")
      .and("not.contain.text", "Error occurred: Network error");
  });

  it("Error notifications displayed", () => {
    cy.mount(StatusNotification, {
      props: { isSuccess: false, error: "Network error" },
      global: {
        plugins: [Antd],
      },
    });
    cy.get('[role="alert"]')
      .should("exist")
      .and("contain.text", "Error occurred: Network error")
      .and("not.contain.text", "User was added successfully");
  });
});
