
import { Given, When, Then, setDefaultTimeout, After } from '@cucumber/cucumber'

import { Browser, BrowserContext, chromium, expect, Page } from "@playwright/test"
import { Homepage } from '../pages/homepage';
import { loginpage } from '../pages/loginpage';
import { signupPage } from '../pages/signupPage';



var signupPage_obj: signupPage

Given('user launches website', async function () {

   // await this.page.goto("https://ecommerceguru.odoo.com/")

   

});
When('user clicks on signup link', async function () {
    await this. homepage_obj.clickOnSignupButton();

});

