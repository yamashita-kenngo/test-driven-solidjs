import { When, Then } from '@badeball/cypress-cucumber-preprocessor';

When ("I visit duckduckgo.com", () => {
  cy.visit("https://duckduckgo.com");
});

Then ("I should see the search input", () => {
  cy.get("#search_form_input_homepage").should("be.visible");
});