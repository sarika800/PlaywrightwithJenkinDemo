import { Then } from "@cucumber/cucumber";





Then('click on add to cart button', async function () {
    await this.shopPage_obj.clickOnAddToCart();
});

Then('click on shopping cart', async function () {
    await this.shopPage_obj.clickOnShoppingCart();
});