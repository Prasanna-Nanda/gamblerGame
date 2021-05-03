 class Gambler {

constructor(){

}
   getGambler(random) {
        let wins = 0;
        let lose = 0;
        let stake = 100;
        const bets = 1;
        while(stake > 50 && stake < 150){
          
          // let random = Math.floor(Math.random() * 10) % 2
          if (random == 1){
            wins ++;
             
          // console.log("player wins ")
          
          stake = stake + bets
        // console.log(stake)
           }else{
             lose ++;
          // console.log(" player lose 1$ ")
          
          stake = stake - bets
          // console.log(stake)
            }
          }
                return stake;
        }
    }

        //  module.exports={Gambler}
    module.exports = new Gambler();
