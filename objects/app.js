// const obj1 = {
//    name: "Ali"
// };

// const obj2 = {
//    age: 20
// };

    
// const mergObj = {
//     ...obj1,
//     ...obj2
// };

// console.log(mergObj);
// const user = {
//    name: "Sara",
//    age: 19
// };

// let updated={
//     ...user,
//     age: 45
// }

// console.log(updated);

// const car = {
//    brand: "Toyota",
//    model: "Corolla"
// };

// const {brand,model}= car

// console.log(car);
// // const student = {
// //    name: "Umair",

// //    marks: {
// //       math: 90,
// //       english: 80
// //    }
// // };

// // // console.log(student.marks.english);
// // const products = [
// //    { name: "Phone", price: 50000 },
// //    { name: "Laptop", price: 120000 },
// //    { name: "Mouse", price: 2000 }
// // ];

// // const names = products.map(products => products.name)
// // console.log(names);
// // const user = {
// //    name: "Ali",
// //    age: 22,
// //    city: "Karachi"
// // };
// // console.log(user.name);
// // console.log(user.age);

// // const car = {
// //    brand: "Honda",
// //    model: "Civic"
// // };

// // let update = {
// //     ...car,
// //     color: "black"
// // }

// // // // console.log(update);
// // const laptop = {
// //    brand: "Dell",
// //    price: 120000
// // };

// // // const {brand,price}= laptop

// // console.log(laptop);

// // const student = {
// //    name: "Umair",

// //    marks: {
// //       math: 90,
// //       english: 80,
// //       science: 70
// //    }
// // };


// // // console.log(student.marks.science);
// // const obj1 = {
// //    name: "Ali"
// // };

// // const obj2 = {
// //    age: 20
// // };

// // const obj3 = {
// //    city: "Lahore"
// // };

// // const updated = {
// //     ...obj1,
// //     ...obj2,
// //     ...obj3
// // }
// // console.log(updated);
// // const products = [
// //    { name: "Phone", price: 50000 },
// //    { name: "Laptop", price: 120000 },
// //    { name: "Mouse", price: 2000 }
// // ];

// // const expansive = products.filter(ex=> ex.price >=10000)


// // console.log(expansive);
// // 9️⃣ Nested Destructuring
// // const user = {
// //    name: "Ali",

// //    address: {
// //       city: "Karachi",
// //       area: "Nazimabad"
// //    }
// // };

// // const { address: {city}} = user
// // console.log(city);
// // const cart = [
// //    { name: "Phone", price: 50000 },
// //    { name: "Mouse", price: 2000 },
// //    { name: "Keyboard", price: 5000 }
// // ];

// // const totalprice = cart.reduce((cur,cval)=> cur + cval.price ,0 )

// // console.log(totalprice);

// // const users = [
// //    { name: "Ali", age: 17 },
// //    { name: "Sara", age: 22 },
// //    { name: "Ahmed", age: 25 }
// // ];

// // const adults = users.filter(adu => adu.age >+18)
// // console.log(adults);

// const products = [
//    { name: "Phone", price: 50000 },
//    { name: "Laptop", price: 120000 }
// ];

// let result = products.map( item => `${item.name}_${item.price}`)




// console.log(result);

// const user = {
//   name: "Ali",
//   address: {
//     city: "Karachi",
//     area: "Nazimabad"
//   }
// };




// let updated = {
//     ...user,
//     city:"Lahore"
// }
// console.log(updated);


// const student = {
//   name: "Umair",
//   marks: {
//     math: 90,
//     science: 80
//   }
// };

// const { marks: { math,science}} = student;

// console.log(math)
// console.log(science);
// ;

// const user = {
//   name: "Sara",
//   age: 17
// };

// let result = user.age >= 18? "IsAdult:true" : "Isadult:false"

// console.log(result);
// 1️⃣ Student Result System
// const student = {
//   name: "Umair",
//   age: 20,
//   marks: {
//     math: 90,
//     english: 75,
//     science: 80
//   }
// };
// Tasks:
// total marks nikalo
// average nikalo
// highest marks subject find karo
// "Umair passed" print karo agar average 50+ ho

// //  1️⃣ Student Result System
// const student = {
//   name: "Umair",
//   age: 20,
//   marks: {
//     math: 90,
//     english: 75,
//     science: 80
//   }
// };

// const  values = Object.values(student.marks);
// const total = values.reduce((cur,cval) => cur+cval, 0)
// const average = total / values.length;
// const highest = Math.max(...values)
// const passed = average > 50? "Umair Passed":"try again"

// let result = {
//   Total : total,
//   Average : average,
//   highest : highest,
//   result : passed

// }


// console.log(result);

// 2️⃣ E-commerce Product
// const product = {
//   title: "Laptop",
//   price: 120000,
//   discount: 15,
//   inStock: true
// };
// Tasks:
// final price after discount
// "Available" ya "Out of Stock" print karo
// object destructuring karo

// const product = {
//   title: "Laptop",
//   price: 120000,
//   discount: 15,
//   inStock: true
// };

// const { title , price, discount ,inStock} = product

// const finalPrice = price - (price*discount) /100;

// const Stockstatus = inStock? "Available" : " out of stock"

// let result ={
//   title,
//   finalPrice,
//   Stockstatus
// }

// console.log(result);

// ?
// 4️⃣ Shopping Cart
// const cart = {
//   items: [
//     { name: "Phone", price: 50000, qty: 2 },
//     { name: "Mouse", price: 2000, qty: 3 },
//     { name: "Keyboard", price: 5000, qty: 1 }
//   ]
// };
// Tasks:
// total bill calculate karo
// sab product names array ma nikalo
// 5000 sy zyada price walay items filter karo

