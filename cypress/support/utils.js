

export default class estData{

    data={
        getChairs: ()=> cy.fixture('').then(function(chairData){ return chairData})
    }


    getChairData(){
       return this.data.getChairs()
    }
}