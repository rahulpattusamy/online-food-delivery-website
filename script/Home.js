import {cart} from '../data/cart.js';

//container 1 code
const images = [{
    image:'header-icon/noodles.jpg'
},{
    image:'header-icon/briyani.jpg'
},{
    image:'header-icon/chicken.jpg'
},{
    image:'header-icon/fish.jpg'
},
];

let pictureHTML = '';
images.forEach((images) =>{
pictureHTML += `
 <div class="mySlides">
  <img src="${images.image}" alt="Image 1">
</div>
`
})
document.querySelector('.js-slideshow-container').innerHTML = pictureHTML;

let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("mySlides");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.display = "block";
    setTimeout(showSlides, 1500); // Change image every 2 seconds
}

function plusSlides(n) {
    slideIndex += n - 1;
}

//container2 code
  const product = [{ id:"a22",
  Image:'images2/briyani.jpeg',
  foodname:'BRIYANI',
},
{ id:"a23",
  Image:'images2/TANDOORI.jpeg',
  foodname:'TANDOORI',
},
{ id:"a24",
  Image:'images2/KFC3.jpg',
  foodname:'ZINGER MEAL',
},
{
id:"a25",  
Image:'images2/chicken gravy.jpeg',
foodname:'BUTTER CHICKEN',
},
{
id:"a26",  
Image:'images2/pizza.avif',
foodname:'PIZZA',
},
{
id:"a27",  
Image:'images2/meals.avif',
foodname:'VEG MEALS',
}];
let productHTML = '';
product.forEach((product)=>{
 productHTML += `
  <div class="food-content">
        <a href="7 - page2.html"> <img src="${product.Image}" alt="" class="food-image"> </a>
    <div class="foodinformation">

      <div>
        <p>${product.foodname}</p>
      </div>
      <div>
       
      
      </div>
    </div>
     <p class="complement"></p>   
   </div> 
 `
})
document.querySelector('.jscontainer').innerHTML = productHTML;

function updatecartquantity(){
  let carQuantity = 0;
  cart.forEach((Cartitem) => {
     carQuantity += Cartitem.quantity;
  });
  document.querySelector('.js-cart-quantity').innerHTML = carQuantity;
}


document.querySelectorAll('.js-add-to-cart').forEach((button) => {
button.addEventListener('click', () => {
  const productId = button.dataset.productId;
  addtocart(productId);
  updatecartquantity(); 
  });
});


const container3 = [{
  Image:'images2/Unauth_HP_illo1.svg',
  h3:'Something for everyone',
  p:'We got every meal covered and more snacks, dessert paper towels...'
},
{
  Image:'images2/car.png',
  h3:'Delivery or pickup',
  p:'Sit back and relax, have us deliver to you or skip the line with pickup.'
},

{
  Image:'images2/Unauth_HP_illo3.svg',
  h3:'Save with Speedy Plate+',
  p:'Join Speedy Plate+ and get unlimited $0 delivery fees, exclusive offers, and more.'
},
]

let aboutusHTML = '';
container3.forEach((container3) => {
  aboutusHTML += `
  <div class="container3content">
     <img class="car" src="${container3.Image}" alt="">
     <h3>${container3.h3}</h3>
     <p>${container3.p}</p>
    </div>
  `
})

document.querySelector('.js-container3').innerHTML = aboutusHTML;


