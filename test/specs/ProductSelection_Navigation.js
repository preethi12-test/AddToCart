import { expect } from "chai"
import Home_page from "../pageobjects/Home_page.js"
import fs from "fs"
let dat=fs.readFileSync("./test/TestData/data.json")
let dt=JSON.parse(dat)
describe('ProductSelectionAndDetailsNavigation',()=>{
   
    it('addtocart',async()=>{
        await browser.url(dt.url)
        
        await Home_page.product.click()
        await Home_page.addCart.click() 
       await browser.pause(3000)
       await Home_page.carticon.click()
        /**
     * validating product in the cart
     */
        let text=await Home_page.cartpage.getText()
        expect(text).to.equal('15mm Combo Wrench')
        


    })
})