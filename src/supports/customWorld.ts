import { IWorldOptions, setWorldConstructor, World } from "@cucumber/cucumber";
import { Homepage } from "../pages/homepage";
import { Browser, BrowserContext, Page } from "@playwright/test";
import { signupPage } from "../pages/signupPage";
import { loginpage } from "../pages/loginpage";
import { loginFunctionality } from "../pages/loginFunctionality";
import { myAccountPage } from "../pages/myAccountPage";
import { shopPage } from "../pages/shopPage";

export class customWorldId extends  World {
 browser!: Browser
 context!: BrowserContext
 page!: Page


 homepage_obj! : Homepage;
 login_obj! : loginpage;
 signupPage_obj! : signupPage
loginFunctionality_obj! : loginFunctionality
myAccountPage_obj! :myAccountPage
shopPage_obj! : shopPage

constructor(options:IWorldOptions){
    super(options)
}
}
setWorldConstructor(customWorldId)