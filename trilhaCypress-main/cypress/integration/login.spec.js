/// <reference types = "cypress" />

import LoginPage from '../support/pageObjects/login'
import MinhaContaPage from '../support/pageObjects/minhaConta'

//const data = require('../fixtures/user.json')
context('Login', () => {
  let data
  before(() => {
    cy.fixture('user').then(dadosUsuario => {
      data = dadosUsuario
    })
  })

  beforeEach(() => {
    cy.visit('http://lojaebac.ebaconline.art.br')
  })
  it('com o usuario cadastrado redirecionar para a pagina de Minha Conta', () => {
    cy.get('.icon-user-unfollow').click()
    //cy.get('#username').type('eshi')
    //cy.get('#password').type('teste@123')

    //CONST/FIXTURE
    //cy.get('#username').type(data.usuario)
    //cy.get('#password').type(data.senha)

    //PAGEOBJETCS
    //LoginPage.login(data.usuario, data.senha)
    //MinhaContaPage.getUsuarioLogado().should('contain', 'Welcome Eshi Cruz !')

    //COMMANDS
    cy.login(data.usuario, data.senha)
    cy.mensagemBoasVindas().should('contain', 'Welcome Eshi Cruz !')

    //cy.get('.woocommerce-form > .button').click()
    //cy.get('a > .hidden-xs').should('contain', 'Welcome Eshi Cruz !')
  })
})
