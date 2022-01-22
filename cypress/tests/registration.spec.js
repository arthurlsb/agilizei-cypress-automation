/// <reference types="cypress" />

import registration from '../support/pages/registration'
describe('Registration', () => {
  beforeEach(() => {
    cy.visit('/')
  })
  it('When I inform the data and finish, then the registration must be done', () => {
    registration.fillForm()
    registration.submitForm()
    registration.checkRegistrationSucessfully()
  })
})
