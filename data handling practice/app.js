// const users = [
//   { name: "Ali", age: 20 },
//   { name: "Sara", age: 25 },
//   { name: "Ahmed", age: 30 }
// ];

// const names= users.map(users => users.name)

// // console.log(names);

// const users = [
//   { name: "Ali", age: 20 },
//   { name: "Sara", age: 25 },
//   { name: "Ahmed", age: 30 }
// ];

// const username = users.map(user => user.name)
// console.log(username);


// const nums = [2, 4, 6, 8];
// const numbers = nums.map(num=>num*num)

// console.log(numbers);


// const names = ["ali", "sara", "ahmed"];
// const name= names.map(uper => uper.toUpperCase())
// console.log(name);


// const prices = [100, 200, 300];

//  const taxrate = 0.1;
// const taxPrice = prices.map(tax => tax + tax * taxrate)

// console.log(taxPrice);


// const users = [
//   { name: "Ali", age: 18 },
//   { name: "Sara", age: 22 },
//   { name: "Ahmed", age: 30 }
// ];

// const userName = users.map(userage => userage.age)

// console.log(userName);


// const users = [
//   { firstName: "Ali", lastName: "Khan" },
//   { firstName: "Sara", lastName: "Ahmed" }
// ];

// const fulName = users.map(user => user.firstName + user.lastName)

// console.log(fulName);

// const colors = ["red", "green", "blue"];

// colors.map(( value, index) => {
//     console.log(index,value);
    
// });


// const nums = [1, 0, 5, 0, 10];

// const Bool= nums.map(number=> Boolean(number))
// console.log(Bool);


// const words = ["apple", "banana", "mango"];

// const lenth = words.map(len => len.length)
// console.log(lenth);


// 2️⃣ Grade system
// const marks = [45, 70, 90, 30, 55];

// 👉 Task:

// 50+ = "Pass"
// below 50 = "Fail"

// 👉 Output string array banana hai



// const marks = [45, 70, 90, 30, 55];


// const result = marks.map(mark =>
//     mark >= 50? "Pass" : "Fail"
// )
// console.log(result);

// 3️⃣ Username generator
// const users = ["ali", "sara", "ahmed"];

// 👉 Task:

// har name ke aagay "@user_" add karo

// const users = ["ali", "sara", "ahmed"];

// const usermail = users.map(mail => mail + "@user_" )

// console.log(usermail);

// 4️⃣ Even / Odd tag
// const nums = [1, 2, 3, 4, 5, 6];

// 👉 Task:

// har number ke sath likho "Even" ya "Odd"

// const nums = [1, 2, 3, 4, 5, 6];

// const evenOdd = nums.map(number =>
//     number % 2 === 0? "Even" : "Odd"
// )

// console.log(evenOdd);


// 5️⃣ Product label
// const products = [
//   { name: "Phone", price: 500 },
//   { name: "Laptop", price: 1500 }
// ];

// const products = [
//   { name: "Phone", price: 500 },
//   { name: "Laptop", price: 1500 }
// ];

// const ProductPrice = products.map( price => `${price.name} _ ${price.price}`)

// console.log(ProductPrice);

// 6️⃣ Reverse names
// const names = ["Ali", "Sara", "Ahmed"];

// 👉 Task:

// har name ko reverse karo

// const names = ["Ali", "Sara", "Ahmed"];

// let reverseName = names.map(nam => nam.split("").reverse().join(""))

// console.log(reverseName);

// 7️⃣ Score boost
// const scores = [10, 20, 30, 40];

// 👉 Task:

// har score me +5 add karo
// aur multiply by 2 bhi karo

// const scores = [10, 20, 30, 40]

// let add = scores.map(adds => adds+5 )

// let double = add.map(double => double * 2)

// console.log(double);

// const users = [
//   { name: "Ali", age: 20 },
//   { name: "Sara", age: 25 }
// ];

// 👉 Task:

// output:
// [
//   { user: "Ali", isAdult: true },
//   { user: "Sara", isAdult: true }
// ]

//  const users = [
//   { name: "Ali", age: 20 },
//   { name: "Sara", age: 25 }
// ];

// let result = users.map( user =>{
//     return{
//         users: user.name,
//         isAdult: user.age >= 18
//     }

// }
    
// )
// console.log(result);

// 9️⃣ Length + word combo
// const words = ["apple", "banana"];

// 👉 Task:

// output:
// ["apple-5", "banana-6"]

