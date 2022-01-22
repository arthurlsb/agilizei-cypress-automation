const el = require('./elements').ELEMENTS

class Listing {
  fillWithEmptyList () {
    cy.fixture('empty-listing').then(data => {
      window.localStorage.setItem('data', JSON.stringify(data))
    })
  }

  fillWithListItens () {
    cy.fixture('listing-with-items').then(data => {
      window.localStorage.setItem('data', JSON.stringify(data))
    })
  }

  checkIfListLengthIs0 () {
    cy.get(el.listingLines).should('have.length', 0)
  }

  checkIfListLengthIsGreaterThan0 () {
    cy.get(el.listingLines).should('have.lengthOf.greaterThan', 0)
  }
}

export default new Listing()
