
const prompt = require('prompt-sync')();
let utility = require('./class_gambler')
let monthlyBets = require('./bets_gambler')
// const Game = new utility.Gambler()
// const SetMonth = new monthlyBets.Monthly_Bets()

console.log("welcome to Gambler Game")

const Day = 1;
const total_No_Days = 20;
let stake = 100;


let unluckyday = [];
let luckyday = [];


// let Gambler = new Map();

// function getGambler() {
//   let wins = 0;
//   let lose = 0;
//   stake = 100;
//   while(stake > 50 && stake < 150){

//     let random = Math.floor(Math.random() * 10) % 2
//     if (random == 0){
//       wins ++;

//     // console.log("player wins ")

//     stake = stake + bets
//   // console.log(stake)
//      }else{
//        lose ++;
//     // console.log(" player lose 1$ ")

//     stake = stake - bets
//     // console.log(stake)
//       }
//     }
//           return stake;
//     }



function totalAmount() {
  luckyday = [];
  unluckyday = [];
  let amount_won = 0;
  let amount_lose = 0;

  for (let i = 1; i <= 20; i++) {
    let totalAmount = 0;
    // totalAmount = Game.getGambler()
      totalAmount = utility.getGambler();

    if (totalAmount == 150) {
      amount_won = amount_won + totalAmount
      // console.log(i + "lost amount: " + totalAmount);
      // Gambler.set(i,totalAmount)
      SetMonth.setMapValues(i, totalAmount)
      luckyday.push(i);
    } else {
      amount_lose = amount_lose + totalAmount
      // console.log(i +"won amount: " + totalAmount);
      // Gambler.set(i,totalAmount)
      SetMonth.setMapValues(i, totalAmount)
      unluckyday.push(i);
    }

  }
  gettotalAmount(amount_won, amount_lose);


  


  console.log(SetMonth.getMapValues());
  console.log("lucky day: " + luckyday);
  console.log("Unlucky day: " + unluckyday);
  // luckyday = [];
  // unluckyday = [];
}
// console.log('data for month:1 ')
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



while(true){
  let choice = prompt('press 1 to continue or press 0 to exit')
  if(choice == 1){
    totalAmount();
  }else{
    break;
  }
}




// for (let j = 2; j <= 12; j++) {
//   // let choice = prompt('press 1 to continue or press 0 to exit')
//   if (luckyday.length >= unluckyday.length) {
//     console.log("data for month: " + j)
//     totalAmount();
//   } else {
//     break;
//   }
// }


