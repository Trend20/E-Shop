// select the arrow
const rightArrows = document.querySelectorAll('.fa-arrow-right');

// product details DOM elements
const productImage = document.querySelector('.card-img-top');
const productTitle = document.querySelector('.card-title');
const productSum = document.querySelector('.amount');
const row = document.querySelector('.row');


// loop through the selected elements to find each element
rightArrows.forEach((arrow) =>{
    arrow.addEventListener('click', showProduct);

    function showProduct(){
      if(true){
        window.location = '../../product.ejs';
      }
    }
});