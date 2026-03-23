const { Before, After } = require('@cucumber/cucumber');
const { chromium, expect } = require('@playwright/test');

Before(async function () {
    const world = this;
    const browser = await chromium.launch({ headless: false });
    const context = await browser.newContext();
    const page = await context.newPage();
    world.browser = browser;
    world.context = context;
    world.page = page;
});

After(async function () {
    const world = this;
    await world.browser.close();
});