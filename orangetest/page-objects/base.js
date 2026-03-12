class Base {
  constructor(page) {
    this.page = page;
  }
  async navigate(url) {
    return this.page.goto(url);
  }

  async getDropdownByName(dropdownName) {
    return this.page.locator(`//*[@class='oxd-label' and text()="${dropdownName}"]/../following-sibling::div//*[@class='oxd-select-text-input']`)
  }

  async getDropdownOptionByName(dropdownOption) {
    return this.page.locator(`//*[@class='oxd-select-option']/*[text()='${dropdownOption}']`)
  }

  async selectDropdownOption(dropdownName, selectedElement) {
    await (await this.getDropdownByName(dropdownName)).click();
    await (await this.getDropdownOptionByName(selectedElement)).click();
  }

  async clickElement(webElement) {
    await webElement.click()
  }

  async getTextFromElement(webElement) {
    return webElement.innerText();
  }
}

export { Base };