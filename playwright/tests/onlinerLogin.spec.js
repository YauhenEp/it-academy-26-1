import {test, expect, beforeEach} from '@playwright/test';
import { HomePage } from '../page-object/homePage';
import { LoginPage } from '../page-object/loginPage';

test.describe('Onliner login', async function () {
  let homePage;
  let loginPage;
  beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    loginPage = new LoginPage(page);
    await homePage.navigate('https://www.onliner.by/');
    await homePage.header.goToLoginPage()
  });

  test('should get error motification "Неверный логин или пароль"', async ({ page }) => {
    await loginPage.login('login', 'password');
    await expect(await loginPage.errorMessage()).toHaveText('Неверный логин или пароль');
  });


  test('should login with valid credentials', async ({ page }) => {
    await loginPage.login('validlogin', 'validpassword');
    await expect(await loginPage.errorMessage()).toHaveText('Неверный логин или пароль');
  });
});
