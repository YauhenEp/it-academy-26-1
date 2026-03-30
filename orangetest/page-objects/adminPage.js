import { Base } from './base';
import { Navigation } from './components/navigation';
import { Table } from './components/table';

class AdminPage extends Base {
  constructor(page) {
    super(page);
    this.navigation = new Navigation(page);
    this.table = new Table(page);
  }
  get adminNameField() {
    return this.page.locator('.oxd-form-row .oxd-input.oxd-input--active');
  }

  get employeeNameFiled() {
    return this.page.locator('[placeholder="Type for hints..."]');
  }

  get searchButton() {
    return this.page.locator('.oxd-button--secondary.orangehrm-left-space');
  }

  get numberOfItems() {
    return this.page.locator('.orangehrm-vertical-padding .oxd-text.oxd-text--span');
  }

  get resetButton() {
    return this.page.locator('button', { hasText: 'Reset' });
  }

  /**
   * 
   * @param {*} options 
   * @description This method fills search fields on the Admin page with provided options. It uses locators to find the fields and dropdowns, and then fills them with the corresponding values from the options object. The method also handles the selection of dropdown options based on the provided names and values.
   * @example
   * const searchOptions = {
   *   adminName: 'Admin',
   *   userRoleName: 'User Role',
   *   userRoleOption: 'Admin',
   *   employeeName: 'John Doe',
   *   statusDropdown: 'Status',
   *   statusDropdownOption: 'Enabled',
   * };
   * await adminPage.fillSearchFields(searchOptions);
   */
  async fillSearchFields(options) {
    await this.adminNameField.fill(options.adminName);
    await this.selectDropdownOption(options.userRoleName, options.userRoleOption);
    if (options.employeeName) {
      await this.employeeNameFiled(options.employeeName);
    }
    await this.selectDropdownOption(options.statusDropdown, options.statusDropdownOption);
  }

  /**
   * 
   * @param {*} options 
   */
  async searchWithData(options) {
    await this.fillSearchFields(options);
    await this.searchButton.click();
  }

  // async clickResetButton() {
  //     await this.resetButton.click()
  // }
}

export { AdminPage };
