import { browser } from '@wdio/globals'

/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
export default class Base {
    /**
    * Opens a sub page of the page
    * @param path path of the sub page (e.g. /path/to/page.html)
    */
    async navigate(url, endpoint) {
        return browser.url(`${url}${endpoint ? endpoint : ''}`)
    }

    async clickElement(webElement) {
        await webElement.waitForClickable()
        await webElement.click()
    }

    async fillField(webElement, text) {
        await webElement.waitForDisplayed()
        await webElement.setValue(text)
    } 
}