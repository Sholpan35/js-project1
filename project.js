  let side_cart = document.getElementById("side-cart");
  let cart_items = document.getElementById("cart-items");
  let cart_total = document.getElementById("cart-total");
  let close_cart = document.getElementById("close-cart"); 
  let clear_cart = document.getElementById("clear-cart");
  let openCartBtn = document.querySelector("ion-icon[name='bag-add-outline']");
  let mood=document.getElementById("mood")
  let cart = [];
  let total = 0;
  let hiddenOffers = document.querySelectorAll(".hidden");
  
  mood.addEventListener("click", function () {
    hiddenOffers.forEach(offer => {
      offer.style.display = "block";
    });
    mood.style.display = "none";
  });
  
  openCartBtn.addEventListener("click", function () {
    side_cart.classList.add("open");
  });
  close_cart.addEventListener("click", function () {
    side_cart.classList.remove("open");
  });
  function addToCart(name, price) {
    cart.push({ name: name, price: price });
    total += price;
    renderCart();
  }
  function removeFromCart(index) {
    total -= cart[index].price; 
    cart.splice(index, 1);
    renderCart();
  }
  function renderCart() {
    cart_items.innerHTML = "";
    for (let i = 0; i < cart.length; i++) {
      let item = cart[i];
      let li = document.createElement("li");
      li.innerHTML = item.name + " - " + item.price + "〒 " +
        '<button class="remove-item" data-index="' + i + '">✖</button>';
      cart_items.appendChild(li);
    }
    cart_total.textContent = total;
    let removeButtons = document.getElementsByClassName("remove-item");
    for (let j = 0; j < removeButtons.length; j++) {
      removeButtons[j].addEventListener("click", function () {
        let index = parseInt(this.getAttribute("data-index"));
        removeFromCart(index);
      });
    }
  }
  clear_cart.addEventListener("click", function () {
    cart = [];
    total = 0;
    renderCart();
  });

