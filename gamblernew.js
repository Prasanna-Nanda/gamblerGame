console.log("welcome to Gambler Game")

let stake = 100;
let wins = 0;
let lose = 0;
const bets = 1;

 function getGambler(){
let random = Math.floor(Math.random() * 10) % 2;
if (random == 1){
  wins ++;
//console.log(stake);
 stake = stake + bets;
}else{
  lose ++;
//console.log(stake);
 stake = stake + bets;
}
return stake;
}

getGambler();
