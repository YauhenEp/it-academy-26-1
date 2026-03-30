import { test } from '@playwright/test';
import path from 'path';
import { LoginPage } from '../../page-objects/loginPage';

const filelLoginState = path.join(__dirname, '../../.auth/login.json');

test('Login with credentials', async ({ page }) => {
  let loginPage = new LoginPage(page);
  await loginPage.navigate('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await loginPage.login('Admin', 'admin123');
  await page.context().storageState({ path: filelLoginState });
});
