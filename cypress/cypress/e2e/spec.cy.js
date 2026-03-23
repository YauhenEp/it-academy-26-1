describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')
    cy.get('.dropdown-toggle').click()
    cy.get('.dropdown-menu > :nth-child(9) > a').click()
    cy.xpath('//h1').should('have.text', 'Misc')
    cy.get(':nth-child(1) > :nth-child(3) > a').click()
    cy.get('.pull-right > li > a').click()
    cy.origin('https://github.com/', () => {
      cy.get(`[data-content="Issues"]`).click()
    })
  })
})