//   my first test
//   test localhost:3000 with cypress e2e
describe ('my first test', () => {
  it('visits the app', () => {
    cy.visit('http://localhost:3000')
  })
});