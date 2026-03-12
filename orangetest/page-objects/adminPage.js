import { Base } from './base';
import {Navigation} from './components/navigation'
import {Table} from './components/table'

class AdminPage extends Base {
    constructor(page) {
        super(page);
        this.navigation = new Navigation(page)
        this.table = new Table(page)
    }
    get adminNameField() {
        return this.page.locator('.oxd-form-row .oxd-input.oxd-input--active')
    }

    get employeeNameFiled() {
        return this.page.locator('[placeholder="Type for hints..."]')
    }

    get searchButton(){
        return this.page.locator('.oxd-button--secondary.orangehrm-left-space')
    }

    get searchResults() {
        return this.page.locator('.orangehrm-vertical-padding .oxd-text.oxd-text--span')
    }

    get resetButton() {
        return this.page.locator("button", {hasText: "Reset"})
    }

    async fillSearchFields(options) {
        await this.adminNameField.fill(options.adminName);
        await this.selectDropdownOption(options.userRoleName, options.userRoleOption);
        if(options.employeeName) {
            await this.employeeNameFiled(options.employeeName)
        }
        await this.selectDropdownOption(options.statusDropdown, options.statusDropdownOption);
    }

    async searchWithData(options) {
        await this.fillSearchFields(options);
        await this.searchButton.click();
    }

    // async clickResetButton() {
    //     await this.resetButton.click()
    // }
}

export {AdminPage}