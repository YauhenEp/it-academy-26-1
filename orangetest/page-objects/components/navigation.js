import { Base } from '../base';

class Navigation extends Base {
    constructor(page) {
        super(page);
    }

    get menuItems() {
        return this.page.locator(`//*[contains(@class, 'oxd-main-menu-item--name')]//ancestor::a`)
    }

    get searchField() {
        return this.page.locator('.oxd-main-menu-search .oxd-input.oxd-input--active')
    }

    get toggledSearchField() {
        return this.page.locator('.oxd-main-menu-search .oxd-input.oxd-input--active.toggled')
    }

    get openCloseMenuButton() {
        return this.page.locator('.oxd-icon-button.oxd-main-menu-button')
    }

    async getMenuItemByName(itemName) {
        const locatorText = `//*[contains(@class, 'oxd-main-menu-item--name') and text()='${itemName}']//ancestor::a`
        return this.page.locator(locatorText)
    }

    async openMenu() {
        if(await this.toggledSearchField.isVisible()) {
            await this.openCloseMenuButton.click();
        } 
    }

    async goToPageByName(menuItemName) {
        await this.openMenu();
        await (await this.getMenuItemByName(menuItemName)).click()
    }

    async goTopageByNumber(menuItemNumber) {
        await this.openMenu();
        await this.menuItems.nth(menuItemNumber).click()
    }
}

export {Navigation}