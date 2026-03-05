import {Base} from "../base"

class Header extends Base {
    constructor(page) {
        super(page)
    }

    get enterButton() {
        return this.page.locator('.auth-bar__item.auth-bar__item--text');
    }

    get openRightMenuButton() {
        return this.page.locator('.header-style__underlay');
    }

    get enterButtonMobile() {
        return this.page.locator('.header-style__bottom .header-style__link.header-style__link_primary');
    }

    async goToLoginPage() {
        if ((await this.page.viewportSize().width) < 1000) {
            await this.openRightMenuButton.click();
            await this.enterButtonMobile.click();
        } else {
            await this.enterButton.click();
        }
    }
}

export { Header }