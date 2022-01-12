import BasePage from "../BasePage"


export default class ProductsPage extends BasePage{

    static allProducts = '[class="product-card-container"]'
    static productName = '//div[text()="White Shell Chair"]'
    static soldOutModalMessage = '.modal-sold-out--is-open > .modal-sold-out-content > .modal-title'
    static soldOutModalContinueButton = '.modal-sold-out--is-open > .modal-sold-out-content > .modal-button'
    static productsPageLayout ='[class="products"]'
    
    static isLoaded(){
        cy.get(this.allProducts).should('have.length', 9) 
    }

    static clickOnProduct(name){
        cy.xpath("//div[text()='"+name+"']/../parent::*").click()
    }

    static verifySoldOutMessage(){
        cy.get(this.soldOutModalMessage).should('contain.text', 'Oops! This item is sold out' )
    }
    
    static clickSoldOutContinue(){
        cy.get(this.soldOutModalContinueButton).click()
    }
}