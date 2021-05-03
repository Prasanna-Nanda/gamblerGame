// const { Gambler } = require("./class_gambler");

class Monthly_Bets{
    constructor(){
         this.gambler = new Map();

    }
    getMapValues(){
        return this.gambler
    }
   setMapValues(i, totalAmount) {
   this.gambler.set(i,totalAmount)
       
   }
}
module.exports={Monthly_Bets}
