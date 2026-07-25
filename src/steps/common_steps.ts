
// // import { Given, When, Then, setDefaultTimeout, After } from '@cucumber/cucumber'

// // import { Browser, BrowserContext, chromium, expect, Page } from "@playwright/test"
// // import { Homepage } from '../pages/homepage';
// // import { loginpage } from '../pages/loginpage';
// // import { signupPage } from '../pages/signupPage';


// // setDefaultTimeout(60 * 1000); // 60 seconds
// // let browser: Browser
// // let context: BrowserContext
// // let page: Page

// // var homepage_obj: Homepage;
// // var login_obj: loginpage;
// // var signupPage_obj: signupPage

// // Given('user launches website', async function () {

// //     browser = await chromium.launch({ headless: false, args: ['--start-maximized'] })
// //     context = await browser.newContext({ viewport: null })
// //     page = await context.newPage()
// //     await page.goto("https://ecommerceguru.odoo.com/")

// //     homepage_obj = new Homepage(page)
// //     login_obj = new loginpage(page)
// //     signupPage_obj = new signupPage(page)

// // });

// // When('user clicks on signup link', async function () {
// //     await homepage_obj.clickOnSignupButton();

// // });
// When('user clicks on dont have account hyperlink', async function () {
//    await login_obj.ClickOnDontHaveAccountLink();
// });
// When('Enter name {string}', async function (name: string) {
//   await signupPage_obj.entername(name)
// });

// When('Enter email {string}', async function (email: string) {
//      await signupPage_obj.enterEmail(email)
// });
// When('enter password {string}', async function (password: string) {
//    await signupPage_obj.enterPassword(password)
// });
// When('enter confirm password {string}', async function (cpassword: string) {
//    await signupPage_obj.enterConfirmPassword(cpassword)
// });
// When('user clicks on signup button', async function () {
//     await signupPage_obj.clickOnSignupButton()
// });
// Then('verify  account created succesfully', async function () {
//     var actual_text = await page.locator('//h1[text()="My account"]')
//     await expect(actual_text).toBeVisible()

// });
// Then('verify user get text as {string}', async function (expected_text:string) {
// var actual_text=await signupPage_obj.getErrorMessage()
// expect(actual_text).toEqual(expected_text)

// })

// Then('user should see validation error for required fields', async function () {

// })

// After(async function(){
// await context.close()
// await browser.close()
// })