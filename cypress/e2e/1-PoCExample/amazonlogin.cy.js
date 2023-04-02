/// <reference types="cypress" />
describe('Amazon tests', () => {
  beforeEach(() => {
    // we include it in our beforeEach function so that it runs before each test
    cy.visit('https://amazon.in/')
    cy.url().should('eq','https://www.amazon.in/')
  })

  it('login to amazon and verify home page and signout', () => {
    cy.get('#nav-link-accountList > span').should('be.visible')
      .trigger('mouseover')
    cy.get('#nav-flyout-ya-signin > a[data-nav-role="signin"]').should('be.visible').click()
    cy.get('#continue').should('be.visible')
    cy.get('[name="email"]').type('nvnprk1@gmail.com').should('have.value','nvnprk1@gmail.com')
    cy.get('#continue').click()
    cy.get('[name="password"]').type('Demo@123')
    cy.get('#signInSubmit').should('be.visible').click()
    cy.location().should((location)=>{
      expect(location.href).to.eq('https://www.amazon.in/?ref_=nav_signin')
      expect(location.protocol).to.eq('https:')
    })
    cy.get('#nav-link-accountList-nav-line-1').contains('Hello, naveen')
    cy.get('#glow-ingress-line2').contains('Hyderabad 502319‌')
    cy.get('#nav-link-accountList > span').should('be.visible')
      .trigger('mouseover')
    cy.get('#nav-item-signout').click()  
    cy.get('#continue').should('be.visible')
  })

  it('Invalid login to amazon with invalid password and verify ',()=>{

    cy.get('#nav-link-accountList > span').should('be.visible')
      .trigger('mouseover')
    cy.get('#nav-flyout-ya-signin > a[data-nav-role="signin"]').should('be.visible').click()
    cy.get('#continue').should('be.visible')
    cy.get('[name="email"]').type('nvnprk1@gmail.com').should('have.value','nvnprk1@gmail.com')
    cy.get('#continue').click()
    cy.get('[name="password"]').type('Demo@1')
    cy.get('#signInSubmit').should('be.visible').click()
    cy.get('.a-alert-heading').contains('There was a problem')
  })

})