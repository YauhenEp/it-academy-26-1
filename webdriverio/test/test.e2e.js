import homePage from '../pageobjects/home-page.js'
import loginPage from '../pageobjects/login-page.js'
import { WRONG_CREDENTIAL_NOTIFICATION, CREDENTIALS } from '../helpers/constants.js'

describe('Onliner login', async function () {
  it('should get error motification "Неверный логин или пароль"', async () => {
        await homePage.navigate('https://www.onliner.by/');
        await homePage.header.goToLoginPage();
        await loginPage.login(CREDENTIALS.invalidCredentials.login, CREDENTIALS.invalidCredentials.password);
        await homePage.clickElement();
        await expect(await loginPage.wrongCredentialNotification).toHaveText(WRONG_CREDENTIAL_NOTIFICATION);
  });
});


