document.addEventListener("DOMContentLoaded", ready);

let productCard = null;
let productPrice = null;
let productImage = null;

function ready() {
  console.log("DOM loaded");

  const buttons = document.querySelectorAll(".add-to-cart");
  buttons.forEach((button) => {
    button.addEventListener("click", cart);
  });
}

function cart() {
  // получаем родительский элемент с классом product-item
  // и находим внутри него элементы h3, span и img

  closest = this.closest(".product-item");
  productCard = closest.querySelector("h3").innerText;
  productPrice = closest.querySelector("span").innerText;
  productImage = closest.querySelector("img").src;
  
  const cart = document.querySelector(".cart");
  const cartItems = cart.querySelectorAll(".cart-items");
  const cartButton = document.getElementById("cart-checkout-button");
  
  const cartItem = document.createElement("div");
  const cartItemDelete = document.createElement("button");
  
  cartItem.classList.add("cart-item-info"); // добавляем класс к элементу
  cartItemDelete.classList.add("cart-item-delete"); // добавляем класс к элементу
  
  // переоброзование в число
  
  const cartTotalElement = document.getElementById("cart-total-price");
  const cartTotal = parseInt(cartTotalElement.innerText) || 0;
  const numericProductPrice = parseInt(productPrice.replace(/[^\d]/g, "")) || 0;
  const cartProductPrice = numericProductPrice
  
  cartItem.innerHTML = `<img src="${productImage}" alt="${productCard}" class="cart-item-img"><h3 class="cart-product-name">${productCard}</h3><span class="cart-product-price">${cartProductPrice}</span>`;
  
  cartItems[0].appendChild(cartItem);

  var newTotal = cartTotal + numericProductPrice;
  cartTotalElement.innerText = newTotal;

  cartButton.addEventListener("click", function () {
    alert("ty 4 pokupku");
  });
}
