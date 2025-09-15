const products = [
  { id: 1, name: "Laptop", price: 50000 },
  { id: 2, name: "Headphones", price: 2000 },
  { id: 3, name: "Keyboard", price: 1000 },
  { id: 4, name: "Mouse", price: 800 }
];

if (document.getElementById("product-list")) {
  const productList = document.getElementById("product-list");
  products.forEach(p => {
    const div = document.createElement("div");
    div.className = "col-md-3 mb-3";
    div.innerHTML = `
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">${p.name}</h5>
          <p>₹${p.price}</p>
          <button class="btn btn-primary" onclick="addToCart(${p.id})">Add to Cart</button>
        </div>
      </div>`;
    productList.appendChild(div);
  });
}

function addToCart(id) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  const product = products.find(p => p.id === id);
  cart.push(product);
  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Added to cart!");
}

if (document.getElementById("cart-items")) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  const cartList = document.getElementById("cart-items");
  cart.forEach(item => {
    const li = document.createElement("li");
    li.className = "list-group-item";
    li.innerText = `${item.name} - ₹${item.price}`;
    cartList.appendChild(li);
  });
}
