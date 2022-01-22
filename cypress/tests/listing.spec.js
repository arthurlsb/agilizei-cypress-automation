/// <reference types="cypress" />
import listing from '../support/pages/listing'

describe('Listagem', () => {
  it('When there are no entries, then the listing must be empty', () => {
    listing.fillWithEmptyList()
    cy.visit('/listagem.html')
    listing.checkIfListLengthIs0()
  })

  it('When there are one or more records, then the listing should display each record', () => {
    listing.fillWithListItens()
    cy.visit('/listagem.html')
    listing.checkIfListLengthIsGreaterThan0()
  })
})
