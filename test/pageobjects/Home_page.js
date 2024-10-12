
/**
 * sub page containing specific selectors and methods for a specific page
 */
class Home_page{

    get product()
    {
        return $("//a[contains(.,'15mm Combo Wrench')]/ancestor::div[@class='card-wrapper']")
    }
    get addCart()
    {
        return $("//div[@class='product-form__buttons']/descendant::button[@name='add']")
    }
    get carticon()
    {
        return $("//div[@class='header__icons']/descendant::a[@id='cart-icon-bubble']")
    }
    get cartpage()
    {
        return $("//div[@class='cart__items']/descendant::a[contains(.,'15mm Combo Wrench')]")
    }


    // async home(){

    //     await browser.url("https://web-playground.ultralesson.com/")

    //     await browser.pause(3000);
    //     // Time.sleep(5)
    //     await $("//a[contains(.,'15mm Combo Wrench')]/ancestor::div[@class='card-wrapper']").click()
    //     const currnturl=await browser.getUrl()
    //     expect(currnturl).contains('Combo')
    //     await $("//button[contains(.,'Add to cart')]").click()
        
    //     // Time.sleep(5)
    // }

}
export default new Home_page()