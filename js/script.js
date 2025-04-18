document.addEventListener("DOMContentLoaded", ready);

let productCard = null;
let productPrice = null;
let productImage = null;

function ready() {
  console.log("DOM loaded");

  const buttons = document.querySelectorAll(".add-to-cart");
  buttons.forEach((button) => {
    button.addEventListener("click", buy);
  });
}

function buy() {
  closest = this.closest(".product-item");
  productCard = closest.querySelector("h3").innerText;
  productPrice = closest.querySelector("span").innerText;
  productImage = closest.querySelector("img").src;
  //   console.log(productCard);
  cart();
}

function cart() {
  const cart = document.querySelector(".cart");
  const cartItem = document.createElement("div");
  const cartItems = cart.querySelectorAll(".cart-items");
  const cartButton = cart.querySelector(".cart-checkout");

  // переоброзование в число

  const cartTotalElement = cart.querySelector(".cart-price");
  const cartTotal = parseInt(cartTotalElement.innerText) || 0;
  
  
  cartItem.classList.add("cart-item");
  cartItem.innerHTML = `<div class="cart-item-info"><h3>${productCard}:</h3><span class="cart-product-price">${productPrice}</span></div>`;
  const numericProductPrice = parseInt(productPrice.replace(/[^\d]/g, "")) || 0;
  cartItems[0].appendChild(cartItem);

  var newTotal = cartTotal + numericProductPrice;
  cartTotalElement.innerText = newTotal;

  cartButton.addEventListener("click", function () {
    alert("Thank you for your order!");

    cartItems[0].innerHTML = "";
    newTotal = 0;
    cartTotalElement.innerText = newTotal;
  })

}
