Cypress.Commands.add('goToLoginPage', () => {
    cy.get('.header-style__underlay').click();
    cy.get('.header-style__bottom .header-style__link.header-style__link_primary').click();
})