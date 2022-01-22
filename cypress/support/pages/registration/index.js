const Chance = require('chance')
const chance = new Chance()

const el = require('./elements').ELEMENTS

class Registration {
  fillForm () {
    cy.get(el.firstName).type(chance.first())
    cy.get(el.lastName).type(chance.last())
    cy.get(el.adress).type(chance.address())
    cy.get(el.emailAdress).type(chance.email())
    cy.get(el.gender).check('m')
    cy.get(el.hobbies).check('Netflix')
    cy.get(el.hobbies).check('Dormir')
    cy.get(el.countries).select('Dinamarca', { force: true })
    cy.get(el.years).select('2006', { force: true })
    cy.get(el.months).select('Janeiro', { force: true })
    cy.get(el.days).select('8', { force: true })
    cy.get(el.firstpassword).type('Alunos@2021')
    cy.get(el.secondpassword).type('Alunos@2021')
  }

  submitForm () {
    cy.contains('Finalizar cadastro').click()
  }

  checkRegistrationSucessfully () {
    cy.url().should('contain', 'listagem')
  }
}

export default new Registration()
