let cart = [];

function addToCart(name, price) {
  cart.push(name + " - $" + price);
  document.getElementById("cart-list").innerHTML = cart.join("<br>");
}

function checkout() {
  alert("Thank you for buying!");
  cart = [];
  document.getElementById("cart-list").innerHTML = "";
}
