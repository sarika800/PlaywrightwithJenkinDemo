import { Page } from "@playwright/test";

export class loginFunctionality{


constructor(private page:Page){
this.page=page
}
//obj repo
private LoginButton='//Button[@class="btn btn-primary"]'

public async clickOnLoginButton(){
  await this.page.locator(this.LoginButton).click()
await this. page.waitForLoadState()
}
}
