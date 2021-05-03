console.log("welcome to Gambler Game")
const prompt = require('prompt-sync')();
let utility = require('./class_gambler')
let monthlyBets = require('./bets_gambler')
// const Game = new utility.Gambler()
// const SetMonth = new monthlyBets.Monthly_Bets()


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

function gettotalAmount(amount_won, amount_lose){
  let finalAmount = 0;
  if (amount_won > amount_lose){
    finalAmount = amount_won - amount_lose
    console.log("total amount won", finalAmount)
  }else{
    finalAmount = amount_lose - amount_won
    console.log("total Amount lose", finalAmount)
  }
  return finalAmount;
}
