import { test, expect, beforeEach } from '@playwright/test';
import {AdminPage} from '../page-objects/adminPage';
import {LoginPage} from '../page-objects/loginPage';

    const adminSearchOption = {
      adminName: 'Admin',
      userRoleName: 'User Role',
      userRoleOption: 'Admin',
      // employeeName: 'Robert James Schneider',
      statusDropdown: 'Status',
      statusDropdownOption: 'Enabled'
    }

let adminPage;
let loginPage;

test.describe('Admin page tests', () => {
beforeEach(async ({page}) => {
    adminPage = new AdminPage(page);
    loginPage = new LoginPage(page)
    await loginPage.navigate('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await loginPage.login('Admin', 'admin123');
})

test('should search admin be parameter', async ({page}) => {
    await adminPage.navigation.goToPageByName('Admin');
    await adminPage.searchWithData(adminSearchOption);
    await expect(await adminPage.searchResults.textContent()).to.contain('1');
})
})