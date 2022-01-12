
export default class Navbar {

    static logo = '.brand-large > img'
    static chairs= '.chairs'
    static sofas= '.sofas'
    static lighting = '.lighting'
    static bedding = '.bedding'
    static cart = '.cart'


    static clickChairs() {
        cy.get(this.chairs).click()
    }

    static clickSofas() {
        cy.get(this.sofas).click()
    }

    static clickLighting() {
        cy.get(this.lighting).click()
    }

    static clickBedding() {
        cy.get(this.bedding).click()
    }

    static clickCart() {
        cy.get(this.cart).click()
    }

    static verifyCartCount(number){
        cy.get(this.cart).should('contain.text', number)
    }

    static clickLogo(){
        cy.get(this.logo).click()
    }
}