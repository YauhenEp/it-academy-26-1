class Homepage {
  constructor(page) {
    this.page = page;
    this.url = 'https://playwright.dev/'; // Use your desired URL
  }

  async navigate() {
    await this.page.goto(this.url);
  }

  async getTitle() {
    return await this.page.title();
  }
}

module.exports = Homepage;