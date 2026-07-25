import { Then, When } from "@cucumber/cucumber";
import { expect } from "@playwright/test";

When('Enter name {string}', async function (name: string) {
  await this.signupPage_obj.entername(name)
});

When('Enter email {string}', async function (email: string) {
     await this.signupPage_obj.enterEmail(email)
});
When('enter password {string}', async function (password: string) {
   await this.signupPage_obj.enterPassword(password)
});
When('enter confirm password {string}', async function (cpassword: string) {
   await this.signupPage_obj.enterConfirmPassword(cpassword)
});
When('user clicks on signup button', async function () {
    await this. signupPage_obj.clickOnSignupButton()
});
Then('verify  account created succesfully', async function () {
    var actual_text = await this.page.locator('//h1[text()="My account"]')
    await expect(actual_text).toBeVisible()

});
Then('verify user get text as {string}', async function (expected_text:string) {
var actual_text=await this. signupPage_obj.getErrorMessage()
expect(actual_text).toEqual(expected_text)

})

Then('user should see validation error for required fields', async function () {

})
