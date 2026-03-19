import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect, $ } from '@wdio/globals'

import loginPage from '../pages/login-page.js';
import homePage from '../pages/home-page.js';


Given(/^I navigate to the (.*) page$/, async function(url) {
    const world = this;
    console.log('world is - ', world)
    world.newVariable = 'new variable created by me'
    world.num = 10
    await loginPage.navigate(url)
});

When(/^I click on (.*) element$/, async function(element) {
    const world = this;
    console.log('world is 2 - ', world)
    const webElement = homePage['Header'][element];
    await homePage.clickElement(webElement);
});

When(/^I login with (\w+) and (.+)$/, async (username, password) => {
    await loginPage.login(username, password)
});

Then(/^I should see a flash message saying (.*)$/, async (message) => {
    await expect(await loginPage.wrongCredentialNotification).toBeExisting();
    await expect(await loginPage.wrongCredentialNotification).toHaveText(expect.stringContaining(message));
});


When("I click on {locator} webElement", async function (element) {
    await element.click()
})
