
import Footer from "../../page-objects/components/footer"
import Navbar from "../../page-objects/components/navbar"
import CartPage from "../../page-objects/pages/CartPage"
import HomePage from "../../page-objects/pages/homePage"
import ProductDetailsPage from "../../page-objects/pages/ProductDetailsPage"
import ProductsPage from "../../page-objects/pages/ProductsPage"


describe("Cart actions suite", () => {
    let chairsData
    before(function () {
        HomePage.load()
        cy.fixture('chair-data').then(function (data) {
            chairsData = data
            return chairsData
        })
    })

    it('Can add chair to cart from Header Menu', () => {
        Navbar.clickChairs()
        ProductsPage.isLoaded()
        ProductsPage.clickOnProduct(chairsData.product01)
        ProductDetailsPage.clickAddToCart()
        Navbar.verifyCartCount('(1)')
    })

    it('Can add chair to cart from Body Categories', () => {
        Navbar.clickLogo()
        HomePage.clickChairs()
        ProductsPage.clickOnProduct(chairsData.product02)
        ProductDetailsPage.clickAddToCart()
        Navbar.verifyCartCount('(1)')
    })

    it('Can add chair to cart from Footer Menu', () => {
        Footer.clickChairs()
        ProductsPage.clickOnProduct(chairsData.product03)
        ProductDetailsPage.clickAddToCart()
        Navbar.verifyCartCount('(1)')
    })

    it('Can see same name & price in cart page as in detailed view', function () {
        Navbar.clickChairs()
        ProductsPage.clickOnProduct(chairsData.product04)
        cy.then(() => {
            ProductDetailsPage.invokeProductNameText()
            ProductDetailsPage.invokeProductPriceText()
            ProductDetailsPage.clickAddToCart()
            Navbar.verifyCartCount('(1)')
            Navbar.clickCart()
        }).then(() => {
            CartPage.verifyProductName(this.expectedName)
            CartPage.verifyProductPrice(this.expectedPrice)
        })
    })

    it('Can see same chair image in cart as in detailed page', () => {
        Navbar.clickChairs()
        ProductsPage.clickOnProduct(chairsData.product05)
        ProductDetailsPage.clickAddToCart()
        cy.get(ProductDetailsPage.productImage).invoke('attr', 'src').then(($expectedImage) => {
            Navbar.clickCart()
            cy.get(CartPage.productImage).invoke('attr', 'src').then(($actualImage) => {
                expect($actualImage).to.equal($expectedImage)
            })
        })
    })

    it('Can see cart count updating correctly in navbar', () => {
        Navbar.clickChairs()
        ProductsPage.clickOnProduct(chairsData.product06)
        ProductDetailsPage.clickAddToCart()
        Navbar.verifyCartCount('(1)')
        Navbar.clickCart()
        CartPage.isLoaded()
        CartPage.addOneQuantity()
        Navbar.verifyCartCount('(2)')
        CartPage.removeOneQuantity()
        Navbar.verifyCartCount('(1)')
    })

    it('Can increase and decrease quantity in cart page', () => {
        Navbar.clickChairs()
        ProductsPage.clickOnProduct(chairsData.product07)
        ProductDetailsPage.clickAddToCart()
        Navbar.clickCart()
        CartPage.verifyProductCounter('1')
        CartPage.addOneQuantity()
        CartPage.addOneQuantity()
        CartPage.verifyProductCounter('3')
        CartPage.removeOneQuantity()
        CartPage.verifyProductCounter('2')
    })

    it('Can add multiple IN STOCK chairs to cart', () => {
        Navbar.clickChairs()
        ProductsPage.clickOnProduct(chairsData.product01)
        ProductDetailsPage.clickAddToCart()
        Navbar.clickChairs()
        ProductsPage.clickOnProduct(chairsData.product03)
        ProductDetailsPage.clickAddToCart()
        Navbar.verifyCartCount('(2)')
        Navbar.clickCart()
        //check carts page wheteher two products are displayed
        CartPage.isLoaded()
    })

    it("Can see SOLD OUT msg when trying to add sold-out chair to cart", () => {
        Navbar.clickChairs()
        ProductsPage.clickOnProduct(chairsData.product08)
        ProductsPage.verifySoldOutMessage()
    })

    it('Can continue to shop from SOLD OUT message popup', () => {
        HomePage.load()
        Navbar.clickChairs()
        ProductsPage.clickOnProduct(chairsData.product09)
        ProductsPage.verifySoldOutMessage()
        cy.isVisible(ProductsPage.soldOutModalContinueButton)
        ProductsPage.clickSoldOutContinue()
        cy.isVisible(ProductsPage.productsPageLayout)
    })

    it('Can remove chair from cart and see empty cart message', () => {
        Navbar.clickChairs()
        ProductsPage.clickOnProduct(chairsData.product02)
        ProductDetailsPage.clickAddToCart()
        Navbar.clickCart()
        CartPage.removeOneQuantity()
        CartPage.verifyEmptyCartMessage()
    })
})


