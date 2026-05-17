// const car = {
//    brand: "Toyota",
//    model: "Corolla",
//    engine: {
//       cc: 1800
//    }
// };

// let {model , engine:{cc}} = car

// console.log(cc , model);


// 👉 result ma "Pass" ya "Fail" store karo
// condition:
// 60+ = Pass
// const marks = 50;

// let result = marks > 60? "pass": "fail"
// console.log(result);


// const car = {
//    brand: "Toyota",
//    model: "Corolla",
//    engine: {
//       cc: 1800
//    }
// };


// console.log(car?.engine?.cc);


// (function(){
//     console.log("React started");
    
// })()

// function greet(name = "guest") {
//    console.log(`Hello ${name}`);
// }

// greet("Umair");
// greet()

// function multiply(a, b=5) {
//    console.log( a * b);
// }

// multiply(2)


//  let num = [1,2,3,4,5,6,7,8,8]

//  function sum(...num){
//     return num.reduce((acc,cval)=>{
//          return acc + cval

//     },0)
    
//  }

//  console.log(sum(1,3,4,5));
 
//  const user = {
//    name: "Ali"
// };

// const updatedUser = {
//    👉 age: 20 add karo using spread
// // }
// const updated = {
//     ...user,
//     age:20
// }

// console.log(updated);

// const users = [
//    {
//       id: 1,
//       name: "Ali",
//       age: 20
//    },
//    {
//       id: 2,
//       name: "Sara",
//       age: 17
//    },
//    {
//       id: 3,
//       name: "Ahmed",
//       age: 25
//    }
// ];


// let names = users.map(nam => nam.name)
// console.log(names);

// let filterDate = users.filter(adult => adult.age >=18)
// console.log(filterDate);

// let updateUser = users.map(user =>{
//     return{
//         ...users,
//         Status: user.age > 18? "Adult" : "Minor"
//     }
// })

// console.log(updateUser);
