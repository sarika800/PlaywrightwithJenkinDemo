import { IWorldOptions, setWorldConstructor, World } from "@cucumber/cucumber";
import { Homepage } from "../pages/homepage";
import { Browser, BrowserContext, Page } from "@playwright/test";
import { signupPage } from "../pages/signupPage";
import { loginpage } from "../pages/loginpage";
import { loginFunctionality } from "../pages/loginFunctionality";

export class customWorldId extends  World {
 browser!: Browser
 context!: BrowserContext
 page!: Page


 homepage_obj! : Homepage;
 login_obj! : loginpage;
 signupPage_obj! : signupPage
loginFunctionality_obj! : loginFunctionality

constructor(options:IWorldOptions){
    super(options)
}
}
setWorldConstructor(customWorldId)