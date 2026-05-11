// // function greet(name){
// //     console.log("Hello", name);
    
// // }

// // greet("Umair");


// // function calculator(a,b, operator){
// //     if ( operator === "+"){
// //         console.log(a + b);
        
// //     } else if ( operator === "-"){
// //         console.log(a - b);
        
// //     }else if ( operator === "*"){
// //         console.log(a * b);
        
// //     }else if ( operator === "/"){
// //         console.log(( a/b));
        
// //     }else{
// //         console.log("Invalid operator");
        
// //     }

// // }


// // calculator(7 , 8 , "/");


// // function checkeven(even){
// //     if(even % 2 === 0){
// //         console.log("Even number");
        
// //     }else{
// //         console.log("Odd Number");
        
// //     }

// // }

// // checkeven(5);


// // function reverseString (str){
// //    let result = str.split("").reverse().join("")
// //     console.log(result);
    

// // }


// // reverseString("pakistan");


// // function palidrome(word){
// //     let result = word.split("").reverse().join("")
// //     if (word === result){
// //         console.log("palidrome" + " " + result);
        
// //     }else{
// //         console.log(result);
        
// //     }
// // }

// // palidrome("Afghanistan")




// // function findMax(num1 , num2){

// // //     if( num1 > num2){
// // //         console.log(num1 + "is greator");
        
// // //     }else{
// // //         console.log(num2  + "is greator");
        
// // //     }

// // // }

// // // findMax(7,8);

// // function add(num1, num2){
// //     console.log(num1 + num2);
    
// // }


// // function subtract(num1 , num2){
// //     console.log(num1 - num2);
    
// // }


// // function calculate(a,b, callback){
// //     callback(a , b);
    
// // }


// // calculate(4,8, subtract)
// // calculate(7,9 , add)




// // function greator( num1,num2){
// //     if(num1 > num2){
// //         console.log(num1 + "greator");
        
// //     }else{
// //         console.log("smaller");
        
// //     }
// // }

// // function calculate(a,b , find){
// //     find(a,b);
// // }


// // calculate(9,8, greator)

// // function add(a,b){
// //     console.log(a + b);
    
// // }

// // function subtract(a ,b){
// //     return(a - b);
    
// // }
// // // function multiply(a,b){
// //     console.log(a * b);
    
// // }
// // function divide( a,b){
// //     console.log( a / b);
    
// // }
// // function calculate( num1 , num2 , callback){
// //     callback(num1, num2)
// // }



// // calculate(7 , 8 , add);
// // calculate ( 78 , 9 , subtract);
// // calculate ( 98 , 88, multiply);
// // calculate( 88 , 8, subtract);




// // const multily = (a, b) => a * b;

// // console.log(multily(6 ,8));


// // const even = (num) => num % 2 === 0 ? "Even Number" : " Odd number"


// // console.log(even(10));


// // const add = (a , b) => a + b;

// // const calculate = (a , b , callabck) => {
// //      return callabck( a, b);
// // }

// // console.log(calculate(89, 9 , subtract));


// // const  reversev=(str) => {
// //    let word = str.split("").reverse().join("")
// //     return word

// // }

// // // console.log(reversev("Pakistan"));
// // const Ispaldrom = (str) => 
// //    str === str.split("").reverse().join("")? "isPalidrom" : "Normalnum"

// // console.log(Ispaldrom("madam"));




// // const max = (a , b ,c ) => 
// //     (a > b && a > c)? a + " " + " is greator" : ( b > a && b > c)? b + " " + " is greator":c + " " + " is greator"

// //     console.log(max(7,9,90 , showResult));


// // const deliverfood =(food) =>{
// //     console.log("your order is ready", food);
    
// // }
 
// // const orderBurger =(callabck) => {
// //     console.log("Order recieved ....");

// //     let burger = "chese burger ..."

// //     callabck(burger)
    
// // }


// // console.log(orderBurger(deliverfood));



// // const showWelcome = (user) =>{
// //     console.log("welcome" , user);

// // }
// // const login = (username, callabck) =>{
// //     if(username === "umair"){
// //         callabck(username)
// //     }else{
// //         return "login failed"
       
// //     }
// // }
// // login("umair", showWelcome)


// // const showsuccess =(user)=>{
// //     console.log("welcome" , user);
// // }
// // const withdrawn =(amount, callback) =>{
// //     if(amount >= 10000){
// //         callback(amount)
        
// //     }else{
// //         return "payment can not proceed"
// //     }

// // }

// // withdrawn(1200, showsuccess)

// // let balance = 20000
// // const showsuccess = (amount)=>{
// //     console.log(amount, " withdrawsucessful");
// // }

// // const withdrawn = (amount , callback) =>{
// //     if(balance >= amount){
// //         balance = balance - amount;
// //         callback(amount)

// //     }else{
// //         console.log("withdrawn not success Sorry");
        
// //     }

// // }

// // withdrawn(1200 , showsuccess)










// // const showresult = (message) =>{
// //     console.log("congratulations you are passed", message);
    

// // }

// // const CheckReult = (marks, callback)=>{
// //     if(marks >= 50){
// //         callback(marks)
// //     }else{
// //         console.log("pleae try again");
        
// //     }

// // }

// // CheckReult(30,showresult)


// // const customer =( name , amount)=>{
// //     console.log(name , amount);
    

// // }
// // const totalbill= (name ,  amount , callback)=>{
// //     if(amount >= 2000){
// //         let discount = amount *20 /100
// //         let total = amount - discount
// //         callback( name , total)

// //     }else{
// //         callback(name, amount)
// //     }
// // }

// // totalbill("Amir", 300, customer)

// // const Showgrade =(message)=>{
// //     console.log( message);
// // }

// // const checkGrade= (name, marks, callback) =>{
// //     if(marks >= 80){
        
// //         callback(name + " A++ grade")
        
// //     }else if (marks >= 60){
        
// //         callback(name + "B grade")
        
// //     }else{
      
// //         callback(name+ "c grade")
        
// //     }

    

// // }

// // checkGrade("Ali", 89, Showgrade)


// const usermessage = (message) =>{
//     console.log(message);
    

// }

// const access = (username , callabck) =>{
//     if(username === "ali"){
//         callabck(username + " Login succesfully")
//     }else{
//         callabck (username + " You are not allowed")
//     }

// }

// access("alii", usermessage)


// const userage = (message) =>{
//     console.log(message);
    

// }
// const checkAge = (age , callabck) =>{
//     if(age >= 18){
//         callabck( age + "Allowed")
//     }else{
//         callabck(age + "notaloowed")
//     }

// }
checkAge(17, userage)