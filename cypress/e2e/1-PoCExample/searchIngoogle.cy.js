/// <reference types="cypress" />
describe('example to search in Google and verify the result', () => {
  beforeEach(() => {
    // we include it in our beforeEach function so that it runs before each test
    cy.visit('https://www.google.co.in/')
  })

  it('Search in google for Cypress and verify the search result', () => {
    // We use the `cy.get()` command to get all elements that match the selector.
    // Then, we use `should` to assert that there are two matched items,
    // which are the two default items.
    
    cy.get('[name=q]').type('Cypress{enter}', { delay: 100 })
    cy.get('#result-stats').then((ele)=>{
      let results=ele.text().split(' ')[1];
        results = parseInt(results.replace(/,/g, ""));
        expect(results).to.be.gte(180000000);
    })

    cy.get('#result-stats > nobr').then((ele) => {
      let seconds = ele.text().split('(')[1];
      seconds=seconds.split(')')[0].split(' ')[0];
      cy.log(seconds+' seconds');
      expect(parseFloat(seconds)).to.be.lte(1.00);
      
    });
  })


})
