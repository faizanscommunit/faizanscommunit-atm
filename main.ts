// Governor Sindh IT Course
// Name : Muhammad Faizan
// Contact (FOR ANY HELP) : 0321-2322629 (WHATSAPP)
// Advanced ATM Project

import inquirer from 'inquirer'
let myBalance = 100000; // Dollars
let pinCode = 1198; // Assigning Pin Code
// Telling Users Current Balance
console.log(`Your current Balance is ${myBalance}`)
// Asking for Pin Code
const pinAnswer = await inquirer.prompt(
    {
        name:"pin",
        type:'number',
        message:"Please Enter your pin code: ",
    }
)
// If Pin code is correct , show the main menu else exit the program
if (pinCode  === pinAnswer.pin){
    // Asking for Withdraw or Deposit or Fast Cash Withdrawal
    const user_choice = await  inquirer.prompt({
        name:"choice",
        type:'list',
        message:"What do you want to do: ",
        choices:['Withdraw', 'Deposit', 'Fast Cash'],
    });
    
    if (user_choice.choice === 'Deposit'){
        // Asking for Amount
        const deposit_amount = await  inquirer.prompt({
            name:"amount",
            type:'number',
            message:"Please specify Amount: ",
        });
        // Now Withdraw Amount 
        myBalance =  myBalance + deposit_amount.amount;
        console.log(`Your new balance is ${myBalance}`)
    }
    else if (user_choice.choice === 'Fast Cash'){
        const cash = await inquirer.prompt({
            name:'selected_cash',
            type:'list',
            message:'',
            choices:['5000','10000','20000',"50000"]
        })
        if(cash.selected_cash === '5000'){
            if (cash.selected_cash >= myBalance){
                console.log('Insufficient Balance!')
            }
            else{
                myBalance =  myBalance - 5000;
                console.log(`Your new balance is ${myBalance}`)
            }
        }
        else if(cash.selected_cash === '10000'){
            if (cash.amount >= myBalance){
                console.log('Insufficient Balance!')
            }
            else{
                myBalance =  myBalance - 10000;
                console.log(`Your new balance is ${myBalance}`)
            }
        }
        else if(cash.selected_cash === "20000"){
            if (cash.amount >= myBalance){
                console.log('Insufficient Balance!')
            }
            else{
                myBalance =  myBalance - 20000;
                console.log(`Your new balance is ${myBalance}`)
            }
        }
        else if(cash.selected_cash === "50000"){
            if (cash.amount >= myBalance){
                console.log('Insufficient Balance!')
            }
            else{
                myBalance =  myBalance - 50000;
                console.log(`Your new balance is ${myBalance}`)
            }
        }
    }
    else if (user_choice.choice === 'Withdraw'){
        // Asking for Amount
        const withdraw_amount = await  inquirer.prompt({
            name:"amount",
            type:'number',
            message:"Please specify Amount: ",
        });
        if (withdraw_amount.amount >= myBalance){
            console.log('Insufficient Balance!')
        }
        else{
            myBalance =  myBalance - withdraw_amount.amount;
            console.log(`Your new balance is ${myBalance}`)
        }
    }
    else {
        console.log('Oops, Something went wrong!')
    }
} else {
    console.log('Please enter the correct pin code!')
}
 
