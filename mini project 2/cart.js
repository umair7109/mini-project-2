const getcartItems = JSON.parse(localStorage.getItem("cartItem"));
console.log(getcartItems);
const cartItemContainer = document.querySelector(".items");

const totalAmount = document.querySelector(".total-section");

function rendoritem(){
    cartItemContainer.innerHTML= "";
    getcartItems.map((item)=>{
        cartItemContainer.innerHTML+=`
         <div class="item-info">${item.name}</div>
                <div class="item-price">$${item.price}</div>
                <div class="item-qty">
                    <div class="qty-box">
                        <button onclick="changeQuantity('less' , ${item.id})">-</button>
                        <span>${item.quantity}</span>
                        <button onclick="changeQuantity('add' , ${item.id})">+</button>
                    </div>
                </div>
                <div class="item-total">$${item.quantity * item.price}</div>
            </div>`
    });

    const getTotalAmount = getcartItems.reduce((acc, cval)=>{
        return acc + cval.price * cval.quantity;
    }, 0)

    totalAmount.innerHTML=getTotalAmount
} 
renderItem();

function changeCategory(quantity,id){
    console.log(quantity);
    const index = getcartItems.findIndex((item) => item.id ===id);
    console.log((index));
    if(quantity === "add"){
        getcartItems[index].quantity += 1;

    }else{
        if(getcartItems[index].quantity === 1){
            getcartItems.splice(index, 1)
        } else{
            getcartItems[index].quantity -= 1;

        }
    }
    
    console.log(getcartItems);
    localStorage.setItem("cartitem", JSON.stringify(getcartItems));
    rendoritem();
    
}