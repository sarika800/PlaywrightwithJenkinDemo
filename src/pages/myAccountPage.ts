import { Page } from "@playwright/test"

export class myAccountPage{

constructor (private page:Page){
this.page =page
}

public async clickOnShopTab(){
await this.page.getByRole('menuitem', { name: 'Shop' }).click();

}


}