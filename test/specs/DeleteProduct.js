import { expect } from "chai"
import Home_page from "../pageobjects/Home_page.js"
import testData from "../TestData/data.json"
describe("delete product",()=>{
    it("dlete product",async()=>{
        await browser.url(testData.url)
        await Home_page.search_and_Select(testData.produnctname)
        /** validating product details
         */
        let productname=await Home_page.productdetails.isDisplayed()
        expect(productname).to.be.true
        console.log("Product details got displayed");
       await Home_page.addCart.click()
   
        await browser.pause(3000)
        await Home_page.carticon.click()
    
       await Home_page.deletebtn.click()
       const emptyCartMessage = await $("//h1[@class='cart__empty-text']");
        await emptyCartMessage.waitForDisplayed({ timeout: 5000 });
        expect(await emptyCartMessage.isDisplayed()).to.be.true;
        console.log("Cart is confirmed to be empty.");

    })
})