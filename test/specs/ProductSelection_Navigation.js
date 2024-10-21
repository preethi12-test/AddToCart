import { expect } from "chai"
import Home_page from "../pageobjects/Home_page.js"

import testData from "../TestData/data.json"

describe('ProductSelectionAndDetailsNavigation',()=>{
   
    it('addtocart',async()=>{
        await browser.url(testData.url)
         await Home_page.search_and_Select(testData.produnctname)
         /** validating product details
          */
         let productname=await Home_page.productdetails.isDisplayed()
         expect(productname).to.be.true
         console.log("Product details got displayed");
         
         /** verifying avaialability of product to put in the cart
          */
         const productavailcheck=await $("//div[@id='price-template--15328405717213__main']/descendant::span[contains(.,'Sold out')]").getText()
        browser.pause(3000)
         

         if(productavailcheck.includes('Sold out'))
        {
         this.skip()
        console.log("Product sold out");
        
       }
       const price=await Home_page.price.getText()
     expect(price).includes(testData.Product_price)
      
         await Home_page.addCart.click() 
         
        /** verifying item added to cart pop up message
          */
       const message =  await $("//h2[@class='cart-notification__heading caption-large' and contains(text(), 'Item added to your cart')]")
       await message.waitForDisplayed({timeout:5000})
        let itemnotification=await $("//h2[@class='cart-notification__heading caption-large' and contains(text(), 'Item added to your cart')]").getText()
        expect(itemnotification).to.contains(testData.itemaddedMessage)
        console.log("Product added to cart sucessfully");
        
       await Home_page.carticon.click()
       
       let price_in_cart=await Home_page.prciceAtCart.getText()
      expect(price_in_cart).includes(testData.Total_price)
        let text=await Home_page.cartpage.getText()
        expect(text).to.equal(testData.produnctname)
        console.log("Product is present in the cart");
        
        let quantity = await Home_page.productQuantity.getValue()
        expect(quantity).to.equal(testData.quantity)
       


    })

   afterEach(async()=>{
      it("Delete product from cart",async()=>{
         await Home_page.carticon.click()
 
         browser.pause(4000)
         await Home_page.deletebtn.click().isDisplayed
         await $("//h1[@class='cart__empty-text']").isDisplayed
         console.log("deleted");
         
      })
   }) 
})