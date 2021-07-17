// Cart

let cartBox = document.getElementById('mySidepanel');
let btn = document.getElementsByClassName('item-favorite');
let closeBrn = document.getElementsByClassName('closebtn');

// Delete cart 
let remove_cart = document.getElementsByClassName("btn-danger");
for (let i = 0; i < remove_cart.length; i++) {
  let button = remove_cart[i];
  button.addEventListener("click", function () {
    let button_remove = event.target;
    button_remove.parentElement.parentElement.remove();
    updatecart()
  })
}

// Add to cart 
let add_cart = document.getElementsByClassName("item-favorite");
for (let i = 0; i < add_cart.length; i++) {
  let add = add_cart[i];
  add.addEventListener("click", function (event) {

    let button = event.target;
    let product = button.parentElement.parentElement;
    let img = product.parentElement.getElementsByClassName("gallery-img-banner")[0].src;
    let title = product.getElementsByClassName("card-title-name")[0].innerText;
    let price = product.getElementsByClassName("cart-title-price")[0].innerText;
    addItemToCart(title, price, img)
    // Khi thêm sản phẩm vào giỏ hàng thì sẽ hiển thị modal
    cartBox.style.display = "block";
    cartBox.style.width = "50%";
    
    updatecart()
  })
}

function addItemToCart(title, price, img) {
  let cartRow = document.createElement('div');
  cartRow.classList.add('cart-row');
  let cartItems = document.getElementsByClassName('cart-items')[0];
  let cart_title = cartItems.getElementsByClassName('cart-item-title');
  for (let i = 0; i < cart_title.length; i++) {
    if (cart_title[i].innerText == title) {
      alert('Sản Phẩm Đã Có Trong Giỏ Hàng')
      return
    }
  }

  let cartRowContents = `
  <div class="cart-item cart-column">
      <img class="cart-item-image" src="${img}" width="100" height="100">
      <span class="cart-item-title">${title}</span>
  </div>
  <span class="cart-price cart-column">${price}</span>
  <div class="cart-quantity cart-column">
      <input class="cart-quantity-input" type="number" value="1">
      <button class="btn btn-danger" type="button">x</button>
  </div>`
  cartRow.innerHTML = cartRowContents
  cartItems.append(cartRow)
  cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click', function () {
    let button_remove = event.target;
    button_remove.parentElement.parentElement.remove();
    updatecart()
  })
  cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', function (event) {
    let input = event.target
    if (isNaN(input.value) || input.value <= 0) {
      input.value = 1;
    }
    updatecart()
  })
}

// update cart 
function updatecart() {
  let cart_item = document.getElementsByClassName("cart-items")[0];
  let cart_rows = cart_item.getElementsByClassName("cart-row");
  let total = 0;
  for (let i = 0; i < cart_rows.length; i++) {
    let cart_row = cart_rows[i]
    let price_item = cart_row.getElementsByClassName("cart-price ")[0]
    let quantity_item = cart_row.getElementsByClassName("cart-quantity-input")[0]
    let price = parseFloat(price_item.innerText)
    let quantity = quantity_item.value
      total = total + (price * quantity)
  }
  document.getElementsByClassName("cart-total-price")[0].innerText = total + '.000 đ'
}

// Phan tram giam gia

// let newNumber = document.getElementsByClassName('new-price')[0];
// let oldNumber = document.getElementsByClassName('old-price')[0];

// console.log(newNumber, oldNumber)

// if(oldNumber.value == ""){
//   discount.style.display = none;
// } else{
//   discount = (1-(newNumber/oldNumber))*100 ;
//   discount.value = discount.toFixed(0) + "%"
// }

// console.log(newNumber, oldNumber, discount)

