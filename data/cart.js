export let cart = JSON.parse (localStorage.getItem('cart'));

if(!cart){
cart =
[{
        productId:'a1',
        quantity:2
    },{
        productId:'a2',
        quantity:1  
    }];

  }

function saveTostorage(){
    localStorage.setItem('cart', JSON.stringify(cart));
}

export function addTocart(productId){
    let matchingItem;

    cart.forEach((cartItem)=>{
    if(productId === cartItem.productId){
      matchingItem = cartItem;
    }
  });

  if(matchingItem){
    matchingItem.quantity += 1;
  }else{
    cart.push({
      productId:productId,
      quantity:1
    });
  } 

  saveTostorage();
}

export function removeFromcart(productId){
  const newCart = [];

  cart.forEach((cartItem) => {
    if(cartItem.productId !== productId)
        newCart.push(cartItem);
  });


  cart = newCart;

  saveTostorage();
}


export function calculateCartQuantity() {
  let cartQuantity = 0;

  cart.forEach((cartItem) => {
    cartQuantity += cartItem.quantity;
  });

  return cartQuantity;
}


export function updateQuantity(productId, newQuantity) {
  let matchingItem;

  cart.forEach((cartItem) => {
    if (productId === cartItem.productId) {
      matchingItem = cartItem;
    }
  });

  matchingItem.quantity = newQuantity;

  saveTostorage();
}