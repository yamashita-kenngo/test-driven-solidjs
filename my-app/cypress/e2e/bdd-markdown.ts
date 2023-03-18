

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

