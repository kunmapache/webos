const productsContainer = document.getElementById("products");
const cartButton = document.getElementById("cart");
let cart = [];

// Obtener productos del servidor
fetch("http://localhost:3000/api/products")
  .then((res) => res.json())
  .then((products) => {
    products.forEach((product) => {
      const productCard = document.createElement("div");
      productCard.className = "product";
      productCard.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>$${product.price}</p>
        <button onclick="addToCart(${product.id}, '${product.name}', ${product.price})">Agregar al carrito</button>
      `;
      productsContainer.appendChild(productCard);
    });
  });

// Función para agregar productos al carrito
function addToCart(id, name, price) {
  cart.push({ id, name, price });
  cartButton.textContent = `🛒 Carrito (${cart.length})`;
}

// Simulación de envío del carrito al servidor
cartButton.addEventListener("click", () => {
  fetch("http://localhost:3000/api/cart", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(cart),
  }).then(() => alert("Carrito enviado al servidor"));
});
