import { Then, When } from "@cucumber/cucumber";
import { loginpage } from "../pages/loginpage";
import { customWorldId } from "../supports/customWorld";
import { expect } from "@playwright/test";

When('user clicks on dont have account hyperlink', async function () {
   await this.login_obj.ClickOnDontHaveAccountLink();

});

Then('user should able to see the error message', async function(){


})