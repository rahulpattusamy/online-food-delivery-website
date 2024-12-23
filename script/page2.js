import { products } from '../data/product.js';
import { cart, addTocart,calculateCartQuantity } from '../data/cart.js';

let productHTML = '';
products.forEach((product)=>{
 productHTML += `
  <div class="food-content">
    <img src="${product.Image}" alt="" class="food-image">
    <div class="foodinformation">
      <div>
        <p>${product.foodname}</p>
        <p class="complement">${product.complement}</p>
       <br>
      </div>
      <div>
        <p> &#8377;${product.price}</p>
        <p>${product.delivered}</p><br>
      </div>
    </div>
     <div class="addtocart">
        <button class="review">${product.star}</button>
        <button class = "js-add-to-cart" data-product-id = "${product.id}">ADD TO CART</button>
      </div>   
   </div> 
 `
})

document.querySelector('.jscontainer').innerHTML = productHTML;



export function updateCartquantity(){
 const cartQuantity = calculateCartQuantity(); 
 document.querySelector('.js-cart-quantity').innerHTML = cartQuantity; 
}

updateCartquantity();

document.querySelectorAll('.js-add-to-cart').forEach((button) => {
  button.addEventListener('click', () => {
    const productId = button.dataset.productId;
    addTocart(productId);
    updateCartquantity(); 
    });
  });