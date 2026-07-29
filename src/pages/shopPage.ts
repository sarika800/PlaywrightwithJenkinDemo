import { Page } from "@playwright/test"

export class shopPage{

constructor (private page:Page){
this.page =page
}

public async clickOnAddToCart(){
await this.page.locator('button[name="add_to_cart"][data-product-id="25"]').click();

}


}