
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



}
export default new Home_page()