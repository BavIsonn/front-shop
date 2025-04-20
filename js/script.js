document.addEventListener("DOMContentLoaded", domLoaded);

let productCard = null;
let productPrice = null;
let productImage = null;

let cartItems = null;
let nowTotal = 0;

function domLoaded() {
  const buttonsOnCard = document.querySelectorAll(".add-to-cart");
  buttonsOnCard.forEach((button) => {
    button.addEventListener("click", addToCart);
  });

  const checkoutbtn = document.getElementById("cart-checkoutbtn");
  checkoutbtn.addEventListener("click", cartcheckout);

  const cleatbtn = document.getElementById("cart-clearbtn");
  cleatbtn.addEventListener("click", cartClear);

}

function addToCart() {
  closest = this.closest(".product-item");
  productCard = closest.querySelector("h3").innerText;
  productPrice = closest.querySelector("span").innerText;
  const numericProductPrice = parseInt(productPrice.replace(/[^\d]/g, "")) || 0;
  productImage = closest.querySelector("img").src;
  
  const cart = document.querySelector(".cart");
  cartItems = cart.querySelectorAll(".cart-items");
  
  const cartItem = document.createElement("li");
  cartItem.classList.add("cart-item-info");
  
  const itemImg = document.createElement("img");
  itemImg.src = productImage;
  itemImg.alt = productCard;
  itemImg.classList.add("cart-item-img");
  
  const itemName = document.createElement("h3");
  itemName.textContent = productCard;
  itemName.classList.add("cart-item-name");
  
  const itemPrice = document.createElement("p");
  itemPrice.classList.add("cart-item-price");
  itemPrice.textContent = numericProductPrice;

  const itemRemoveBtn = document.createElement("button");
  itemRemoveBtn.textContent = "Удалить";
  itemRemoveBtn.classList.add("cart-remove-btn");
  itemRemoveBtn.id = 'cart-removebtn'
  
  const cartTotalElement = document.getElementById("cart-total-price");
  const cartTotal = parseInt(cartTotalElement.innerText) || 0;
  
  cartItems[0].appendChild(cartItem);
  cartItem.append(itemImg, itemName, itemPrice, itemRemoveBtn);
  
  
  nowTotal = cartTotal + numericProductPrice;
  cartTotalElement.innerText = nowTotal;

  cartRemove(itemRemoveBtn, cartTotalElement, numericProductPrice);
}
function cartcheckout() {
  const parent = document.querySelector(".cart-items");
  const lastchild = parent.lastElementChild;

  if (lastchild == null){
    alert("Ваша корзина пуста, попробуйте выбрать что-то для начала!")
  }
  else{
    alert("Спасибо за ваше доверие к нам!");
    location.reload();
  }
}

function cartClear() {
  const NowTotalElement = document.querySelector(".cart-price");
  document.querySelectorAll(".cart-item-info").forEach((el) => el.remove());

  nowTotal = 0;
  NowTotalElement.innerText = nowTotal;
}
function cartRemove(removeBtn, cartTotalElement, numericProductPrice){
  removeBtn.addEventListener("click", function() {
    const parent = document.querySelector(".cart-items");
    const lastchild = parent.lastElementChild;

    lastchild.remove();

    nowTotal = nowTotal - numericProductPrice;
    cartTotalElement.innerText = nowTotal;
  })
}