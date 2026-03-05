import {test} from '@playwright/test';
import path from 'path';

const fileWithCokies = path.join(__dirname, '../../.auth/cookies.json')

test('Set cokies', async ({page}) => {
    await page.goto('https://www.onliner.by/');
    await page.locator('#submit-button').click();
    await page.waitForTimeout(5000);
    await page.waitForLoadState('load');
    await page.context().storageState({ path: fileWithCokies });
//     const submitButton = page.locator("#submit-button");
//   await submitButton.waitFor({ state: "visible" });
//   await submitButton.click();
})
