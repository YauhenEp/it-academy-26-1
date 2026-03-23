const { Given, Then } = require('@cucumber/cucumber');
const { chromium, expect } = require('@playwright/test');
const Homepage = require('../pages/homepage');

let homepage;

Given('I open the homepage', { timeout: 10 * 1000 }, async function () {
  // browser = await chromium.launch({ headless: false });
  // const context = await browser.newContext();
  // page = await context.newPage();
  const world = this;
  console.log('World object:', world); // Debugging line to check the World object
  homepage = new Homepage(world.page);
  await homepage.navigate();
});

Then('I should see the page title as {string}', { timeout: 10 * 1000 }, async function (expectedTitle) {
  const title = await homepage.getTitle();
  await expect(title).toContain(expectedTitle);
  // await browser.close();
});