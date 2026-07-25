
import { Given, When, Then, setDefaultTimeout, After } from '@cucumber/cucumber'

import { Browser, BrowserContext, chromium, expect, Page } from "@playwright/test"
import { Homepage } from '../pages/homepage';
import { loginpage } from '../pages/loginpage';
import { signupPage } from '../pages/signupPage';


var homepage_obj: Homepage;
var login_obj: loginpage;
var signupPage_obj: signupPage

Given('user launches website', async function () {

    await this.page.goto("https://ecommerceguru.odoo.com/")

    homepage_obj = new Homepage(this.page)
 login_obj = new loginpage(this.page)
    signupPage_obj = new signupPage(this.page)

});
When('user clicks on signup link', async function () {
    await homepage_obj.clickOnSignupButton();

});