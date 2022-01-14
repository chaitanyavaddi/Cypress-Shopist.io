import BasePage from "../BasePage"

export default class ProductDetailsPage extends BasePage {
    
    static productName = '.description > :nth-child(1) > :nth-child(1)'
    static addToCart = '.purchase-button'
    static productPrice = '.price'
    static productImage = 'img.product-card'
    static productLayout = '.item'

    static isLoaded(){
        cy.isVisible(this.productLayout)
    }

    static clickAddToCart() {
        cy.get(this.addToCart).click()
    }

    static invokeProductNameText() {
        cy.get(this.productName).invoke('text').as('expectedName')
    }

    static invokeProductPriceText() {
        cy.get(this.productPrice).invoke('text').as('expectedPrice')
    }
}