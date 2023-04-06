/// <reference types = "cypress" />

const { should } = require('chai')

context('Validar menus', () => {
  // Context fala sobre a funcionalidade
  it('clicando no link comprar deve direcionar para a pagina de compra', () => {
    // it é o cenario expecifico que esta sendo testado em cima da funcionalidade
    cy.visit('http://lojaebac.ebaconline.art.br') // para visitar a pagina que eu desejo testar
    cy.get('#primary-menu > .menu-item-629 > a').click() // cy.get para pegar o elemento da tela
    cy.contains('Produtos') // cy.contains para saber se na pagina contem elemento "x"
    cy.url().should('contain', '/shop')
  })
})
