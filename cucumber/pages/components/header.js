import { $ } from '@wdio/globals'
import Base from '../base.js';

class Header extends Base {
    get "Enter Button"() {
        return $('.auth-bar__item.auth-bar__item--text');
    }

    get openRightMenuButton() {
        return $('.header-style__underlay');
    }

    get rightMenuEnterButton() {
        return $('.header-style__bottom .header-style__link.header-style__link_primary');
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async goToLoginPage() {
        if(await (await browser.getWindowSize()).width < 1000) {
            await this.clickElement(await this.openRightMenuButton)
            await this.clickElement(await this.rightMenuEnterButton)
        } else {
            await this.clickElement(await this.enterButton)
        }
    }
}

export default new Header();