


const products = [
  // 🍔 Fast Food
  { name: "Burger", category: "Fast Food", price: 8, stock: 20 },
  { name: "Cheese Burger", category: "Fast Food", price: 10, stock: 15 },
  { name: "Zinger Burger", category: "Fast Food", price: 12, stock: 18 },
  { name: "Pizza", category: "Fast Food", price: 12, stock: 15 },
  { name: "Pepperoni Pizza", category: "Fast Food", price: 14, stock: 10 },
  { name: "Fries", category: "Fast Food", price: 5, stock: 30 },
  { name: "Chicken Nuggets", category: "Fast Food", price: 6, stock: 25 },

  // 🍎 Fruits
  { name: "Apple", category: "Fruits", price: 2, stock: 50 },
  { name: "Banana", category: "Fruits", price: 1, stock: 60 },
  { name: "Orange", category: "Fruits", price: 3, stock: 40 },
  { name: "Mango", category: "Fruits", price: 4, stock: 35 },
  { name: "Grapes", category: "Fruits", price: 3, stock: 45 },
  { name: "Pineapple", category: "Fruits", price: 5, stock: 20 },

  // 🥛 Dairy
  { name: "Milk", category: "Dairy", price: 4, stock: 25 },
  { name: "Cheese", category: "Dairy", price: 6, stock: 18 },
  { name: "Butter", category: "Dairy", price: 5, stock: 22 },
  { name: "Yogurt", category: "Dairy", price: 3, stock: 30 },
  { name: "Cream", category: "Dairy", price: 7, stock: 12 },

  // 🧼 Essentials
  { name: "Soap", category: "Essentials", price: 2, stock: 70 },
  { name: "Shampoo", category: "Essentials", price: 7, stock: 35 },
  { name: "Toothpaste", category: "Essentials", price: 3, stock: 45 },
  { name: "Toothbrush", category: "Essentials", price: 1, stock: 80 },
  { name: "Detergent", category: "Essentials", price: 6, stock: 28 },

  // 📱 Electronics (bonus category)
  { name: "Mobile Phone", category: "Electronics", price: 200, stock: 10 },
  { name: "Headphones", category: "Electronics", price: 25, stock: 40 },
  { name: "Keyboard", category: "Electronics", price: 30, stock: 22 },
  { name: "Mouse", category: "Electronics", price: 15, stock: 50 }
];

const maincontainer = document.querySelector(".container")

const categoryArry = ["all"]

// const renderitem = (arr) => {
//     maincontainer.innerHTML= "";
//     arr.forEach(item => {
//         maincontainer.innerHTML+=`
//          <div>
//             <h1>${item.name}</h1>
//             <p> price:$ ${item.price}</p>
//             <p> stock:${item.stock}</p>
//             <button>Add to cart</button>
//         </div>
//         `
        
//     });
// }
// renderitem(products)

// // products.forEach((item) =>{
// //     if(! categoryArry.includes(item.category)){
// //         categoryArry.push(item.category)
// //     }
// // })

const renderitem = (arr) => {
    maincontainer.innerHTML="";
    arr.forEach((item) =>{
        maincontainer.innerHTML+=`
           <div>
            <h1>${item.name}</h1>
            <p> price:$ ${item.price}</p>
            <p> stock:${item.stock}</p>
            <button>Add to cart</button>
        </div>
        
        `;
    });
    
}
renderitem(products);


products.forEach((item)=>{
    if(!categoryArry.includes(item.category)){
        categoryArry.push(item.category)
        
    }
})

const btndiv = document.querySelector(".btns");

categoryArry.map((item , index ) => {
  btndiv.innerHTML += `
  <button onclick="changeCategory(${index})">
    ${item}
  </button>
`;
    

});

function changeCategory(index){
    console.log(categoryArry[index]);
    if(index === 0){
        renderitem(products)
        return
    }

    const filterdproducts=products.filter((item) =>{
        return item.category === categoryArry[index];
    });

    console.log(filterdproducts);
    renderitem(filterdproducts);
    

    
}