// const cart = {
//   items: [
//     { name: "Phone", price: 50000, qty: 2 },
//     { name: "Mouse", price: 2000, qty: 3 },
//     { name: "Keyboard", price: 5000, qty: 1 }
//   ]
// };

// const totalPrice = cart.items.reduce((cur, cval)=>{
//   return cur + (cval.price * cval.qty)
// }
// ,0);

// const namese = cart.items.map(nam => nam.name);

// const higestprice = cart.items.filter( item => item.price > 5000)

// let result = {
//   totalPrice,
//   namese,
//   higestprice
// }
// console.log(result);
// 5️⃣ Employee Management
// const employee = {
//   id: 101,
//   name: "Sara",
//   salary: 80000,
//   department: "IT",
//   skills: ["HTML", "CSS", "JavaScript"]
// };
// Tasks:
// salary yearly karo
// skills count nikalo
// "React" add karo skills ma
// destructuring karo

// const employee = {
//   id: 101,
//   name: "Sara",
//   salary: 80000,
//   department: "IT",
//   skills: ["HTML", "CSS", "JavaScript"]
// };

// const { name ,salary ,depatment ,skills} = employee
// const yearlysalry = salary * 12
// const updatedskill = 
//  [ ...skills,
//   " react"]

//   const skillCOunt = updatedskill.length

// let result = {
//   yearlysalry,
//   updatedskill,
//   skillCOunt
// }
// console.log(result);

// 6️⃣ Food Delivery App
// const order = {
//   orderId: 456,
//   customer: "Umair",
//   items: [
//     { food: "Burger", price: 500, qty: 2 },
//     { food: "Pizza", price: 1200, qty: 1 }
//   ],
//   delivered: false
// };
// Tasks:
// total order price
// delivered false ho to "Pending"
// sirf food names nikalo

// const order = {
//   orderId: 456,
//   customer: "Umair",
//   items: [
//     { food: "Burger", price: 500, qty: 2 },
//     { food: "Pizza", price: 1200, qty: 1 }
//   ],
//   delivered: false
// };

// const TotalPrice = order.items.reduce((cur , cval ) =>{
//   return cur + (cval.price * cval.qty)
// },0);

//  const deliveryStatus = order.delivered ? "Pending" : "Delivery is Done"

//  const foodItems = order.items.map(item => item.food)

//  let result = {
//   TotalPrice,
//   deliveryStatus,
//   foodItems
//  }
//  console.log(result);
 

// 3️⃣ User Profile
// const user = {
//   username: "Ali123",
//   email: "ali@gmail.com",
//   address: {
//     city: "Karachi",
//     country: "Pakistan"
//   }
// };
// Tasks:
// city access karo
// nested destructuring karo
// new property "isLoggedIn" add karo

// const user = {
//   username: "Ali123",
//   email: "ali@gmail.com",
//   address: {
//     city: "Karachi",
//     country: "Pakistan"
//   }
// };

// const {address : { city ,country  }} = user

// // const usercity = user.city
// const updated = {
//   ...user,
//   IsloggedIn:true
// }

// let result = {
//   city,
//   updated
// }
// console.log(result);
// 7️⃣ Netflix Type Object
// const movie = {
//   title: "Inception",
//   rating: 8.8,
//   genres: ["Sci-Fi", "Action", "Thriller"],
//   cast: {
//     hero: "Leonardo",
//     villain: "Cillian Murphy"
//   }
// };
// Tasks:
// genres ko loop karo
// hero access karo
// new genre add karo
// rating 8+ ho to "Recommended"

// const movie = {
//   title: "Inception",
//   rating: 8.8,
//   genres: ["Sci-Fi", "Action", "Thriller"],
//   cast: {
//     hero: "Leonardo",
//     villain: "Cillian Murphy"
//   }
// };

// const genresList = movie.genres.forEach(genere => {
//   console.log(genere);
  
// })
//  const geroOf = movie.cast.hero

//  const ratingStatus = movie.rating > 5 ? "recomended" : "Not recomended"

//  let result = {
//   genresList,
//   geroOf,
//   ratingStatus
//  }

//  console.log(result);
 
// 8️⃣ Bank Account
// const account = {
//   holder: "Umair",
//   balance: 25000,
//   transactions: [5000, -2000, 3000, -1000]
// };
// Tasks:
// final balance calculate karo
// total deposits alag nikalo
// total withdrawals alag nikalo

// const account = {
//   holder: "Umair",
//   balance: 25000,
//   transactions: [5000, -2000, 3000, -1000]
// };

// const deposite = account.transactions.filter(amount => amount > 0)
// .reduce((cur,amount)=> cur +amount,0)

// const withdaw = account.transactions.filter(amount => amount<0)
// .reduce ((cur,cval)=> cur+cval , 0)

// const FinalBalance = account.balance + account.transactions.reduce((cur,cval) => cur +cval ,0)

// let result = {FinalBalance,
//   deposite,
//   withdaw
// }

// console.log(result);


// 9️⃣ Classroom Data
// const classroom = {
//   teacher: "Ahmed",
//   students: [
//     { name: "Ali", marks: 80 },
//     { name: "Sara", marks: 95 },
//     { name: "John", marks: 60 }
//   ]
// };
// Tasks:
// topper find karo
// average class marks
// failed students filter karo (< 70)
// sirf student names array ma nikalo

const classroom = {
  teacher: "Ahmed",
  students: [
    { name: "Ali", marks: 80 },
    { name: "Sara", marks: 95 },
    { name: "John", marks: 60 }
  ]
};

let topper = classroom.students[0];
for(let student of classroom.students){
  if(student.marks > student.markss){
    topper = student
  }
}

console.log(topper);
