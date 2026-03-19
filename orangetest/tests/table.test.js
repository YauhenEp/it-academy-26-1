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



test.describe.only('Table tests', () => {
    let adminPage;
    let loginPage;
    test.beforeEach(async ({page}) => {
        adminPage = new AdminPage(page);
        loginPage = new LoginPage(page)
        await loginPage.navigate('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        await loginPage.login('Admin', 'admin123');
    })

    test('should check tables', async ({page}) => {
        await adminPage.navigation.goToPageByName('Admin');
        await adminPage.table.checkCheckboxesByUsernames(['FMLName1', 'FMLName', 'Jobinsam@6742']);
        await expect(await adminPage.searchResults).toHaveText('(3) Records Selected', {timeout: 10000});
        await expect(await adminPage.table.deleteSelectedButton).toBeVisible();
    })

    test('should be visible delete selection button on the PIM page', async ({page}) => {
        await adminPage.navigation.goToPageByName('PIM');
        await adminPage.table.checkCheckboxesByRowNumbers([1, 2, 3]);
        await expect(await adminPage.searchResults).toHaveText('(3) Records Selected', {timeout: 10000});
        await expect(await adminPage.table.deleteSelectedButton).toBeVisible();
    })

    test('should remove item from table', async ({page}) => {
        await adminPage.navigation.goToPageByName('Recruitment');
        const numberItemsBeforeDelete = await adminPage.getTextFromElement(adminPage.numberOfItems);
        await adminPage.table.deleteItemFromTableByRowNumber(0);
        await expect(await adminPage.getTextFromElement(adminPage.numberOfItems)).toEqual(numberItemsBeforeDelete);
    })
})