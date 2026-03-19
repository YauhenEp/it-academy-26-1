import { $ } from '@wdio/globals'
import Base from './base.js';
import header from './components/header.js'

/**
 * sub page containing specific selectors and methods for a specific page
 */
class HomePage extends Base {
    constructor() {
        super();
        this['Header'] = header;
    }
}

export default new HomePage();