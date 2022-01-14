// import { invoke } from "cypress/types/lodash"
import BasePage from "../BasePage"


export default class CartPage extends BasePage {

    static productsSection = 'div.products'
    static productName = '.product-description > :nth-child(1)'
    static productPrice = '.product-price'
    static productImage = '[class="product-picture"]'
    static plusButton = 'div.operator:nth-child(3) > div:nth-child(1)'
    static productCounter = '.product-counter > :nth-child(1) > :nth-child(2)'
    static minusButton = 'div.product-counter div:nth-child(1) > div.operator:nth-child(1)'

    static discountTextBox = '[placeholder="Discount code"]'
    static applyButton = '[class="discount"] > div'
    static couponErrorMessage = '[class="discount-toast"]'
    static noProductsIncart = '[class="no-products"]'
    static emptyCartMessage = '.no-products'
    static checkoutTotalPrice = '.line-total > :nth-child(2)'

    
    static load() {
        cy.visit('/cart')
    }

    static isLoaded() {
        cy.isVisible(this.productsSection)
    }

    static enterCoupon(code) {
        cy.get(this.discountTextBox).type(code)
    }

    static clickApply() {
        cy.get(this.applyButton).click()
    }

    static validateErrorMessage() {
        var message;
        cy.fixture('messages').then(function (data) {
            message = data.invalidCouponMessage
        }).then(() => {
            cy.get(this.couponErrorMessage).should('contain.text', message)
        })
    }

    static addOneQuantity() {
        cy.get(this.plusButton).click()
    }

    static removeOneQuantity() {
        cy.get(this.minusButton).click()
    }

    static invokeCheckoutTotalPrice(){
        cy.get(this.checkoutTotalPrice).invoke('text').as('checkoutPrice')
    }

    static verifyEmptyCartMessage() {
        cy.isVisible(this.noProductsIncart)
    }

    static verifyProductName(expectedName) {
        cy.get(this.productName).should('contain.text', expectedName)
    }

    static verifyProductPrice(expectedPrice) {
        cy.get(this.productPrice).should('contain.text', expectedPrice)
    }

    static verifyProductCounter(expectedCount) {
        cy.get(this.productCounter).should('contain.text', expectedCount)
    }

    static verifyEmptyCartMessage() {
        var expecMessage;
        cy.fixture('messages').then(function (data) {
            expecMessage = data.emptyCartMessage
        }).then(() => {
            cy.get(CartPage.emptyCartMessage)
                .invoke('text')
                .should((actualMsg) => {
                    expect(actualMsg).to.eq(expecMessage)
                })
        })
    }
}