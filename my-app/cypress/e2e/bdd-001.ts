import { When, Then } from '@badeball/cypress-cucumber-preprocessor';

When ("I visit localhost:3000", () => {
  cy.visit("http://localhost:3000");
});

Then ("I should see 'Hello Solidjs'", () => {
  cy.contains("Hello Solidjs").should("be.visible");
});