import { Base } from './base'

class LoginPage extends Base {
    constructor(page) {
        super(page);
        this.loginField = () => this.page.locator('[placeholder="Ник или e-mail"]');
        this.passwordField = () => this.page.locator('[placeholder="Пароль"]');
        this.loginButton = () => this.page.locator('.auth-button_primary');
        this.errorMessage = () => this.page.locator('.auth-form__description_error');
    } 

    async fillCredentials(login, password) {
        if(login) {
            await this.loginField().fill(login);
        }
        if(password) {
            this.passwordField().fill(password);
        }
    }

    async login(login, password) {
        await this.fillCredentials(login, password);
        await this.loginButton().click();
    }
}

export { LoginPage };