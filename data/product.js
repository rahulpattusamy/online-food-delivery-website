export function getProduct(productId){
     let matchingProduct;
       products.forEach((product) => {
          if(product.id === productId){
             matchingProduct = product;
          }
       });

       return matchingProduct;
}

export const products = [{
    id:"a1",
    Image:'images2/idli.webp',
    foodname:'IDLI - 4 Pcs',
    star:4.2,
    price: 120,
    delivered:'30mins',
    complement:'Hot idli served with delicious sambhar & chutney.'

},{
    id:"a2",
    Image:'images2/dosa.jpeg',
    foodname:'DOSA - LARGE',
    star:4.4,
    price:140,
    delivered:'35mins',
    complement:'Dosa served with delicious sambhar & chutney.'
},
{   id:"a3",
    Image:'images2/podi idli.jpg',
    foodname:'PODI IDLLI - 4 Pcs',
    star:4.8,
    price:140,
    delivered:'30mins',
    complement:'Hot podi idli served with delicious sambhar & chutney.'  
},{
  id:"a4",
  Image:'images2/vada.webp',
  foodname:'VADAI - 4 Pcs',
  star:4.3,
  price:100,
  delivered:'30mins',
    complement:'Vadai served with delicious sambhar & chutney.'
},{
  id:"a5",
  Image:'images2/pongal.jpg',
  foodname:'PONGAL',
  star:4.5,
  price:90,
  delivered:'30mins',
  complement:'Pongal served with delicious sambhar & chutney.'

},{
  id:"a6",
  Image:'images2/buri.webp',
  foodname:'PURI - 3 Pcs',
  star:4.5,
  price:100,
  delivered:'40mins',
  complement:'Hot fluffy poori served with delicious aloo masala & chutney.'
},

{
  id:"a7",
  Image:'images2/chappati.webp',
  foodname:'CHAPPATI - 3 Pcs',
  star:4.4,
  price:110,
  delivered:'30mins',
  complement:'Hot chappati served with delicious channa masala & chutney.'
},

{
  id:"a8",
  Image:'images2/parrota.jpeg',
  foodname:'PARROTA - 2 Pcs',
  star:4.3,
  price:100,
  delivered:'30mins',
  complement:'Hot Large Parrota served with delicious veg kuruma'
},
{
  id:"a9",
  Image:'images2/naan.jpeg',
  foodname:'NAAN - 4 Pcs',
  star:4.3,
  price:120,
  delivered:'25mins',
  complement:'Hot Naan served with delicious veg gravy'
},
{
  id:"a10",
  Image:'images2/PANNER.jpeg',
  foodname:'PANEER BUTTER MASALA - [250ml]',
  star:4.3,
  price:240,
  delivered:'45mins',
  complement:'Classic paneer butter masala in creamy gravy.'
},

{
  id:"a11",
  Image:'images2/panner manjurian.webp',
  foodname:'PANNER MACHURIAN',
  star:4.4,
  price:250,
  delivered:'35mins',
  complement:'Hot and spicy paneer manchurian gravy.'
},

{
  id:"a12",
  Image:'images2/panner briyani.jpeg',
  foodname:'PANNER BRIYANI',
  star:4.3,
  price:220,
  delivered:'28mins',
  complement:'Paneer briyani Served with raita Just the way you like it.'
},


{
  id:"a13",
  Image:'images2/meals.avif',
  foodname:'VEG MEALS',
  star:4.5,
  price:180,
  delivered:'28mins',
  complement:'1 Rice+1 Sambar+1 Kolumbu+1 Rasam+1 Buttermilk+1 Kootu+1 Poriyal+1 Sweet+1 Pickle+1 Papad+1 Curd'
},

{
  id:"a14",
  Image:'images2/briyani.jpeg',
  foodname:'CHICKEN BRIYANI',
  star:4.7,
  price:250,
  delivered:'17mins',
  complement:'Authentic south indian briyani served with brinjal gravy-100ml, raitha-100ml.'
},
{
  id:"a15",
  Image:'images2/chicken gravy.jpeg',
  foodname:'BUTTER CHICKEN',
  star:4.6,
  price:235,
  delivered:'30mins',
 complement:' Hot and Spicy classic butter Chicken in creamy gravy.'
},

{
  id:"a16",
  Image:'images2/TANDOORI.jpeg',
  foodname:'TANDOORI CHICKEN - FULL',
  star:4.6,
  price:450,
  delivered:'34mins',
  complement:'Juicy chicken seasoned with freshly ground spices and grilled to perfection.'
},

{
  id:"a17",
  Image:'header-icon/burger.jpg',
  foodname:'CHICKEN BURGER',
  star:4.2,
  price:250,
  delivered:'30mins',
  complement:'Chicken zinger with delicious tandoori sauce & cheese slice'
},

{
  id:"a18",
  Image:'images2/pizza.avif',
  foodname:'PIZZA LARGE',
  star:4.2,
  price:300,
  delivered:'35mins',
  complement:'Our signature pizza crust loaded with Classic Mozzarella Cheese + Cheddar Cheese. '
},

{
  id:"a19",
  Image:'header-icon/noodles.jpg',
  foodname:'CHICKEN NOODLES',
  star:4.4,
  price:260,
  delivered:'37mins',
  complement:'Spicy mixture of chicken pieces, egg and Noodles tossed with spicy Schezwan sauce and seasoned'
},


{
  id:"a20",
  Image:'images2/KFC.jpg',
  foodname:'CRICKET MEAL',
  star:4.5,
  price:450,
  delivered:'35mins',
  complement:' Chicken Box of 2 Pc Hot & Crispy, 2 Pc Peri Peri Strips, Medium Fries & a Pepsi PET 475ml'
},


{
  id:"a21",
  Image:'images2/KFC3.jpg',
  foodname:'ZINGER MEAL',
  star:4.8,
  price:350,
  delivered:'30mins',
  complement:'New Zinger Pro premium Burger with Medium Popcorn and Pepsi PET 475ml at a deal price'
}
];

