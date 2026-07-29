import { Then, When } from "@cucumber/cucumber";
import { expect } from "@playwright/test";


When('user clicks on login button', async function () {
    await this.loginFunctionality_obj.clickOnLoginButton()
});

Then('user should logged in succesfully', async function () {
var actual_text = await this.page.locator('//h1[text()="My account"]')
    await expect(actual_text).toBeVisible()
});