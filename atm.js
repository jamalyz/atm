// let balance = 1000;
// let choice = 2;

// if (choice === 1) {
//     console.log("Check balance", balance);
// }
// else if (choice === 2) {
//     let newAmont = 500;
//     balance = balance + newAmont;
//     console.log("Deposit", newAmont);
//     console.log("ur new balnace is ", balance)
// }
// else if (choice === 3) {
//     let Withdraw = 400;
//       if (withdrawAmount > balance) {
//         console.log("Insufficient funds");
//     } else {
//         balance = balance - withdrawAmount;
//         console.log("You withdrew:", withdrawAmount);
//         console.log("Your new balance is:", balance);
//     }
// }
// console.log("Withdraw");{
// }





let bank = 1700;
let pick = 3;

if (pick === 1) {
    console.log("check", bank)
}
else if (pick === 2) {
    let deposite = 679;
    bank = bank + deposite;

    console.log("Your deposite", deposite);
    console.log("Your news balance is ", bank)
}
else if (pick === 3) {
    let withdraw = 500;
    if (withdraw > bank) {
        console.log("insuffcient balance")
    }
    else {
        bank = bank - withdraw;
        console.log("YOUR withdraw banalce ", bank)
    }

}
else {
    console.log("Exit system")
}


