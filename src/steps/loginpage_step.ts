import { When } from "@cucumber/cucumber";
import { loginpage } from "../pages/loginpage";
import { customWorldId } from "../supports/customWorld";

When('user clicks on dont have account hyperlink', async function () {
   await this.login_obj.ClickOnDontHaveAccountLink();

});