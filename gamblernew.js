console.log("welcome to Gambler Game")

let stake = 100;
let wins = 0;
let lose = 0;
const bets = 1;

function getGambler() {
  let wins = 0;
  let lose = 0;
  stake = 100;
  while(stake > 50 && stake < 150){

    let random = Math.floor(Math.random() * 10) % 2
    if (random == 0){
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

function totalAmount() {

luckyday = [];
unluckyday = [];

for (let i = 1; i <= 20; i++) {
    let totalAmount = 0;
totalAmount = i+ stake;

if (totalAmount == 150) {
console.log(i + "lost amount: " + totalAmount);
Gambler.set(i,totalAmount)
 SetMonth.setMapValues(i, totalAmount)
      luckyday.push(i);
} else {
amount_lose = amount_lose + totalAmount
console.log(i +"won amount: " + totalAmount);
Gambler.set(i,totalAmount)
  SetMonth.setMapValues(i, totalAmount)
      unluckyday.push(i);
}
 console.log(SetMonth.getMapValues());
  console.log("lucky day: " + luckyday);
  console.log("Unlucky day: " + unluckyday);
}

 totalAmount();

