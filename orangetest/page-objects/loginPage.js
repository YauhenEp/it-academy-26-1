import { Base } from './base';

class LoginPage extends Base {
  constructor(page) {
    super(page);
  }

  get usernameField() {
    return '[name="username"]';
  }

  get passwordField() {
    return '[type="password"]';
  }

  get loginButton() {
    return '.orangehrm-login-button';
  }

  async login(username, password) {
    await this.page.locator(this.usernameField).fill(username);
    await this.page.locator(this.passwordField).fill(password);
    await this.page.locator(this.loginButton).click();
  }
}

export { LoginPage };
