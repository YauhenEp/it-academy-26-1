import { Base } from '../base';

class Table extends Base {
    constructor(page) {
        super(page);
    }

    get tableHeaders() {
        return this.page.locator('.oxd-table-header .oxd-table-header-cell')
    }

    async getTableHeaderByName(headerName) {
        return this.page.locator('.oxd-table-header .oxd-table-header-cell', {hasText: headerName})
    }

    async getCheckboxByRowNumber(tableRowNumber) {
        return this.page.locator('.oxd-table-row').nth(tableRowNumber).locator('input[type="checkbox"]')
    }

    async getTrashIconByRowNumber(tableRowNumber) {
        return this.page.locator('.oxd-table-row').nth(tableRowNumber).locator('.bi-trash')
    }

    async getEditButtonByRowNumber(tableRowNumber) {
        return this.page.locator('.oxd-table-row').nth(tableRowNumber).locator('.bi-pencil-fill')
    }

    async getCheckboxByUsername(userName) {
        return this.page.locator(`//*[text()='${userName}']//ancestor::*[contains(@class,'oxd-table-row')]//*[contains(@class,'oxd-checkbox-input--active --label-righ')]`)
    }

    async getTrashIconByUsername(userName) {
        return this.page.locator(`//*[text()='${userName}']//ancestor::*[contains(@class,'oxd-table-row')]//*[contains(@class, 'bi-trash')]`)
    }

    async getEditButtonByUsername(userName) {
        return this.page.locator(`//*[text()='${userName}']//ancestor::*[contains(@class,'oxd-table-row')]//*[contains(@class, 'bi-pencil-fill')]`)
    }

    get addButton() {
        return this.page.locator('.oxd-button--secondary', {hasText: 'Add'})
    }

    get deleteSelectedButton() {
        return this.page.locator('.oxd-button--label-danger.orangehrm-horizontal-margin')
    }

    async checkCheckboxesByRowNumbers(tableRowNumbers) {
        for (const rowNumber of tableRowNumbers) {
            await (await this.getCheckboxByRowNumber(rowNumber)).click()
        }
    }   

    async checkCheckboxesByUsernames(userNames) {
        for (const userName of userNames) {
            await (await this.getCheckboxByUsername(userName)).click()
        }
    }
}

export {Table}