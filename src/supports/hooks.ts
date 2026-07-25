import { After, Before, setDefaultTimeout } from "@cucumber/cucumber";
import { Browser, BrowserContext, chromium, firefox, Page } from "@playwright/test";
import { loginpage } from "../pages/loginpage";
import { signupPage } from "../pages/signupPage";
import { Homepage } from "../pages/homepage";
import { loginFunctionality } from "../pages/loginFunctionality";


setDefaultTimeout(60000);

Before(async function () {

    let browser = "CHROME"

    if (browser.toLowerCase() == "chrome") {
        this.browser = await chromium.launch({ headless: false, })
    }
    else if (browser.toLowerCase() == "firefox") {
        this.browser = await firefox.launch({ headless: false, })

    }
    else {
        console.log("unsupported browser")
    }


    //this.browser = await chromium.launch({ headless: false, args: ['--start-maximized'] })
    this.context = await this.browser.newContext({
    viewport: {
        width: 1920,
        height: 1080
    }
});
    this.page = await this.context.newPage()
    await this.page.goto("https://ecommerceguru.odoo.com/")

    this.homepage_obj = new Homepage(this.page)
    this.login_obj = new loginpage(this.page)
    this.signupPage_obj = new signupPage(this.page)
    this.loginFunctionality_obj = new loginFunctionality(this.page)
})

After(async function () {
    await this.context.close()
    await this.browser.close()
})
