import { Page } from "@playwright/test";

export class loginpage{


constructor(private page:Page){
this.page=page
}
//obj repo
private dontHaveAccount='.btn.btn-link.btn-sm.mt-2'

public async ClickOnDontHaveAccountLink(){
  await this.page.locator(this.dontHaveAccount).click()

}



}