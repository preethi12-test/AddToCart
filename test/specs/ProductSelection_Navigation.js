import { expect } from "chai"
import Home_page from "../pageobjects/Home_page.js"

import testData from "../TestData/data.json"

describe('ProductSelectionAndDetailsNavigation',()=>{
   
    it('addtocart',async()=>{
        await browser.url(testData.url)
         await Home_page.search_and_Select()
         /** validating product details
          */
         let productna=await Home_page.productdetails.isDisplayed()
         expect(productna).to.be.true
       
        await Home_page.addCart.click() 
       await browser.pause(3000)
       await Home_page.carticon.click()
        /**
     * validating product in the cart
     */
        let text=await Home_page.cartpage.getText()
        expect(text).to.equal(testData.produnctname)
        /**
     * validating quantity in the cart
     */
        let quantity = await Home_page.productQuantity.getValue()
        expect(quantity).to.equal(testData.quantity)
        


    })
})