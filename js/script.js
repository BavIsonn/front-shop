document.addEventListener("DOMContentLoaded", ready);

let productCard = null;
let productPrice = null;
let productImage = null;

function ready() {
  console.log("DOM loaded");

  const buttons = document.querySelectorAll("button");
  console.log(buttons);
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
  const cartItems = cart.querySelectorAll(".cart-items");
  const cartItem = document.createElement("div");
  cartItem.classList.add("cart-item");
  cartItem.innerHTML = `<div class="cart-item-info"><h3>${productCard}:</h3><span>${productPrice}</span></div>`;
  cartItems[0].appendChild(cartItem);
  
  const cartPrice = document.getElementById("cart-price").innerText; 
  cartPrice = innerText.replace("", "");
  cartPrice = null; 
  console.log(cartPrice);
}
