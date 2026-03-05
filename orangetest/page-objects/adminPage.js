import { Base } from './base';
import {Navigation} from './components/navigation'

class AdminPage extends Base {
    constructor(page) {
        super(page);
        this.navigation = new Navigation(page)
    }
    get adminNameField() {
        return '.oxd-form-row .oxd-input.oxd-input--active'
    }

    get employeeNameFiled() {
        return '[placeholder="Type for hints..."]'
    }

    get searchButton(){
        return '.oxd-button--secondary.orangehrm-left-space'
    }

    get searchResults() {
        return this.page.locator('.orangehrm-vertical-padding .oxd-text.oxd-text--span')
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
}

export {AdminPage}