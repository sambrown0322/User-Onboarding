describe("Name button", () => {
  it("can navigate to site", () => {
    cy.visit("http://localhost:3000");
    cy.url().should("include", "localhost");
  });
  it("name works", () => {
    cy.get("#name").type("Sam").should("have.value", "Sam");
  });
  it("email works", () => {
    cy.get("#email")
      .type("sambrown0322@yahoo.com")
      .should("have.value", "sambrown0322@yahoo.com");
  });
  it("password works", () => {
    cy.get("#password").type("poiuy999").should("have.value", "poiuy999");
  });
  it("TOS works", () => {
    cy.get(":nth-child(8) > input").click();
  });
  it("Submit", () => {
    cy.get("button").click();
    cy.get("#name").should("have.value", "");
    cy.get("#email").should("have.value", "");
    cy.get("#password").should("have.value", "");
    cy.get(":nth-child(8) > input").should("not.be.checked");
  });
});
describe("Validation", () => {
  it("Validation", () => {
    cy.get("#name").type("s{backspace}");
    cy.get("#errName").should(
      "have.text",
      "Name must be at least 3 characters"
    );
    cy.get("#email").type("s{backspace}");
    cy.get("#errEmail").should("have.text", "Email is required");
    cy.get("#password").type("s{backspace}");
    cy.get("#errPassword").should(
      "have.text",
      "Password must be at least 8 characters long"
    );
  });
});
