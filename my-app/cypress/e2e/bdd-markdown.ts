

// h1Render.spec.ts
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

let h1Text;

Given('I have a markdown text', () => {
  const markdown = '# This is an H1 header';
  cy.wrap(markdown).as('markdown');
});

When('I render the markdown text', () => {
  cy.visit('http://localhost:3000/markdown');
});

Then('I should see the H1 tag and H1 text', () => {
  cy.get('h1').should('have.length', 1);
  cy.get('h1').invoke('text').then((text) => {
    h1Text = text.trim();
    expect(h1Text).to.equal('This is an H1 header');
  });
});

Then("I should see the p tag and p text", () => {
  cy.get("p").should("be.visible"); // assert that the p tag is visible
  cy.get("p").contains("p text"); // assert that the p tag contains the expected text
});

Then("I should see the a tag and a text", () => {
  cy.get("a").should("be.visible"); // assert that the a tag is visible
  cy.get("a").contains("a text"); // assert that the a tag contains the expected text
});

Then("I should see the ul tag and ul text", () => {
  cy.get("ul").should("be.visible"); // assert that the ul tag is visible
  cy.get("ul").contains("ul text"); // assert that the ul tag contains the expected text
});

Then("I should see the li tag and li text", () => {
  cy.get("li").should("be.visible"); // assert that the li tag is visible
  cy.get("li").contains("li text"); // assert that the li tag contains the expected text
});


