import { cart, removeFromcart,calculateCartQuantity, updateQuantity } from '../data/cart.js';
import { products, getProduct } from '../data/product.js';

  let cartSummaryHTML='';

  cart.forEach((cartItem) => {
    const productId = cartItem.productId
    
    let matchingProduct;
  
    products.forEach((product)=>{
      if(product.id === productId){
        matchingProduct = product;
      }
  
    });
    
    
    cartSummaryHTML +=
     `
      <div class="left-container  
      js-cart-item-container-${matchingProduct.id}">
          <div class="food-image">
            <img src="${matchingProduct.Image}" alt="">
          </div>
            <div class="foodname">
                <div>${matchingProduct.foodname}</div>
                <div class="complement">${matchingProduct.complement}</div> 
                <div class="price">
                    <button class="sub js-delete-link" data-product-id="${matchingProduct.id}">Delete</button>
                    Quantity: <span class="quantity-label qunatity-section js-quantity-label-${matchingProduct.id}">${cartItem.quantity}</span>
                    <input class="quantity-input    js-quantity-input-${matchingProduct.id}">
                    <span class="save-quantity-link  js-save-link   link-primary"  data-product-id="${matchingProduct.id}">Save</span>
                    <button class="add js-Add-link" data-product-id="${matchingProduct.id}">Add</button>
                    <div class="price">&#8377; ${matchingProduct.price}</div>
                </div>
             </div>
       </div> 
      
     `;
     
     renderPaymentsummary();
    
  
  });
  
  
  
  document.querySelector('.grid-container').innerHTML = 
  cartSummaryHTML;
  
  
  
  document.querySelectorAll('.js-delete-link').forEach((link)=>{
    link.addEventListener('click',()=>{
     const productId = link.dataset.productId;
     removeFromcart(productId);
  
    const container = document.querySelector(`.js-cart-item-container-${productId}`);
    container.remove();
  
    renderPaymentsummary();
      });
    });
  
  
  function updateCartQuantity(){
    const cartQuantity = calculateCartQuantity();
    
    document.querySelector('.js-return-to-home-link')
      .innerHTML = `${cartQuantity} items`;
  }
  renderPaymentsummary();
  updateCartQuantity();
  
  
  document.querySelectorAll('.js-Add-link').forEach((link)=>{
    link.addEventListener('click', ()=>{
      const productId = link.dataset.productId;
      const container = document.querySelector(
        `.js-cart-item-container-${productId}`
      );
      container.classList.add('is-editing-quantity');
   
    });
  }); 
  
  
  document.querySelectorAll('.js-save-link')
    .forEach((link) => {
      link.addEventListener('click', () => {
        const productId = link.dataset.productId;
  
        const container = document.querySelector(
          `.js-cart-item-container-${productId}`
        );
        container.classList.remove('is-editing-quantity');
  
        const quantityInput = document.querySelector(
          `.js-quantity-input-${productId}`
        );
        const newQuantity = Number(quantityInput.value);
        updateQuantity(productId, newQuantity);
  
        renderPaymentsummary();
        
        const quantityLabel = document.querySelector(
             `.js-quantity-label-${productId}`
           );
           quantityLabel.innerHTML = newQuantity;
  
           updateCartQuantity();
        
      });
    });
  
    /*bill-section-code*/
  
    function renderPaymentsummary(){
    let productPricedetails = 0;
    cart.forEach((cartItem)=>{
      const product = getProduct(cartItem.productId);
    
      productPricedetails += product.price * cartItem.quantity;
    });
    
    console.log(productPricedetails);
    
    const Platformfee = Math.round(productPricedetails/20);
    const Deliveryfee = Math.round(productPricedetails/25);
    const gst= Math.round(productPricedetails/26);
    
    const grandTotal = Math.round(productPricedetails + gst + Deliveryfee + Platformfee);
    
    
    const paymentsummaryHTML = `
    
          <div>Food price: <span>&#8377; ${productPricedetails}</span></div>
          <div>Platform fee:<span>&#8377; ${Platformfee}</span></div>
          <div>Delivery fee:<span>&#8377; ${Deliveryfee}</span></div>
          <div>Gst:<span>&#8377; ${gst}</span></div>
          <div><h3>Total:</h3><h3>&#8377; ${grandTotal}</h3></div>
    
    `;
    
    document.querySelector('.js-payment-container').innerHTML = paymentsummaryHTML;
  
    document.querySelector('.Amount').innerHTML = `&#8377; ${grandTotal}`
  }
  
  
  renderPaymentsummary();
  
  /*payment section */






document.querySelector('.place-btn').addEventListener('click',()=>{
  document.querySelector('.main-container').innerHTML = `
  ` ;
});


 
  document.querySelector('.card').addEventListener('click',()=>{
    document.querySelector('.total-payment').innerHTML = `
       <div class="total-card">
      <div class="section1">
        <div class="cardimage">
          <img src="images2/card_img.png" alt="">
        </div>
        <div class="input2">
          <div>
            <label for="">Card Holder Name:
            </label>
            <div>
              <input type="text" placeholder="Card Holder Name">
            </div>
          </div>
          <div>
            <label for="">Card Number:</label>
            <div>
              <input type="text" placeholder="123-456-789-112" maxlength="12">
            </div>
          </div>
      
        
          </div>
      </div>
      <div class="input2">
        <div>
          <label for="">Experiy Month/Year:
          </label>
          <div>
            <input type="text" placeholder="MM/YY" maxlength="5">
          </div>
        </div>
        <div>
          <label for="">CVV:</label>
          <div>
            <input class="cvv" type="text" placeholder="123" maxlength="3">
          </div>
        </div>
  
      
      </div>
    </div>
    `;
  });

  
  
  document.querySelector('.upi').addEventListener('click',()=>{
    console.log("added");
    document.querySelector('.total-payment').innerHTML = `
     
      <div class="upi-payment">
        <div class="upi-section1">
          <label for="">ENTER YOUR UPI ID:</label>
          <div>
            <input type="text" placeholder="6381733617@oksbi">
          </div>
        </div>
        <div class="upi-section1">
          <label for="">ACCOUNT HOLDER NAME:</label>
          <div>
            <input type="text" placeholder="ACCOUNT HOLDER NAME:">
          </div>
        </div>
      </div>
    
    `;
  });

  document.querySelector('.paybutton').addEventListener('click', ()=>{
    document.querySelector('.payment-section').style.display="none";
    document.querySelector('.main-container1').innerHTML = ` <div class="deliveryanimation">
  <div class="quote">
   <h2>Your Food will be delivered shortly...</h2>
   <video autoplay muted loop src="images2/Food Delivery bike.mp4" width="400px"></video>
  </div>`;
  });

  
 


