import { Page } from "@playwright/test";

export class Homepage{
private page:Page;

constructor(page:Page){
this.page=page
}
//obj repo
private signup_Button='(//a[text()="Sign in"])[1]'

//action

public async clickOnSignupButton(){
 await this.page.locator(this.signup_Button).click()
}



}

