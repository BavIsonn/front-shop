document.addEventListener("DOMContentLoaded", domLoaded);

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
  const productCard = closest.querySelector("h3").innerText;
  const productPrice = Number(closest.querySelector("span").getAttribute("data-price"));
  const productImage = closest.querySelector("img").src;
  
  const cart = document.querySelector(".cart");
  cartItems = cart.querySelectorAll(".cart-items");
  
  const cartItem = document.createElement("li");
  cartItem.classList.add("cart-item-info");
  cartItem.setAttribute("data-price", productPrice)
  
  const itemImg = document.createElement("img");
  itemImg.src = productImage;
  itemImg.alt = productCard;
  itemImg.classList.add("cart-item-img");
  
  const itemName = document.createElement("h3");
  itemName.textContent = productCard;
  itemName.classList.add("cart-item-name");
  
  const itemPrice = document.createElement("p");
  itemPrice.classList.add("cart-item-price");
  itemPrice.textContent = productPrice;

  const itemRemoveBtn = document.createElement("button");
  itemRemoveBtn.textContent = "Удалить";
  itemRemoveBtn.classList.add("cart-remove-btn");
  
  const cartTotalElement = document.getElementById("cart-total-price");
  const cartTotal = parseInt(cartTotalElement.innerText) || 0;
  
  cartItems[0].appendChild(cartItem);
  cartItem.append(itemImg, itemName, itemPrice, itemRemoveBtn);
  
  
  nowTotal = cartTotal + productPrice;
  cartTotalElement.innerText = nowTotal;

  cartRemove(itemRemoveBtn, cartTotalElement, productPrice);
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
function cartRemove(removeBtn, cartTotalElement, productPrice){
  removeBtn.addEventListener("click", function () {
    const item = this.closest(".cart-item-info");
    item.remove();
    nowTotal -= productPrice;
    cartTotalElement.innerText = nowTotal;
  });
}