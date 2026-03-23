describe('should get error motification "Неверный логин или пароль"', async () => {
  it('passes', async () => {
    await cy.visit('https://www.onliner.by/');
    // await cy.closeCookies();
    await cy.goToLoginPage();
    await cy.get('[placeholder="Ник или e-mail"]').type('Login Name');
    await cy.get('[placeholder="Пароль"]').type('Password');
    await cy.xpath('//*[contains(@class, "auth-button_primary")]').click();
    await cy.get('.auth-form__description_error').should('contain.text', 'Неверный логин или пароль');
  })
})