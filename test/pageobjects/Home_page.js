

import testData from "../TestData/data.json"
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
    get SearchBtn() {
        return $("//details-modal[@class='header__search']");
    }
    get searchInput()
    {
        return $("//input[@id='Search-In-Modal']")
    }
    get selectList()
    {
        return $("//div[@class='predictive-search predictive-search--header']/descendant::li[@id='predictive-search-option-1']")
    }
    get productdetails()
    {
        return $("//div[@class='product__info-wrapper grid__item']//descendant::h1[contains(.,'"+testData.produnctname+"')]")
    }
    get productQuantity()
    {
        return $("//div[@class='cart__items']/descendant::input[@id='Quantity-1']")
    }
    get price()
    {
        return $("//div[@class='product__info-wrapper grid__item']/descendant::div[@class='price__regular']/span[@class='price-item price-item--regular']")
    }
    get prcice_at_cart()
    {
        return $("//div[@class='totals']/p")
    }
    async search_and_Select()
    {
        await this.SearchBtn.click()
        await this.searchInput.setValue(testData.produnctname)
       await this.selectList.click()


    }

    
}
export default new Home_page()