// const words = ["apple", "banana"];

// const result = words.map(word => `${word}_${word.length}`)

// console.log(result);

// // 🔟 Bonus 🔥🔥
// // const nums = [1, 2, 3, 4];

// // 👉 Task:

// // square bhi karo
// // aur label bhi do:
// // ["1=1", "2=4", "3=9", "4=16"]

//  const nums = [1, 2, 3, 4];
//  let numbers = nums.map(num => `${num}=${num*num}`)

//  console.log(numbers);
 

                                // filter                 

// const nums = [5, 10, 15, 20, 25];         

// const filterNumber = nums.filter(number => number >= 15)
// console.log(filterNumber);

// const users = [
//   { name: "Ali", age: 20 },
//   { name: "Sara", age: 17 },
//   { name: "Ahmed", age: 25 }
// ];

// const adult = users.filter(aged => aged.age >=18)
// console.log(adult);

// const words = ["apple", "bat", "banana", "cat"];

// let wordcount = words.filter( word => word.length >= 4);

// console.log(wordcount);

// const nums = [1, 2, 3, 4, 5, 6];

// let oddNum= nums.filter(numbers => numbers % 2 !== 0)
// console.log(oddNum);


// const users = [
//   { name: "Ali", age: 17 },
//   { name: "Sara", age: 25 },
//   { name: "Ahmed", age: 30 }
// ];

// const adults = users.filter(user => user.age >= 18)

// const names = adults.map(nam => nam.name)

// console.log(names);


// const students = [
//   { name: "Ali", marks: 40 },
//   { name: "Sara", marks: 80 },
//   { name: "Ahmed", marks: 90 }
// ];

// let reult = students.filter(s => s.marks >= 50)
// .map(s => s.name)
// console.log(reult);

// const nums = [1, 2, 3, 4, 5, 6];

// let result = nums
// .filter(n => n % 2 === 0)
// .map(n => n*n )

// console.log(result);


// const products = [
//   { name: "Phone", price: 500 },
//   { name: "Laptop", price: 1500 },
//   { name: "Mouse", price: 20 }
// ];

// let result = products
// .filter( s => s.price >=100)
// .map(s => s.name)

// console.log(result);

// const users = [
//   { name: "Ali", age: 20 },
//   { name: "Sara", age: 17 },
//   { name: "Ahmed", age: 25 }
// ];

// let adults = users
// .filter(user => user.age >=18)
// .map( user => {
//     return {
//         Name: user.name
//     }
// })

// console.log(adults);

// const nums = [10, 15, 20, 25, 30];

// let numbers = nums
// .filter(n => n > 20)
// .map(n => n*2)

// console.log(numbers);

                                        // reduce()

// // const nums = [2, 4, 6, 8];

// // let sum = nums.reduce((acc,cval) => acc + cval , 0)

// // console.log(sum);

// const nums = [3, 7, 2, 9, 5];

// let max = nums.reduce((acc, cval) => {
//     return cval > acc? cval : acc;
// },0)

// console.log(max);

// const prices = [100, 200, 300];
// let total = prices.reduce((acc,cval) => acc + cval , 0)
// console.log(total);


// const students = [
//   { name: "Ali", marks: 45 },
//   { name: "Sara", marks: 80 },
//   { name: "Ahmed", marks: 30 },
//   { name: "Zain", marks: 90 }
// ];

// let studentMarks = students.map(m => m.marks);
// let totalMarks = studentMarks.reduce((acc,  cval)=> acc + cval ,0 );
// let averge = totalMarks / students.length;
// let passMarks = students.filter( m => m.marks >= 50 ).map(m=> m.name);


// console.log(studentMarks);
// console.log( "Total marks:", totalMarks);
// console.log("Average",averge);
// console.log(passMarks);



const cart = [
  { name: "Phone", price: 500 },
  { name: "Laptop", price: 1500 },
  { name: "Mouse", price: 50 },
  { name: "Keyboard", price: 100 }
];

let totalprice = cart.map(m => m.price)

let totalbill = totalprice.reduce((acc, price)=> acc + price ,0)
console.log("Total bill", totalbill);

let Discount = totalbill*0.10

let discountprice = totalbill - Discount;

let expansiveProducts = cart
.filter( p => p.price > 200)
.map( p => p.name)


console.log("Expanive Products:", expansiveProducts);

let report = {
    total: totalbill,
    Discount: Discount,
    FinalPrice : discountprice,

}

console.log("report:", report);
