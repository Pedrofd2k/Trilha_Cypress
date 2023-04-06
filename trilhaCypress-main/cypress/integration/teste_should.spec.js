/// <reference types = "cypress" />

context('Validar menus', () => {
  // Context fala sobre a funcionalidade
  it('clicando no link comprar deve direcionar para a pagina de compra', () => {
    cy.visit('http://lojaebac.ebaconline.art.br')
    //ALIAS para dar nome ao elemento
    //cy.get('#primary-menu > .menu-item-629 > a').contains('Comprar')
    //cy.get('#primary-menu > .menu-item-629 > a').click()

    cy.get('#primary-menu > .menu-item-629 > a').as('comprarMenuLink')
    //cy.get('@comprarMenuLink').contains('Comprar')
    //cy.get('@comprarMenuLink').click()

    //COMBINANDO ACOES
    //cy.get('@comprarMenuLink').contains('Comprar').click()
    cy.get('@comprarMenuLink')
      .contains('Comprar')
      .and('have.attr', 'href')
      .and('include', 'shop') // attr se ele contem o link
    cy.get('@comprarMenuLink').click()
    //cy.contains('Produtos')

    //SHOULD
    cy.get('.page-title').should('contain', 'Produtos')
    cy.url().should('contain', '/shop')
  })

  it('clicando no link conta deve direcionar para a pagina de login/cadastro', () => {
    cy.visit('http://lojaebac.ebaconline.art.br')
    cy.get('.icon-user-unfollow').click()
    cy.url().should('contain', '/my-account-2')
  })
})
