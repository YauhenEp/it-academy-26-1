import { test, expect } from '@playwright/test';
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



test.describe('Admin page tests', () => {
    let adminPage;
    let loginPage;
    test.beforeEach(async ({page}) => {
        adminPage = new AdminPage(page);
        loginPage = new LoginPage(page)
        await loginPage.navigate('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        await loginPage.login('Admin', 'admin123');
    })

    test('should search admin be parameter', async ({page}) => {
        await adminPage.navigation.goToPageByName('Admin');
        await adminPage.searchWithData(adminSearchOption);
        await expect(await adminPage.searchResults).toHaveText('(1) Record Found', {timeout: 10000});
    })

    test('should reset all searches when press button reset', async () => {
        await adminPage.navigation.goToPageByName('Admin');
        const textBeforeSearch = await adminPage.getTextFromElement(adminPage.searchResults);
        await adminPage.searchWithData(adminSearchOption);
        await expect.soft(await adminPage.searchResults).toHaveText('(1) Record Found', {timeout: 10000});
        await adminPage.clickElement(await adminPage.resetButton);
        await expect(await adminPage.searchResults).toHaveText(textBeforeSearch);
    })
})