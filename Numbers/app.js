// let today = new Date
// console.log(today);
// console.log(today.getFullYear());
// console.log(today.getHours());
// console.log(today.getMinutes());
// console.log(today.getSeconds());
// console.log(today.getTimezoneOffset());
// console.log(today.getUTCDate());
// console.log(today.getMonth());
// console.log(today.getDay());
// console.log(today.getDate());



// let now = new Date();

// console.log("Hour:", now.getHours());
// console.log("Minutes:", now.getMinutes());
// console.log("Seconds:", now.getSeconds());

// function showtime(){
//     let now = new Date();
//     let time= 
//         now.getHours()+ ":"+
//         now.getMinutes()+ ":"+
//         now.getSeconds();
    
//     document.querySelector(".clock").innerHTML=`${time}`
// }
// setInterval(showtime,)



// 1. Round a Number
// Round the number 4.7 using Math.round().

// let num = 4.7;

// let newNum = Math.round(num)

// console.log(newNum);

// 2. Ceil a Decimal
// Use Math.ceil() to round 5.3 up to the next whole number.

// let num = 5.3;

// let newNum = Math.ceil(num)

// console.log(newNum);

// 3. Floor a Decimal
// Use Math.floor() to round 8.9 down to the previous whole number.

// let num = 8.9;

// let newNum = Math.floor(num)

// // console.log(newNum);
// 4. Generate a Random Number (0–1)
// Create a function that returns a random number between 0 and 1 using
// Math.random().


// function RandNum(){
//     return Math.random();

// }

// console.log(RandNum());

// 5. Random Integer (0–9)
// Generate a random whole number between 0 and 9.

// let RandumNumber = Math.floor(Math.random() * 10)

// // console.log(RandumNumber);
// 6. Random Integer (1–100)
// Generate a random integer between 1 and 100.

// let RandumNumber = Math.random() * 100 

// let newNum = Math.floor(RandumNumber) + 1;

// console.log(newNum);

// 7. Convert String to Integer
// Use parseInt() to convert the string "42" into a number.

// let num = " 42"

// let newNum = parseInt(num)
// console.log(typeof(newNum));


// 8. Convert String to Float
// Use parseFloat() to convert "3.14159" into a floating point number.


// let num = " 3.14159"

// console.log(parseFloat(num));


// 9. Round User Input
// Take a number from a form input, round it, and display the result on the page.

// function roundNumber(){

// let value = document.querySelector(".number").value;
// let number = parseFloat(value)
// let rounded = Math.round(number)
// document.querySelector(".reult").innerText = rounded
// }

// 10. Dice Simulator
// // Simulate a 6-sided dice roll (returns a number between 1 and 6).


// function diceRoll(){
//     return Math.floor(Math.random() * 6 ) +1;

// }

// console.log(diceRoll());


// // 11. Temperature Rounding
// // Round a temperature value (e.g., 36.6) to the nearest integer using Math.round().

// let temperature = 36.6;

// console.log(Math.round(temperature));

// 12. Ceil Shopping Price
// If the product price is $9.25, use Math.ceil() to charge the user $10.

// let ShoppingPrice = 9.25


// console.log ("$" + Math.ceil(ShoppingPrice));

// 13. Parse and Add
// Convert two string numbers like "10" and "5.5" using parseInt() and
// parseFloat() and add them.


// let str1 = " 10";
// let str2 = " 5.3"

// let num1 = parseInt(str1);
// let num2 = parseFloat(str2);

// let total = num1 + num2;

// console.log(total);

// 14. Random Even Number (2–20)
// Generate a random even number between 2 and 20.

// let RandNum = Math.floor(Math.random() * 10) +1;

// let evenNum = RandNum * 2;

// console.log(evenNum);

// 15. Check if Parsed Value is a Number
// Write a function that checks if parseInt(input) is a valid number (not NaN).

// let prices = [10.4, 5.6, 7.2, 9.9];

// let NewPrice = [];

// for(let i=0; i<prices.length; i++){
//     NewPrice.push (Math.round(prices[i]))
// }
// console.log(NewPrice);

// 17. Simulate Coin Toss
// Use Math.random() to simulate a coin toss that returns "Heads" or "Tails".


// let number = Math.random();
// if(number < 0.5){
//     console.log("Heads");
    
// } else{
//     console.log("Tails")
// }
// 18. Random Integer within Range (Min–Max)
// Create a function that returns a random integer between any two numbers (inclusive).

// function randomRange(min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// console.log(randomRange(5, 10));

// 19. Extract Number from Text
// Use parseFloat() to extract the number from "Total: 45.90 USD".

// let price = "Total: 45.90 USD"

// let exactprice = price.split(" ")


// let amount = exactprice[1] 




// console.log(parseFloat(amount));

// 20. Round to Nearest 0.5
// Given a decimal number, round it to the nearest 0.5 (e.g., 4.3 → 4.5, 4.1 → 4.0).


// let number = 4.3;

// let rounded = Math.round(number *2) / 2;

// console.log(rounded);


