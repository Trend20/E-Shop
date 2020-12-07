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
        app.get('/product', (req, res) =>{
            res.render('product');
        })
        const productContainer = document.createElement('div');
        productContainer.classList.add('col');

        productContainer.innerHTML=`
                <div class="card">
                  <img src="${productImage.value}">
                  <div class="card-body">
                    <h3 class="card-title">${productTitle.value}</h3>
                    <div class="price">
                      <p class="amount">$40</p>
                      <button class="btn btn-primary">Add Cart</button>
                    </div>
                  </div>
                </div>
        `;
        row.appendChild(productContainer);
    }
});