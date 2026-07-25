import { expect, Page } from "@playwright/test";

export class signupPage{

constructor(private page:Page){
this.page=page
}
//obj repo
private username='#name'
private email='#login'
private password='#password'
private cpassowrd='#confirm_password'
private signin='.btn.btn-primary.mb-1'
private errormsg='//p[@class="alert alert-danger"]'



public async entername(name:string){
   await this.page.locator(this.username).fill(name)

}
public async enterEmail(Email:string){
 await this.page.locator(this.email).fill(Email)
}

public async enterPassword(password:string){
     await this.page.locator(this.password).fill(password)
}

public async enterConfirmPassword(cpassword:string){
      await this. page.locator(this.cpassowrd).fill(cpassword)
}

public async clickOnSignupButton(){
await this.page.locator(this.signin).click()
}
    
async getErrorMessage():Promise <string>{
let error_message=await this.page.locator(this.errormsg).innerText()
return error_message;
}










}