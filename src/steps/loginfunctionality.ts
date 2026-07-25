import { Then, When } from "@cucumber/cucumber";


When('user clicks on login button', async function () {
    await this.loginFunctionality_obj.clickOnLoginButton()
});

Then('user should logged in succesfully', async function () {

});