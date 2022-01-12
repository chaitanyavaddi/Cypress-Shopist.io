import BasePage from "../BasePage";


export default class HomePage extends BasePage {

    static categoryChairs = '.departments > [href="/department/chairs"]'
    static categorySofas = '.departments > [href="/department/sofas"]'
    static categoryBedding = '.departments > [href="/department/bedding"]'
    static categoryLighting = '.departments > [href="/department/lighting"]'

    static load(){
        cy.visit('/')
    }
    static clickChairs() {
        cy.get(this.categoryChairs).click()
    }

    static clickSofas() {
        cy.get(this.categorySofas).click()
    }

    static clickBedding() {
        cy.get(this.categoryBedding).click()
    }

    static clickLighting() {
        cy.get(this.categoryLighting).click()
    }
}