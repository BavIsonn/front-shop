document.addEventListener("DOMContentLoaded", domLoaded);

let productCard = null;
let productPrice = null;
let productImage = null;

let cartItems = null;


function domLoaded() {
  const buttonsOnCard = document.querySelectorAll(".add-to-cart");
  buttonsOnCard.forEach((button) => {
    button.addEventListener("click", addToCart);
  });

  const checkoutbtn = document.getElementById("cart-checkoutbtn")
  checkoutbtn.addEventListener("click", cartcheckout)
  
  const cleatbtn = document.getElementById("cart-clearbtn")
  cleatbtn.addEventListener("click", cartClear)
}

function addToCart() {
  closest = this.closest(".product-item");
  productCard = closest.querySelector("h3").innerText;
  productPrice = closest.querySelector("span").innerText;
  productImage = closest.querySelector("img").src;

  const cart = document.querySelector(".cart");
  cartItems = cart.querySelectorAll(".cart-items");

  const cartItem = document.createElement("div");
  cartItem.classList.add("cart-item-info");

  const img = document.createElement("img");
  img.src = productImage;
  img.alt = productCard;
  img.classList.add("cart-item-img");

  const name = document.createElement("h3");
  name.textContent = productCard;
  name.classList.add("cart-product-name");

  const removeBtn = document.createElement("button");
  removeBtn.textContent = "Удалить";
  removeBtn.classList.add("cart-remove-btn");

  const cartTotalElement = document.getElementById("cart-total-price");
  const cartTotal = parseInt(cartTotalElement.innerText) || 0;
  const numericProductPrice = parseInt(productPrice.replace(/[^\d]/g, "")) || 0;

  cartItems[0].appendChild(cartItem);
  cartItem.append(img, name, numericProductPrice, removeBtn);

  const nowTotal = cartTotal + numericProductPrice;
  cartTotalElement.innerText = nowTotal;

}
function cartcheckout() {
  alert("ty 4 pokupka");
}

function cartClear(){
  document.querySelectorAll('.cart-item-info').forEach(el => el.remove());
  
  
}
