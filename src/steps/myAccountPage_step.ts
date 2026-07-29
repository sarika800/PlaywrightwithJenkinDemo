import { Then } from "@cucumber/cucumber";



Then('click on shop tab', async function () {
    await this.myAccountPage_obj.clickOnShopTab();
});