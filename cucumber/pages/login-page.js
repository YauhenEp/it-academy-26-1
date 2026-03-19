import { $ } from '@wdio/globals'
import Base from './base';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Base {
    get loginField () {
        return $('[placeholder="Ник или e-mail"]');
    }

    get passwordField () {
        return $('[placeholder="Пароль"]');
    }

    get buttonSubmit () {
        return $('.auth-button_primary');
    }

    get wrongCredentialNotification() {
        return $('.auth-form__description_error')
    }

    async fillCredentials(username, password) {
        if(username) {
            await this.fillField(await this.loginField, username)
        }
        if(password) {
            await this.fillField(await this.passwordField, password)
        }
    }

    async login(username, password) {
        await this.fillCredentials(username, password);
        await this.clickElement(await this.buttonSubmit)
    }
}

export default new LoginPage();
